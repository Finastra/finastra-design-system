import { Sort, SortDirection } from '@angular/material/sort';
import { EventEmitter } from '@angular/core';

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
  cellTemplateEmiter?: EventEmitter<any>;
  cellEditTemplate?: any;
}

export enum UxgColumnType {
  string = 'string',
  number = 'number',
  date = 'date',
  typedouble = 'typedouble',
  cellTemplate = 'cellTemplate'
}

export enum UxgActionColumnPosition {
  start = 'start',
  end = 'end'
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
  singleSelect: boolean;
  data: any[]; //selected row data
}

export const UxgDefaultPaging: UxgPage = {
  disabled: false,
  pageIndex: 0,
  length: 0,
  hidePageSize: false,
  pageSizeOptions: [5, 10],
  pageSize: 5,
  showFirstLastButtons: true
};
