import { GridItemPosition } from './models';

export class Rect {
  width: number;
  height: number;
  x: number;
  y: number;

  constructor(position: GridItemPosition) {
    this.width = position.columnEnd - position.columnStart;
    this.height = position.rowEnd - position.rowStart;
    this.x = position.columnStart;
    this.y = position.rowStart;
  }

  contains(rect: Rect): boolean {
    return (
      this.x <= rect.x &&
      this.y <= rect.y &&
      this.x + this.width >= rect.x + rect.width &&
      this.y + this.height >= rect.y + rect.height
    );
  }

  overlaps(rect: Rect): boolean {
    const thisRight = this.x + this.width;
    const thisBottom = this.y + this.height;
    const rectRight = rect.x + rect.width;
    const rectBottom = rect.y + rect.height;
    // http://stackoverflow.com/a/306332
    return this.x < rectRight && thisRight > rect.x && this.y < rectBottom && thisBottom > rect.y;
  }

  getMaximalFreeRects(rect: Rect): Rect[] | false {
    // if no intersection, return false
    if (!this.overlaps(rect)) {
      return false;
    }

    const freeRects = [];
    let freeRect: Rect;

    const thisRight = this.x + this.width;
    const thisBottom = this.y + this.height;
    const rectRight = rect.x + rect.width;
    const rectBottom = rect.y + rect.height;

    if (this.y < rect.y) {
      freeRect = new Rect({
        columnStart: this.x,
        rowStart: this.y,
        columnEnd: this.x + this.width,
        rowEnd: rect.y
      });
      freeRects.push(freeRect);
    }

    // right
    if (thisRight > rectRight) {
      freeRect = new Rect({
        columnStart: rectRight,
        rowStart: this.y,
        columnEnd: thisRight,
        rowEnd: this.y + this.height
      });
      freeRects.push(freeRect);
    }

    // bottom
    if (thisBottom > rectBottom) {
      freeRect = new Rect({
        columnStart: this.x,
        rowStart: rectBottom,
        columnEnd: this.x + this.width,
        rowEnd: thisBottom
      });
      freeRects.push(freeRect);
    }

    // left
    if (this.x < rect.x) {
      freeRect = new Rect({
        columnStart: this.x,
        rowStart: this.y,
        columnEnd: rect.x,
        rowEnd: this.y + this.height
      });
      freeRects.push(freeRect);
    }

    return freeRects;
  }

  canFit(rect: Rect) {
    return this.width >= rect.width && this.height >= rect.height;
  }

  getPosition(): GridItemPosition {
    return {
      columnStart: this.x,
      columnEnd: this.x + this.width,
      rowStart: this.y,
      rowEnd: this.y + this.height
    };
  }
}
