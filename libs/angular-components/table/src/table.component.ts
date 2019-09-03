import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatTable, PageEvent } from '@angular/material';

import { UxgColumn, UxgSort, UxgPage, ColumnType } from './utils';

@Component({
  selector: 'uxg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //table data
  private _data: Array<any> = [];
  dataToComponent: Array<any> = [];
  @Input()
  get data() {
    return this._data;
  }
  set data(data: Array<any>) {
    this._data = data;
    this.dataToComponent = data;
  }
  @Input() columns: Array<UxgColumn> = []; // columns definitions
  @Input() columnsToDisplay: Array<string> = [];

  @Input() stickyHeader = true;
  @Input() stickyFooter = false;

  @Output() sortChange = new EventEmitter<UxgSort>();

  //paginator data
  @Input() paging: UxgPage;
  @Output() pageChange = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit() {
    if (this.paging) {
      this.localPaging({
        pageIndex: this.paging.pageIndex,
        pageSize: this.paging.pageSize,
        length: this.data.length
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && !changes.data.isFirstChange()) {
      this.table.renderRows();
    }
  }

  sortData($event: UxgSort) {
    if (this.sortChange.observers.length > 0) {
      this.sortChange.emit($event);
    } else {
      this.dataToComponent = this.localSort($event);
    }
  }

  applyPageChanges($event: PageEvent) {
    if (this.pageChange.observers.length > 0) {
      this.pageChange.emit($event);
    } else {
      this.localPaging($event);
    }
  }
  getTotalRowCell(column: UxgColumn): string {
    if (column.type === ColumnType.number) {
      return this.dataToComponent.reduce((sum, current) => sum + current[column.name], 0);
    } else {
      return '';
    }
  }

  ngOnDestroy() {}

  //local functions
  localSort(sort: UxgSort): any[] {
    return this.dataToComponent.slice().sort((a, b) => {
      let comparison = 0;
      switch (this.getSortColumnType(sort.active)) {
        case 'number':
          comparison = a[sort.active] - b[sort.active];
          break;
        default:
          if (a[sort.active].toUpperCase() > b[sort.active].toUpperCase()) {
            comparison = 1;
          } else {
            comparison = -1;
          }
      }
      if (sort.direction === 'asc') {
        return comparison;
      } else {
        return -comparison;
      }
    });
  }

  getSortColumnType(columnName: string) {
    return this.columns.find(column => {
      return column.name === columnName;
    }).type;
  }

  localPaging(page: PageEvent) {
    const offset = page.pageIndex * page.pageSize;

    this.dataToComponent = this.data.slice(offset, offset + page.pageSize);
  }
}
