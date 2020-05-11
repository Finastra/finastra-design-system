import { GridItemPosition } from './models';
export class RatioGridStyler {
  private percentWidthPerItem: number;
  private gutterWidthFractionPerItem: number;
  private percentHeightPerItem: number;
  private baseItemHeight: string;
  private baseItemWidth: string;

  constructor(private _cols: number, private rowHeightRatio: number, private _gutterSize: number) {
    this.percentWidthPerItem = 100 / this._cols;
    // Fraction of the vertical gutter size that each column takes up.
    // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
    this.gutterWidthFractionPerItem = (this._cols - 1) / this._cols;

    this.baseItemWidth = this._getBaseItemSize(this.percentWidthPerItem, this.gutterWidthFractionPerItem);

    this.percentHeightPerItem = this.percentWidthPerItem / this.rowHeightRatio;
    this.baseItemHeight = this._getBaseItemSize(this.percentHeightPerItem, this.gutterWidthFractionPerItem);
  }

  setStyle(item: HTMLElement, position: GridItemPosition) {
    this._setColStyles(item, position.columnStart, position.columnEnd - position.columnStart);
    this._setRowStyles(item, position.rowStart, position.rowEnd - position.rowStart);
  }

  private _getBaseItemSize(sizePercent: number, gutterFraction: number): string {
    // Take the base size percent (as would be if evenly dividing the size between cells),
    // and then subtracting the size of one gutter. However, since there are no gutters on the
    // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
    // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
    // edge evenly among the cells).
    return `(${sizePercent}% - (${this._gutterSize}px * ${gutterFraction}))`;
  }

  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  private _getItemPosition(baseSize: string, offset: number): string {
    // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
    // row/column (offset).
    return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}px) * ${offset}`);
  }

  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  private _getItemSize(baseSize: string, span: number): string {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize}px)`;
  }

  /** Sets the horizontal placement of the tile in the list. */
  private _setColStyles(tile: HTMLElement, colIndex: number, span: number) {
    // Base horizontal size of a column.

    // The width and horizontal position of each tile is always calculated the same way, but the
    // height and vertical position depends on the rowMode.
    this._setStyle(tile, 'left', this._getItemPosition(this.baseItemWidth, colIndex));
    this._setStyle(tile, 'width', calc(this._getItemSize(this.baseItemWidth, span)));
  }

  private _setRowStyles(tile: HTMLElement, rowIndex: number, rowspan: number): void {
    // Use padding-top and margin-top to maintain the given aspect ratio, as
    // a percentage-based value for these properties is applied versus the *width* of the
    // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
    this._setStyle(tile, 'marginTop', this._getItemPosition(this.baseItemHeight, rowIndex));
    this._setStyle(tile, 'paddingTop', calc(this._getItemSize(this.baseItemHeight, rowspan)));
  }

  private _setStyle(item: HTMLElement, property: string, value: any): void {
    (item.style as any)[property] = value;
  }
}

function calc(exp: string): string {
  return `calc(${exp})`;
}
