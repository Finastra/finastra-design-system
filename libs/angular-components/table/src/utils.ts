import { Sort, SortDirection } from '@angular/material';
export class UxgSort implements Sort {
  active: string;
  direction: SortDirection;
}

export class UxgColumn {
  id?: string;
  name: string; // column name
  type: UxgColumnType; // the data type of this column => can apply different template to this column
  align: 'left' | 'right' | 'center'; // text align in cell
}

export enum UxgColumnType {
  string = 'string',
  number = 'number',
  date = 'date',
  typedouble = 'typedouble'
}

export class UxgPage {
  disabled? = false;
  length?;
  hidePageSize? = false;
  showFirstLastButtons? = true;
  pageIndex? = 0;
  pageSize? = 5;
  pageSizeOptions? = [5, 10];
}

export class UxgTableSelectEvent {
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
