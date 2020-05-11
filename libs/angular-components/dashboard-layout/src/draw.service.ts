import { Injectable, Inject, NgZone, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { activeCapturingEventOptions } from './draw.utils';

/**
 * Service manages global event listeners on the `document`
 * and keeps trace of number drawing item, active item to clean event lisener properly.
 */
@Injectable({ providedIn: 'root' })
export class DrawService implements OnDestroy {
  private _registredItems = new Set<any>();

  private _activateItems = new Set<any>();

  /** Keeps track of the event listeners that we've bound to the `document`. */
  private _globalListeners = new Map<
    string,
    {
      handler: (event: Event) => void;
      options?: AddEventListenerOptions | boolean;
    }
  >();

  readonly pointerMove: Subject<TouchEvent | MouseEvent> = new Subject<TouchEvent | MouseEvent>();
  readonly pointerUp: Subject<TouchEvent | MouseEvent> = new Subject<TouchEvent | MouseEvent>();
  readonly scroll: Subject<Event> = new Subject<Event>();

  constructor(private _ngZone: NgZone, @Inject(DOCUMENT) private _document: any) {}

  registerItem(item: any) {
    this._registredItems.add(item);
    // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.
    if (this._registredItems.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
      });
    }
  }

  removeItem(item: any) {
    this._registredItems.delete(item);
    this.stopListener(item);

    if (this._registredItems.size === 0) {
      this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
    }
  }

  startListener(item: any, event: TouchEvent | MouseEvent) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activateItems.has(item)) {
      return;
    }

    this._activateItems.add(item);

    if (this._activateItems.size === 1) {
      const isTouchEvent = event.type.startsWith('touch');
      const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
      const upEvent = isTouchEvent ? 'touchend' : 'mouseup';

      // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.
      this._globalListeners
        .set(moveEvent, {
          handler: (e: Event) => this.pointerMove.next(e as TouchEvent | MouseEvent),
          options: activeCapturingEventOptions
        })
        .set(upEvent, {
          handler: (e: Event) => this.pointerUp.next(e as TouchEvent | MouseEvent),
          options: true
        })
        .set('scroll', {
          handler: (e: Event) => this.scroll.next(e),
          // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
          // the document. See https://github.com/angular/components/issues/17144.
          options: true
        })
        // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        .set('selectstart', {
          handler: this._preventDefaultWhileDragging,
          options: activeCapturingEventOptions
        });

      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }

  stopListener(item: any) {
    this._activateItems.delete(item);

    if (this._activateItems.size === 0) {
      this._clearGlobalListeners();
    }
  }

  isListening(item: any) {
    return this._activateItems.has(item);
  }

  ngOnDestroy() {
    this._registredItems.forEach(instance => this.stopListener(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }

  private _preventDefaultWhileDragging = (event: Event) => {
    if (this._activateItems.size) {
      event.preventDefault();
    }
  };

  private _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });

    this._globalListeners.clear();
  }
}
