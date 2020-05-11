export interface GridDefinition {
  cols: number;
  gutter: number;
  rowHeight: number | string;
}

export const defaultGridDefinition = {
  cols: 12,
  rowHeight: '1:1',
  gutter: 8
};

export interface GridItemSize {
  columnStart?: number;
  cols: number;
  rows: number;
}

export interface GridItemPosition {
  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;
}
