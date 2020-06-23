import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  Input,
  TemplateRef,
  AfterContentInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  NgZone,
  ViewChild,
  ViewContainerRef,
  EmbeddedViewRef
} from '@angular/core';

import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UxpDashboardItemComponent, PosistionOffset } from './dashboard-item.component';
import { defaultGridDefinition, GridItemPosition } from './models';
import { Rect } from './rect';
import { GridCoordinator } from './grid-coordinator';
import { RatioGridStyler } from './styler';
import { Subject, merge, Subscription, interval, animationFrameScheduler } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { Point, incrementVerticalScroll, getMutableClientRect, adjustClientRect, getPixel } from './draw.utils';
import { DrawService } from './draw.service';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DrawItem } from './draw-item';

type ContentItem = UxpDashboardItemComponent & {
  rect: Rect;
  stamp?: boolean;
};

interface ScrollPosition {
  top: number;
  left: number;
}

/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 */
const AUTO_SCROLL_STEP = 2;

@Component({
  selector: 'uxg-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-dashboard-layout'
  }
})
export class UxgDashboardLayoutComponent implements OnInit, AfterContentInit, OnDestroy {
  private _cols = defaultGridDefinition.cols;
  private _rowHeight = defaultGridDefinition.rowHeight;
  private _gutter = defaultGridDefinition.gutter;
  private _destroyed$ = new Subject<void>();

  @ContentChildren(UxpDashboardItemComponent) _contentChildren!: QueryList<UxpDashboardItemComponent>;
  @ViewChild('placeHolder', { read: TemplateRef, static: true }) placeholderTemplateRef!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) containerViewRef!: ViewContainerRef;

  @Input() scrollableParentSelector?: string;
  @Input() paddingTop = 0;
  @Input() paddingBottom = 0;
  @Input()
  get cols(): number {
    return this._cols;
  }

  set cols(value: number) {
    this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
    this._gridCoordinator = new GridCoordinator(this._cols);
  }

  @Input()
  get gutterSize(): number {
    return this._gutter;
  }
  set gutterSize(value: number) {
    this._gutter = value;
  }

  @Input()
  get rowHeight(): string {
    return this._rowHeight;
  }
  set rowHeight(value: string) {
    const newValue = `${value == null ? '1:1' : value}`;

    if (newValue !== this._rowHeight) {
      this._rowHeight = newValue;
    }
    this._parseRatio(value);
  }

  private _editable = false;
  @Input()
  public get editable() {
    return this._editable;
  }
  public set editable(value) {
    this._editable = value;
    if (this._viewInitilized) {
      if (value) {
        this._initEditMode();
      } else {
        this._removeEditMode();
      }
    }
  }

  _elementRect!: ClientRect;
  _gridColumnWidth = 1;
  _gridRowHeight = 1;

  private _gridCoordinator!: GridCoordinator;
  private _styler!: RatioGridStyler;
  private _orderedContentChildren: Array<ContentItem> = [];
  private _viewInitilized = false;
  private _removeEditMode$ = new Subject<void>();
  private _element: HTMLElement;
  private _rowHeightRatio = 1;
  private _placeHolderElement?: HTMLElement;
  private _placeHolderElementRef: EmbeddedViewRef<any> | undefined;
  private _shiftTargetKeys: string[] = [];
  private _shiftTargets: Point[] = [];
  private _targetPosition: GridItemPosition = { columnStart: 0, columnEnd: 0, rowEnd: 0, rowStart: 0 };
  private _scrollNode: HTMLElement | Window | null = null;
  private _scrollNodeRect: ClientRect | null | undefined = null;
  private _scrollPosition: ScrollPosition = { top: 0, left: 0 };
  private _viewportScrollSubscription = Subscription.EMPTY;
  private _stopScrollTimers = new Subject<void>();
  private _scrollDirection: 'UP' | 'DOWN' | 'NONE' = 'NONE';
  private _activeItem?: DrawItem;
  constructor(
    elementRef: ElementRef,
    private _ngZone: NgZone,
    private _drawService: DrawService,
    private _viewportRuler: ViewportRuler
  ) {
    this._element = elementRef.nativeElement;
  }

  ngOnInit() {
    this._styler = new RatioGridStyler(this.cols, this._rowHeightRatio, this.gutterSize);
    this._gridCoordinator = new GridCoordinator(this._cols);
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
    this._orderedContentChildren = [];
    this._removeEditMode();
    this._removeEditMode$.complete();
    this._stopScrolling();
    this._stopScrollTimers.complete();
  }

  ngAfterContentInit() {
    this._viewInitilized = true;
    this._contentChildren.changes.pipe(startWith(null), takeUntil(this._destroyed$)).subscribe(() => {
      this._resetLayout();
      if (this._editable) {
        this._initEditMode();
      }
    });
  }

  _startScrollingIfNecessary(pointerY: number, event: PosistionOffset) {
    const top = Math.max(this._scrollNodeRect!.top + this.paddingTop, this._elementRect.top);
    const scrollTop = this._scrollPosition.top;
    this._scrollDirection = 'NONE';
    if (pointerY < top && scrollTop > 0) {
      this._scrollDirection = 'UP';
    } else if (pointerY > this._scrollNodeRect!.bottom - this.paddingBottom) {
      this._scrollDirection = 'DOWN';
    }

    if (this._scrollDirection !== 'NONE') {
      this._ngZone.runOutsideAngular(this._startScrollInterval);
    } else {
      this._stopScrolling();
    }
  }

  private _initEditMode() {
    this._drawService.setBoundary(this);
    const changedOrDestroyed = merge(this._contentChildren.changes, this._destroyed$, this._removeEditMode$);
    merge<PosistionOffset>(...this._contentChildren.map(child => child.changedSize))
      .pipe(takeUntil(changedOrDestroyed))
      .subscribe(event => {
        const contentItem = event.target as ContentItem;
        switch (event.phase) {
          case 'startResizing': {
            this._targetPosition = contentItem.rect.getPosition();
            contentItem.stamp = true;
            this._showPlaceholderElement(contentItem.rect.getPosition());
            break;
          }
          case 'resizing': {
            const resizingPosition: GridItemPosition = this.calculateNewPosition(this._targetPosition, event);
            this._showPlaceholderElement(resizingPosition);
            this._fit(resizingPosition);
            break;
          }
          case 'endResizing': {
            contentItem.stamp = false;
            contentItem.rect = new Rect(this.calculateNewPosition(this._targetPosition, event));
            this._removePlaceholderElement();
            this._styler.setStyle(contentItem._element, contentItem.rect.getPosition());
            this._sortItemsByPosition();
            break;
          }
          case 'startDragging': {
            this._targetPosition = contentItem.rect.getPosition();
            contentItem.stamp = true;
            this._showPlaceholderElement(contentItem.rect.getPosition());
            this._updateShiftTargets(contentItem.rect);
            break;
          }
          case 'dragging': {
            const movingPosition: GridItemPosition = this.calculateNewPosition(this._targetPosition, event);
            this._shift(contentItem, movingPosition.columnStart, movingPosition.rowStart);
            this._showPlaceholderElement(contentItem.rect.getPosition());
            this._fit(contentItem.rect.getPosition());
            break;
          }
          case 'endDragging': {
            contentItem.stamp = false;
            this._removePlaceholderElement();
            this._styler.setStyle(contentItem._element, contentItem.rect.getPosition());
            this._sortItemsByPosition();
            break;
          }
        }
      });
  }

  /**
   * Called by one item has started drawing.
   */
  start(item: DrawItem) {
    this._activeItem = item;
    this._scrollDirection = 'NONE';
    this._elementRect = getMutableClientRect(this._element);
    this._gridColumnWidth = (this._elementRect.width - (this._cols - 1) * this._gutter) / this._cols;
    this._gridRowHeight = this._gridColumnWidth * this._rowHeightRatio;
    this._cacheScrollPosition();
    this._listenToScrollEvents();
  }

  /**
   * Called by one item has stop drawing
   */
  stop() {
    this._activeItem = undefined;
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
  }

  private _listenToScrollEvents() {
    this._viewportScrollSubscription = this._drawService.scroll.subscribe(event => {
      const target = event.target as HTMLElement | Document;
      let newTop = 0;
      let newLeft = 0;
      if (target === document) {
        const viewportScrollPosition = this._viewportRuler!.getViewportScrollPosition();
        newTop = viewportScrollPosition.top;
        newLeft = viewportScrollPosition.left;
      } else if (target === this._scrollNode) {
        newTop = (target as HTMLElement).scrollTop;
        newLeft = (target as HTMLElement).scrollLeft;
      }

      const topDifference = this._scrollPosition.top - newTop;
      const leftDifference = this._scrollPosition.left - newLeft;
      adjustClientRect(this._elementRect, topDifference, leftDifference);
      this._activeItem!._pickupPositionOnPage.y = this._activeItem!._pickupPositionOnPage.y + topDifference;

      this._scrollPosition.top = newTop;
      this._scrollPosition.left = newLeft;
    });
  }

  private _cacheScrollPosition() {
    if (this.scrollableParentSelector === 'viewport') {
      this._scrollNode = window;
      const { width, height } = this._viewportRuler.getViewportSize();
      const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
      this._scrollNodeRect = clientRect;
      this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
    } else {
      this._scrollNode = this.scrollableParentSelector
        ? document.querySelector<HTMLElement>(this.scrollableParentSelector)
        : this._element;

      this._scrollNodeRect = this._scrollNode!.getBoundingClientRect();
      this._scrollPosition = { top: this._scrollNode!.scrollTop, left: this._scrollNode!.scrollLeft };
    }
  }

  /** Starts the interval that'll auto-scroll the element. */
  private _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler)
      .pipe(takeUntil(this._stopScrollTimers))
      .subscribe({
        next: () => {
          const node = this._scrollNode;
          console.log(this._scrollDirection);
          if (this._scrollDirection === 'UP') {
            incrementVerticalScroll(node!, -AUTO_SCROLL_STEP);
            this._drawService.incrementScroll.next(-AUTO_SCROLL_STEP);
          } else if (this._scrollDirection === 'DOWN') {
            incrementVerticalScroll(node!, AUTO_SCROLL_STEP);
            this._drawService.incrementScroll.next(AUTO_SCROLL_STEP);
          }
        }
      });
  };

  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }

  private calculateNewPosition(oldPosition: GridItemPosition, offset: PosistionOffset): GridItemPosition {
    return {
      columnStart: oldPosition.columnStart + Math.round(offset.left / this._gridColumnWidth),
      rowStart: oldPosition.rowStart + Math.round(offset.top / this._gridRowHeight),
      columnEnd: Math.min(oldPosition.columnEnd + Math.round(offset.width / this._gridColumnWidth), this.cols),
      rowEnd: oldPosition.rowEnd + Math.round(offset.height / this._gridRowHeight)
    };
  }

  private _fit(position: GridItemPosition) {
    this._gridCoordinator.reset();
    this._gridCoordinator.placed(new Rect(position));
    this._shiftLayout();
  }

  private _removeEditMode() {
    this._removeEditMode$.next();
    this._scrollNode = null;
    this._scrollNodeRect = null;
    this._drawService.removeBoundary();
  }

  private _updateShiftTargets(itemRect: Rect) {
    this._shiftTargetKeys = [];
    this._shiftTargets = [];
    const boundsSize = this.cols - itemRect.width;

    // add targets on top
    for (let i = 0; i < this.cols; i++) {
      this._addShiftTarget(i, 0, boundsSize);
    }

    // pack items to get theirs position.
    for (const contentItem of this._orderedContentChildren) {
      const rect = contentItem.rect;
      this._addShiftTarget(rect.x, rect.y, boundsSize);
      this._addShiftTarget(rect.x, rect.y + rect.height, boundsSize);

      this._addShiftTarget(contentItem.rect.x, contentItem.rect.y, boundsSize);
      for (let i = 1; i < contentItem.rect.width; i++) {
        this._addShiftTarget(rect.x + i, rect.y + rect.height, boundsSize);
      }
    }
  }

  private _addShiftTarget(columnStart: number, rowStart: number, boundsSize: number) {
    if (columnStart > boundsSize) {
      return;
    }
    // create string for a key, easier to keep track of what targets
    const key = columnStart + ',' + rowStart;
    const hasKey = this._shiftTargetKeys.indexOf(key) !== -1;
    if (hasKey) {
      return;
    }
    this._shiftTargetKeys.push(key);
    this._shiftTargets.push({ x: columnStart, y: rowStart });
  }

  private _shift(item: ContentItem, columnStart: number, rowStart: number) {
    let shiftPosition: Point | null = null;
    let minDistance = Infinity;
    const position = { x: columnStart, y: rowStart };
    for (const target of this._shiftTargets) {
      const distance = this._getDistance(target, position);
      if (distance < minDistance) {
        shiftPosition = target;
        minDistance = distance;
      }
    }
    if (shiftPosition) {
      item.rect.x = shiftPosition.x;
      item.rect.y = shiftPosition.y;
    }
  }

  private _getDistance(a: Point, b: Point): number {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   *  Layout items base on input data
   */
  private _resetLayout() {
    const orderedItems = this._contentChildren
      .toArray()
      .map((item, index) => {
        item.order = item.order === undefined ? index : item.order;
        return item;
      })
      .sort((itemA, itemB) => itemA.order! - itemB.order!);

    this._gridCoordinator.reset();
    this._orderedContentChildren = orderedItems.map(contentItem => {
      const rect =
        (contentItem as ContentItem).rect ||
        new Rect({
          columnStart: contentItem.columnStart || 0,
          columnEnd: contentItem.cols + (contentItem.columnStart || 0),
          rowStart: 0,
          rowEnd: contentItem.rows
        });
      const useColumnPack = !!(contentItem as ContentItem).rect;
      (contentItem as ContentItem).rect = useColumnPack
        ? this._gridCoordinator.columnPack(rect)
        : this._gridCoordinator.pack(rect);
      return contentItem as ContentItem;
    });
    this._layoutItems();
  }

  /**
   * Layout items, maintaining theirs column posisition
   */
  private _shiftLayout() {
    for (const contentItem of this._orderedContentChildren) {
      if (!contentItem.stamp) {
        const rect = contentItem.rect;
        contentItem.rect = this._gridCoordinator.columnPack(rect);
      }
    }
    this._layoutItems();
  }

  private _layoutItems() {
    for (const contentItem of this._orderedContentChildren) {
      if (!contentItem.stamp) {
        this._styler.setStyle(contentItem._element, contentItem.rect.getPosition());
      }
    }
  }

  private _sortItemsByPosition() {
    this._orderedContentChildren.sort((a, b) => {
      return a.rect.y - b.rect.y || a.rect.x - b.rect.x;
    });

    this._orderedContentChildren.forEach((item, index) => {
      item.order = index;
      item.columnStart = item.rect.x;
    });
  }

  private _parseRatio(value: string): void {
    const ratioParts = value.split(':');

    if (ratioParts.length !== 2) {
      throw Error(`dashboard-layout: invalid ratio given for row-height: "${value}"`);
    }

    this._rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }

  private _showPlaceholderElement(position: GridItemPosition) {
    if (!this._placeHolderElement) {
      const viewRef = this.containerViewRef.createEmbeddedView(this.placeholderTemplateRef);
      this._placeHolderElement = viewRef.rootNodes[0];
      this._placeHolderElementRef = viewRef;
    }
    this._styler.setStyle(this._placeHolderElement!, position);
  }

  private _removePlaceholderElement() {
    if (this._placeHolderElement && this._placeHolderElement.parentNode) {
      this._placeHolderElement.parentNode.removeChild(this._placeHolderElement);
    }

    if (this._placeHolderElementRef) {
      this._placeHolderElementRef.destroy();
    }
    this._placeHolderElementRef = this._placeHolderElement = undefined;
  }
}
