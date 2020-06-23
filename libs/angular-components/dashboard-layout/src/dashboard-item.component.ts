import {
  Input,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  AfterViewInit,
  OnInit,
  NgZone,
  ViewChildren,
  QueryList,
  OnDestroy,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { DrawService } from './draw.service';
import { DrawItem } from './draw-item';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MouseDownEvent, MouseMoveEvent, getElementDataAction, extendStyles, getPixel, Point } from './draw.utils';

export interface PosistionOffset {
  target: UxpDashboardItemComponent;
  top: number;
  left: number;
  width: number;
  height: number;
  phase?: 'startResizing' | 'resizing' | 'startDragging' | 'dragging' | 'endDragging' | 'endResizing';
}

@Component({
  selector: 'uxg-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-dashboard-item',
    '[class.moving]': 'editing'
  }
})
export class UxpDashboardItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() cols = 3;
  @Input() rows = 3;
  @Input() columnStart?: number;
  @Input() order?: number;

  @Output() changedSize = new EventEmitter<PosistionOffset>();
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

  @ViewChildren('scaler', { read: ElementRef }) scalers!: QueryList<ElementRef>;

  editing = false;
  _element: HTMLElement;

  private _drawItem?: DrawItem;
  private _viewInitilized = false;
  private _stopMouseListener$ = new Subject<void>();

  private _elementRect!: ClientRect;
  private _marginTop = 0;
  private _elementLeft = 0;
  private _columnWidth = 1;
  private _rowHeight = 0;
  private _activeTransform: Point = { x: 0, y: 0 };
  private _positionOffset: PosistionOffset = { target: this, width: 0, height: 0, top: 0, left: 0 };

  constructor(
    _elementRef: ElementRef<HTMLElement>,
    private drawService: DrawService,
    private _viewportRuler: ViewportRuler,
    private _cd: ChangeDetectorRef,
    private _ngZone: NgZone
  ) {
    this._element = _elementRef.nativeElement;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._removeEditMode();
  }

  ngAfterViewInit() {
    this._viewInitilized = true;
    if (this._editable) {
      this._initEditMode();
    }
  }

  private _initEditMode() {
    if (this._drawItem) return;

    this._drawItem = new DrawItem(
      this._element,
      this.drawService,
      this._viewportRuler,
      this._ngZone,
      this.scalers.map(el => el.nativeElement)
    );
    this._drawItem.pointerDown.pipe(takeUntil(this._stopMouseListener$)).subscribe(event => {
      this._startDrawing(event);
    });

    this._drawItem.pointerUp.pipe(takeUntil(this._stopMouseListener$)).subscribe(event => {
      this._endDrawing(event);
    });

    this._drawItem.pointerMove.pipe(takeUntil(this._stopMouseListener$)).subscribe(event => {
      this._drawing(event);
    });
  }

  private _removeEditMode() {
    this._stopMouseListener$.next();
    this._stopMouseListener$.complete();
    this._drawItem?.dispose();
    this._drawItem = undefined;
  }

  private _startDrawing(event: MouseDownEvent) {
    if (event.cancelled) {
      return;
    }
    this._elementRect = this._element.getBoundingClientRect();
    this._columnWidth = this.drawService.getGridColumnWith();
    this._rowHeight = this.drawService.getGridRowHeight();
    this._positionOffset = { target: this, width: 0, height: 0, top: 0, left: 0 };
    this.drawService.getBoundary().start(this._drawItem!);
    const action = getElementDataAction(event.source);
    if (action === 'drag') {
      this._toggleDragStyles(true, this._element);
      const styles = window.getComputedStyle(this._element);
      this._marginTop = parseInt(styles.marginTop, 10);
      this._elementLeft = parseInt(styles.left, 10);
    }
    this.changedSize.emit({ ...this._positionOffset, phase: action === 'drag' ? 'startDragging' : 'startResizing' });
  }

  private _endDrawing(event: MouseMoveEvent) {
    this._setEditing(false);
    const action = getElementDataAction(event.source);
    if (action === 'drag') {
      this._toggleDragStyles(false, this._element);
    }
    if (event.hasMoved) {
      this.changedSize.emit({ ...this._positionOffset, phase: action === 'drag' ? 'endDragging' : 'endResizing' });
    }

    this.drawService.getBoundary().stop();
  }

  private _drawing(event: MouseMoveEvent) {
    const action = getElementDataAction(event.source);
    this._setEditing(true);
    switch (action) {
      case 'drag': {
        this._draging(event);
        break;
      }
      case 'move-bottom-right': {
        const x = event.distance.x;
        const y = event.distance.y;
        const height = Math.max(this._elementRect.height + y, this._rowHeight);
        const boundaryRect = this.drawService.getBoundaryRect();
        let width = Math.max(this._elementRect.width + x, this._columnWidth);
        if (width + this._elementRect.left > boundaryRect.right - 1) {
          width = boundaryRect.right - this._elementRect.left - 1;
        }

        this._element.style.paddingTop = getPixel(height);
        this._element.style.width = getPixel(width);
        this._positionOffset.height = height - this._elementRect.height;
        this._positionOffset.width = width - this._elementRect.width;
        const changeSizeEvent: PosistionOffset = { ...this._positionOffset, phase: 'resizing' };
        this.changedSize.next(changeSizeEvent);
        if (!event.isScrolling) {
          this._updateContainer(event.pointerPosition.y, changeSizeEvent);
        }
        break;
      }
    }
  }

  private _updateContainer(pointerY: number, event: PosistionOffset) {
    const container = this.drawService.getBoundary();
    container._startScrollingIfNecessary(pointerY, event);
  }

  private _setEditing(value: boolean) {
    if (this.editing !== value) {
      this._ngZone.run(() => {
        this.editing = value;
        this._cd.markForCheck();
      });
    }
  }

  private _draging(event: MouseMoveEvent) {
    const activeTransform = this._activeTransform;
    activeTransform.x = event.pointerPosition.x - event.pickupPositionOnPage.x;
    activeTransform.y = event.pointerPosition.y - event.pickupPositionOnPage.y;
    this._validateTransform(activeTransform);

    this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    this._positionOffset.left = activeTransform.x;
    this._positionOffset.top = activeTransform.y;
    const changeSizeEvent: PosistionOffset = { ...this._positionOffset, phase: 'dragging' };
    this.changedSize.next(changeSizeEvent);
    if (!event.isScrolling) {
      this._updateContainer(event.pointerPosition.y, changeSizeEvent);
    }
  }

  private _toggleDragStyles(enable: boolean, element?: HTMLElement) {
    if (!element) {
      return;
    }
    const userSelect = enable ? '' : 'none';

    extendStyles(element.style, {
      touchAction: enable ? '' : 'none',
      webkitUserDrag: enable ? '' : 'none',
      webkitTapHighlightColor: enable ? '' : 'transparent',
      userSelect,
      cursor: enable ? 'move' : ''
    });
    if (enable) {
      element.classList.add('dragging');
    } else {
      element.classList.remove('dragging');
    }
  }

  private _validateTransform(activeTransform: Point) {
    const boundaryRect = this.drawService.getBoundaryRect();
    if (activeTransform.x + this._elementRect.left < boundaryRect.left) {
      activeTransform.x = boundaryRect.left - this._elementRect.left;
    }

    if (activeTransform.x + this._elementRect.left + this._elementRect.width > boundaryRect.right - 1) {
      activeTransform.x = boundaryRect.right - this._elementRect.left - this._elementRect.width - 1;
    }
  }

  private _applyRootElementTransform(x: number, y: number, snap = false) {
    this._element.style.marginTop = getPixel(this._marginTop + y);
    this._element.style.left = getPixel(this._elementLeft + x);
  }
}
