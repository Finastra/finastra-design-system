import { GridItemPosition, GridItemSize } from './models';
import { Rect } from './rect';

/**
 * Class for deteminating the position of items in grid.
 */
export class GridCoordinator {
  spaces: Rect[] = [];
  readonly maxRows = Number.MAX_SAFE_INTEGER;
  container: Rect;
  // trace order of items by declare item
  tracer: number[] = [];
  constructor(numColumns: number) {
    this.container = new Rect({
      columnStart: 0,
      columnEnd: numColumns,
      rowStart: 0,
      rowEnd: this.maxRows
    });
  }

  reset() {
    this.spaces = [this.container];
  }

  pack(rect: Rect): Rect {
    for (const space of this.spaces) {
      if (space.canFit(rect)) {
        this.placeInSpace(rect, space);
        break;
      }
    }
    return rect;
  }

  columnPack(rect: Rect): Rect {
    for (const space of this.spaces) {
      const canFitInSpaceColumn =
        space.x <= rect.x && space.x + space.width >= rect.x + rect.width && space.height >= rect.height;
      if (canFitInSpaceColumn) {
        rect.y = space.y;
        this.placed(rect);
        break;
      }
    }
    return rect;
  }

  placeInSpace(rect: Rect, space: Rect) {
    // place rect in space
    rect.x = space.x;
    rect.y = space.y;
    this.placed(rect);
  }

  placed(rect: Rect) {
    // update spaces
    const revisedSpaces: Rect[] = [];
    for (const space of this.spaces) {
      const newSpaces = space.getMaximalFreeRects(rect);
      // add either the original space or the new spaces to the revised spaces
      if (newSpaces) {
        revisedSpaces.push.apply(revisedSpaces, newSpaces);
      } else {
        revisedSpaces.push(space);
      }
    }

    this.spaces = revisedSpaces;

    this.mergeSortSpaces();
  }

  addSpace(rect: Rect) {
    this.spaces.push(rect);
    this.mergeSortSpaces();
  }

  private mergeSortSpaces() {
    // remove redundant spaces
    this.mergeRects(this.spaces);
    this.spaces.sort(this.downwardLeftToRight);
  }

  private mergeRects(rects: Rect[]): Rect[] {
    let i = 0;
    while (i < rects.length) {
      const rect = rects[i];
      let j = i + 1;
      while (j < rects.length) {
        const compareRect = rects[j];
        if (compareRect.contains(rect)) {
          // remove rect
          rects.splice(i, 1);
          i--; //because we will increase i at the end of outer loop.
          break;
        }
        if (rect.contains(compareRect)) {
          // remove compareRect
          rects.splice(j, 1);
        } else {
          j++;
        }
      }
      i++;
    }
    return rects;
  }

  // top down, then left to right
  private downwardLeftToRight(a: Rect, b: Rect) {
    return a.y - b.y || a.x - b.x;
  }

  // left to right, then top down
  private rightwardTopToBottom(a: Rect, b: Rect) {
    return a.x - b.x || a.y - b.y;
  }
}
