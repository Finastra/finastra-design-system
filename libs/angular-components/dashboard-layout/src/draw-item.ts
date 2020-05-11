import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import {
  activeEventListenerOptions,
  passiveEventListenerOptions,
  isTouchEvent,
  MOUSE_EVENT_IGNORE_TIME,
  Point,
  MouseDownEvent,
  DEFAULT_CONFIG,
  MouseConfig,
  MouseMoveEvent,
  getElementDataAction,
  getElementDataActionDelay
} from './draw.utils';
import { DrawService } from './draw.service';
import { NgZone } from '@angular/core';

/**
 * This class links between component and mouse events.
 * So each component must create an instance of this class then subscribe to mouse event (pointerUp, pointDown...).
 *
 * There are some logic implemented in this class level:
 * - on pointerUp will clean all event listener at item level.
 * And possible at global level if there are not any active item.
 */
export class DrawItem {
  pointerDown = new Subject<MouseDownEvent>();
  pointerUp = new Subject<MouseMoveEvent>();
  pointerMove = new Subject<MouseMoveEvent>();

  /** Cached scroll position on the page when the element was picked up. */
  scrollPosition: { top: number; left: number } = { top: 0, left: 0 };

  private _pointerMoveSubscription = Subscription.EMPTY;
  private _pointerUpSubscription = Subscription.EMPTY;
  private _scrollSubscription = Subscription.EMPTY;

  private _hasStartedDrawing = false;
  private _lastTouchEventTime?: number;
  private _rootElementTapHighlight: string | null = null;
  private _hasMoved = false;

  /** Coordinates within the element at which the user picked up the element. */
  private _pickupPositionInElement: Point = { x: 0, y: 0 };

  /** Coordinates on the page at which the user picked up the element. */
  private _pickupPositionOnPage: Point = { x: 0, y: 0 };

  /** Keeps track of the direction in which the user is dragging along each axis. */
  private _pointerDirectionDelta: { x: -1 | 0 | 1; y: -1 | 0 | 1 } = { x: 0, y: 0 };

  /** Pointer position at which the last change in the delta occurred. */
  private _pointerPositionAtLastDirectionChange: Point = { x: 0, y: 0 };

  /** Time at which the last dragging sequence was started. */
  private _drawStartTime = 0;

  private _source?: HTMLElement;

  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay = 0;

  lockAxis: 'x' | 'y' | undefined;

  private _dragDelayTimeout: any = null;
  private _currentTaget: HTMLElement | null = null;
  constructor(
    private _element: HTMLElement,
    private _drawService: DrawService,
    private _viewportRuler: ViewportRuler,
    _ngZone: NgZone,
    private _handles: HTMLElement[] = [],
    private _config: MouseConfig = DEFAULT_CONFIG
  ) {
    _drawService.registerItem(this);
    _ngZone.runOutsideAngular(() => {
      _element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
      _element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    });
  }

  dispose() {
    this._drawService.removeItem(this);
    this._removeSubscriptions();
    this._element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    this._element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    delete this._element;
    delete this._handles;
    delete this._source;
  }

  private _pointerDown = (event: MouseEvent | TouchEvent) => {
    // Delegate the event based on whether it started from a handle or the element itself.
    if (this._handles.length) {
      const targetHandle = this._handles.find(handle => {
        const target = event.target;
        return !!target && (target === handle || handle.contains(target as HTMLElement));
      });

      if (targetHandle) {
        const action = getElementDataAction(targetHandle);
        const actionDelay = getElementDataActionDelay(targetHandle);
        if (action === 'drag' && actionDelay) {
          this._currentTaget = targetHandle;
          this._listenForDelayMouseUp();
          this._dragDelayTimeout = window.setTimeout(() => {
            this._dragDelayTimeout = null;
            this._removeListenForDelayMouseUp();
            this._initializeDrawSequence(targetHandle, event);
          }, 251);
        } else {
          this._initializeDrawSequence(targetHandle, event);
        }
        // this._initializeDrawSequence(targetHandle, event);
      }
    } else if (event.target === this._element) {
      this._initializeDrawSequence(this._element, event);
    }
  };

  private _listenForDelayMouseUp() {
    if (!this._currentTaget) {
      return;
    }
    this._currentTaget.addEventListener('mouseup', this._delayMouseUp, activeEventListenerOptions);
    this._currentTaget.addEventListener('touchstart', this._delayMouseUp, passiveEventListenerOptions);
    this._currentTaget.addEventListener('mousemove', this._delayMouseUp, activeEventListenerOptions);
    this._currentTaget.addEventListener('touchmove', this._delayMouseUp, activeEventListenerOptions);
  }

  private _removeListenForDelayMouseUp() {
    if (!this._currentTaget) {
      return;
    }
    this._currentTaget.removeEventListener('mouseup', this._delayMouseUp);
    this._currentTaget.removeEventListener('touchstart', this._delayMouseUp);
    this._currentTaget.removeEventListener('mousemove', this._delayMouseUp);
    this._currentTaget.removeEventListener('touchmove', this._delayMouseUp);
  }

  private _delayMouseUp = (event: MouseEvent | TouchEvent) => {
    if (this._dragDelayTimeout) {
      window.clearTimeout(this._dragDelayTimeout);
      this._dragDelayTimeout = null;
      this._removeListenForDelayMouseUp();
      this.pointerDown.next({
        event,
        pickupPositionInElement: { x: 0, y: 0 },
        pickupPositionOnPage: { x: 0, y: 0 },
        pointerPosition: { x: 0, y: 0 },
        source: this._element,
        cancelled: true
      });
    }
  };

  private _initializeDrawSequence(referenceElement: HTMLElement, event: MouseEvent | TouchEvent) {
    // Always stop propagation for the event that initializes
    // the dragging sequence, in order to prevent it from potentially
    // starting another sequence for a draggable parent somewhere up the DOM tree.
    event.stopPropagation();

    const isDrawing = this._hasStartedDrawing;
    const rootElement = this._element;
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && (event as MouseEvent).button !== 0;
    const isSyntheticEvent =
      !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();

    // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.
    if (event.target && (event.target as HTMLElement).draggable && event.type === 'mousedown') {
      event.preventDefault();
    }

    // Abort if the user is already dragging or is using a mouse button other than the primary one.
    if (isDrawing || isAuxiliaryMouseButton || isSyntheticEvent) {
      return;
    }

    // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.
    if (this._handles.length) {
      this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
      rootElement.style.webkitTapHighlightColor = 'transparent';
    }

    this._hasStartedDrawing = this._hasMoved = false;

    // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
    this._removeSubscriptions();
    this._pointerMoveSubscription = this._drawService.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._drawService.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._drawService.scroll.pipe(startWith('')).subscribe(() => {
      this.scrollPosition = this._viewportRuler.getViewportScrollPosition();
    });

    // If we have a custom preview template, the element won't be visible anyway so we avoid the
    // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
    this._pickupPositionInElement = this._getPointerPositionInElement(referenceElement, event);
    const pointerPosition = (this._pickupPositionOnPage = this._getPointerPositionOnPage(event));
    this._pointerDirectionDelta = { x: 0, y: 0 };
    this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
    this._drawStartTime = Date.now();
    this._drawService.startListener(this, event);
    this._source = referenceElement;
    this.pointerDown.next({
      source: referenceElement,
      event,
      pickupPositionInElement: this._pickupPositionInElement,
      pickupPositionOnPage: this._pickupPositionOnPage,
      pointerPosition,
      cancelled: false
    });
  }

  private _pointerMove = (event: MouseEvent | TouchEvent) => {
    if (!this._hasStartedDrawing) {
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;

      // Only start dragging after the user has moved more than the minimum distance in either
      // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
      // in the `pointerMove` subscription, because we're not guaranteed to have one move event
      // per pixel of movement (e.g. if the user moves their pointer quickly).
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._drawStartTime + (this.dragStartDelay || 0);
        if (!isDelayElapsed) {
          this._endDrawSequence(event);
          return;
        }
        this._hasStartedDrawing = true;
        if (isTouchEvent(event)) {
          this._lastTouchEventTime = Date.now();
        }
      }

      return;
    }

    const constrainedPointerPosition = this._getConstrainedPointerPosition(event);
    this._hasMoved = true;
    event.preventDefault();
    this._updatePointerDirectionDelta(constrainedPointerPosition);

    this.pointerMove.next({
      source: this._source,
      pickupPositionOnPage: this._pickupPositionOnPage,
      pickupPositionInElement: this._pickupPositionInElement,
      pointerPosition: constrainedPointerPosition,
      pointerPositionAtLastDirectionChange: this._pointerPositionAtLastDirectionChange,
      event,
      hasMoved: this._hasMoved,
      distance: this._getDrawDistance(constrainedPointerPosition),
      delta: this._pointerDirectionDelta
    });
  };

  private _pointerUp = (event: MouseEvent | TouchEvent) => {
    this._endDrawSequence(event);
  };

  private _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
  }

  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  private _endDrawSequence(event: MouseEvent | TouchEvent) {
    this._drawStartTime = this._lastTouchEventTime = 0;
    this._removeSubscriptions();
    this._drawService.stopListener(this);

    if (this._handles) {
      this._element.style.webkitTapHighlightColor = this._rootElementTapHighlight;
      this._rootElementTapHighlight = null;
    }

    const position = this._getPointerPositionOnPage(event);
    this.pointerUp.next({
      source: this._source,
      pointerPosition: position,
      pickupPositionInElement: this._pickupPositionInElement,
      pickupPositionOnPage: this._pickupPositionOnPage,
      pointerPositionAtLastDirectionChange: this._pointerPositionAtLastDirectionChange,
      event,
      hasMoved: this._hasMoved,
      distance: this._getDrawDistance(position),
      delta: this._pointerDirectionDelta
    });
    this._hasMoved = this._hasStartedDrawing = false;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  private _getPointerPositionInElement(referenceElement: HTMLElement, event: MouseEvent | TouchEvent): Point {
    const elementRect = this._element.getBoundingClientRect();
    const handleElement = referenceElement === this._element ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const x = point.pageX - referenceRect.left - this.scrollPosition.left;
    const y = point.pageY - referenceRect.top - this.scrollPosition.top;

    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }

  /** Determines the point of the page that was touched by the user. */
  private _getPointerPositionOnPage(event: MouseEvent | TouchEvent): Point {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;

    return {
      x: point.pageX - this.scrollPosition.left,
      y: point.pageY - this.scrollPosition.top
    };
  }

  /** Gets the pointer position on the page, accounting for any position constraints. */
  private _getConstrainedPointerPosition(event: MouseEvent | TouchEvent): Point {
    const point = this._getPointerPositionOnPage(event);
    const constrainedPoint = point;
    if (this.lockAxis === 'x') {
      constrainedPoint.y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y') {
      constrainedPoint.x = this._pickupPositionOnPage.x;
    }

    return constrainedPoint;
  }

  /** Updates the current draw delta, based on the user's current pointer position on the page. */
  private _updatePointerDirectionDelta(pointerPositionOnPage: Point) {
    const { x, y } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;

    // Amount of pixels the user has dragged since the last time the direction changed.
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);

    // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }

    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }

    return delta;
  }

  private _getDrawDistance(currentPosition: Point): Point {
    const pickupPosition = this._pickupPositionOnPage;

    if (pickupPosition) {
      return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
    }

    return { x: 0, y: 0 };
  }
}
