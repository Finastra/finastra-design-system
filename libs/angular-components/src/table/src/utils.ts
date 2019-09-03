import { Sort, SortDirection } from '@angular/material';
export class UxgSort implements Sort {
  active: string;
  direction: SortDirection;
}

export class UxgColumn {
  id?: string;
  name: string; // column name
  type: ColumnType; // the data type of this column => can apply different template to this column
  align: 'left' | 'right' | 'center'; // text align in cell
}

export enum ColumnType {
  string = 'string',
  number = 'number',
  date = 'date',
  typedouble = 'typedouble'
}

export class UxgPage {
  isPagingEnabled = true;
  disabled? = false;
  length?;
  hidePageSize? = false;
  showFirstLastButtons? = true;
  pageIndex? = 0;
  pageSize? = 5;
  pageSizeOptions? = [5, 10];
}
