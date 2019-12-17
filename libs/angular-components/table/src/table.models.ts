import { Sort, SortDirection } from '@angular/material';

export interface UxgSort extends Sort {
  active: string;
  direction: SortDirection;
}

export interface UxgColumn {
  id?: string;
  name: string; // column name
  type: UxgColumnType; // the data type of this column => can apply different template to this column
  align?: 'left' | 'right' | 'center'; // text align in cell
  displayName?: string;
  cellTemplate?: any;
  cellEditTemplate?: any;
}

export enum UxgColumnType {
  string = 'string',
  number = 'number',
  date = 'date',
  typedouble = 'typedouble',
  cellTemplate = 'cellTemplate'
}

export interface UxgPage {
  disabled?: boolean;
  length?: number;
  hidePageSize?: boolean;
  showFirstLastButtons?: boolean;
  pageIndex?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
}

export interface UxgTableSelectEvent {
  singleSelect: true | false;
  data: any[]; //selected row data
}

export const UxgDefaultPaging = {
  disabled: false,
  pageIndex: 0,
  length: 0,
  hidePageSize: false,
  pageSizeOptions: [5, 10],
  pageSize: 5,
  showFirstLastButtons: true
};
