export enum FdsColumnType {
  string = 'string',
  number = 'number',
  date = 'date',
  type_double = 'type_double',
  link = 'link',
  chip = 'chip',
  linear_progress = 'linear_progress',
  cell_template = 'cell_template'
}

export enum FdsColumnSortDirection {
  none = 'none',
  asc = 'asc',
  desc = 'desc'
}

export interface FdsTableColumn {
  id: string; //unique id for table column
  name: string; // column name
  type: FdsColumnType; // the data type of this column => can apply different template to this column
  align?: 'left' | 'right' | 'center'; // text align in cell
  displayName?: string; // column display name if not provided, name will display
  sortable?: boolean; // can sort this column;
  cellTemplateId?: string; // used for customized cell
  _style?: string; // customized style for one column
}
export interface FdsTableDataItem {
  _fdsTableRowStyle?: string; // customized style for one row
}
export interface FdsTableRow extends FdsTableDataItem {
  _fdsSelected?: boolean;
  _fdsSelectDisabled?: boolean; //default false
  _fdsRowId?: string;
}

export interface FdsSelectedRowIdsByPage {
  [pageIndex: string]: string[]; //_fdsRowId[]
}

export interface FdsTableLink {
  text: string;
  link: string;
}
export interface FdsTableTypeDouble {
  amount: number;
  currency: string;
}

export interface FdsTableChip {
  label: string;
  color?: 'success' | 'info' | 'error';
  icon?: string;
}
// number should between [0, 1],
// accept type: number: 0.8 or string: '80%'
export type FdsTableLinearProgress = number | string;
