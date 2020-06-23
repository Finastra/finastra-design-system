import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { EmbeddedViewRef } from '@angular/core';
// import { ItemLayout } from '../store/models/item-layout';

const CELL_SIZE = 8;

export const activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});

/** Options that can be used to bind a passive event listener. */
export const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });

/** Options that can be used to bind an active event listener. */
export const activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });

export const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};

export const MIN_SIZE = 16;
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
export const MOUSE_EVENT_IGNORE_TIME = 800;

export interface MouseConfig {
  /**
   * Minimum amount of pixels that the user should
   * drag, before the CDK initiates a drag sequence.
   */
  dragStartThreshold: number;

  /**
   * Amount the pixels the user should drag before the CDK
   * considers them to have changed the drag direction.
   */
  pointerDirectionChangeThreshold: number;
}

export interface Point {
  x: number;
  y: number;
}

export function getRootNode(viewRef: EmbeddedViewRef<any>, _document: Document): HTMLElement {
  const rootNode: Node = viewRef.rootNodes[0];

  if (rootNode.nodeType !== _document.ELEMENT_NODE) {
    const wrapper = _document.createElement('div');
    wrapper.appendChild(rootNode);
    return wrapper;
  }

  return rootNode as HTMLElement;
}
export function snapToCell(currentSize: number) {
  return Math.round(currentSize / CELL_SIZE) * CELL_SIZE;
}

export function getTransform(x: number, y: number, snap = false): string {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return snap ? `translate3d(${snapToCell(x)}px, ${snapToCell(y)}px, 0)` : `translate3d(${x}px, ${y}px, 0)`;
}

export function getPixel(value: number): string {
  if (value < 0) {
    value = 0;
  }
  return `${value}px`;
}

export function getPixelValue(value: string): number {
  if (value.endsWith('px')) {
    return parseInt(value.substr(0, value.length - 2), 0);
  }
  if (value.endsWith('%')) {
    return parseInt(value.substr(0, value.length - 1), 0);
  }
  return 0;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Helper type that ignores `readonly` properties. This is used in
// `extendStyles` to ignore the readonly properties on CSSStyleDeclaration
// since we won't be touching those anyway.
type Writeable<T> = { -readonly [P in keyof T]-?: T[P] };

/**
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 */
interface DragCSSStyleDeclaration extends CSSStyleDeclaration {
  webkitUserDrag: string;
  MozUserSelect: string; // For some reason the Firefox property is in PascalCase.
}

/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */
export function extendStyles(dest: Writeable<CSSStyleDeclaration>, source: Partial<DragCSSStyleDeclaration>) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      dest[key] = source[key]!;
    }
  }

  return dest;
}

/** Determines whether an event is a touch event. */
export function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}

export interface MouseDownEvent {
  source: any;
  pointerPosition: { x: number; y: number };
  pickupPositionOnPage: Point;
  cancelled: boolean;
}

export interface MouseMoveEvent {
  source: any;
  pointerPosition: Point;
  pickupPositionOnPage: Point;
  pointerPositionAtLastDirectionChange: Point;
  distance: Point;
  hasMoved: boolean;
  delta: { x: -1 | 0 | 1; y: -1 | 0 | 1 };
  isScrolling: boolean;
}

/** Clamps a value between a minimum and a maximum. */
export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function showElement(element: HTMLElement) {
  element.style.visibility = 'visible';
}

export function hideElement(element: HTMLElement) {
  element.style.visibility = 'hidden';
}

// export function calcLayout(element: HTMLElement): ItemLayout {
//   const clientRect = element.getBoundingClientRect();
//   return {
//     width: clientRect.width,
//     height: clientRect.height,
//     top: clientRect.top,
//     left: clientRect.left
//   };
// }

export function getElementDataAction(element: HTMLElement): string {
  return element.dataset.action || '';
}

export function getElementDataActionDelay(element: HTMLElement): boolean {
  return !!element.dataset.actionDelay || false;
}

// export function isPointerNearClientRect(
//   rect: ClientRect,
//   paddingTop: number,
//   paddingBottom: number,
//   pointerY: number
// ): boolean {
//   const top = Math.max(rect.top, paddingTop);
//   const bottom = Math.max(rect.bottom, paddingTop);
//   return pointerY < top - threshold || pointerY > top + height + threshold;
// }

export function incrementVerticalScroll(node: HTMLElement | Window, amount: number) {
  if (node === window) {
    (node as Window).scrollBy(0, amount);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    (node as HTMLElement).scrollTop += amount;
  }
}

export function getMutableClientRect(element: Element): ClientRect {
  const clientRect = element.getBoundingClientRect();

  // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height
  };
}

export function adjustClientRect(clientRect: ClientRect, top: number, left: number) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;

  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
