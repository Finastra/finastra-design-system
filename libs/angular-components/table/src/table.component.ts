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
import { MatTable, PageEvent, MatCheckbox } from '@angular/material';

import { UxgColumn, UxgSort, UxgPage, UxgColumnType, UxgTableSelectEvent, UxgDefaultPaging } from './utils';
import { CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'uxg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  private uxgMultiSelectColumn = ['uxg-table-select-row'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //table data
  private _data: Array<any> = [];
  private _columnsToDisplay: Array<string> = [];

  dataToComponent: Array<any> = [];
  columnsToDisplayToComponent: Array<string> = [];

  @Input()
  get data() {
    return this._data;
  }
  set data(data: Array<any>) {
    this._data = data;
    this.dataToComponent = data;
  }

  @Input()
  get columnsToDisplay() {
    return this._columnsToDisplay;
  }
  set columnsToDisplay(columnsToDisplay: Array<string>) {
    this._columnsToDisplay = columnsToDisplay;
    if (this.multiSelect) {
      this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(columnsToDisplay);
    } else {
      this.columnsToDisplayToComponent = columnsToDisplay;
    }
  }

  @Input() columns: Array<UxgColumn> = []; // columns definitions
  @Input() showTotalRows = false;
  @Input() totalData: any = null;

  // table config
  @Input() stickyHeader = true;
  @Input() stickyFooter = false;
  @Input() columnDragEnable = false;

  @Input() multiSelect: boolean;
  @Input() singleSelect: boolean;

  @Output() selectChange = new EventEmitter<UxgTableSelectEvent>();
  @Output() sortChange = new EventEmitter<UxgSort>();

  //paginator data
  @Input() pageEnable = false;
  @Input() paging: UxgPage;
  @Output() pageChange = new EventEmitter<PageEvent>();

  //component local data
  selections = [];
  previousIndex: number;

  constructor() {}

  ngOnInit() {
    if (this.singleSelect && this.multiSelect) {
      this.multiSelect = false;
    }

    if (this.multiSelect) {
      this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(this.columnsToDisplay);
    }

    if (this.pageEnable && !this.paging) {
      this.applyDefaultPaging();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && !changes.data.isFirstChange()) {
      this.table.renderRows();
    }

    if (changes.pageEnable && !changes.pageEnable.isFirstChange()) {
      if (changes.pageEnable.currentValue === false) {
        this.dataToComponent = this.data;
        this.paging = null;
      } else {
        if (!this.paging) {
          this.applyDefaultPaging();
        }
      }
    }

    if (changes.paging && !changes.paging.isFirstChange()) {
      if (changes.paging.currentValue === null) {
        this.applyDefaultPaging();
      }
    }

    if (changes.multiSelect && !changes.multiSelect.isFirstChange()) {
      if (this.multiSelect) {
        this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(this.columnsToDisplay);
      } else {
        this.columnsToDisplayToComponent = this.columnsToDisplay;
      }
      this.emitSelectEvent();
    }

    if (changes.singleSelect && !changes.singleSelect.isFirstChange()) {
      if (this.singleSelect) {
        this.columnsToDisplayToComponent = this.columnsToDisplay;
        if (this.selections.length > 1) this.selections.splice(1, this.selections.length);
      }
      this.emitSelectEvent();
    }
  }

  sortData($event: UxgSort) {
    if (this.sortChange.observers.length > 0) {
      this.sortChange.emit($event);
    } else {
      this.dataToComponent = this.localSort($event);
    }
  }

  singleSelectRowClick(row: any) {
    if (!this.singleSelect) {
      return;
    }

    if (this.selections.indexOf(row) < 0) {
      this.selections = [row];
    } else {
      this.selections = [];
    }

    this.emitSelectEvent();
  }

  multiSelectRowClick(row: any) {
    if (!this.multiSelect) {
      return;
    }

    const indexOfRow = this.selections.indexOf(row);
    if (indexOfRow < 0) {
      this.selections.push(row);
    } else {
      this.selections.splice(indexOfRow, 1);
    }

    this.emitSelectEvent();
  }

  multiSelectAllRows($event: MatCheckbox) {
    if ($event.checked) {
      this.selections = this.dataToComponent;
    } else {
      this.selections = [];
    }

    this.emitSelectEvent();
  }

  applyPageChanges($event: PageEvent) {
    if (this.pageChange.observers.length > 0) {
      this.pageChange.emit($event);
    } else {
      this.localPaging($event);
    }
  }

  getTotalRowCell(column: UxgColumn): string {
    if (this.totalData && this.totalData[column.name]) {
      return this.totalData[column.name];
    } else {
      if (column.type === UxgColumnType.number) {
        return this.dataToComponent.reduce((sum, current) => sum + current[column.name], 0);
      } else {
        return;
      }
    }
  }

  emitSelectEvent() {
    this.selectChange.emit({
      singleSelect: this.singleSelect ? true : false,
      data: this.selections
    });
  }

  columnDragStarted($event: CdkDropList, index: number) {
    index = this.resetIndexWithMultiSelectRow(index);

    this.previousIndex = index;
  }

  columnDropped($event: CdkDropList, index: number) {
    index = this.resetIndexWithMultiSelectRow(index);
    if ($event) {
      moveItemInArray(this.columnsToDisplayToComponent, this.previousIndex, index);
    }
  }

  ngOnDestroy() {}

  //local functions
  applyDefaultPaging() {
    const defaultPaging = { ...UxgDefaultPaging, ...{ length: this.dataToComponent.length } };
    this.paging = defaultPaging;
    this.localPaging({
      pageIndex: this.paging.pageIndex,
      pageSize: this.paging.pageSize,
      length: this.data.length
    });
  }
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

  resetIndexWithMultiSelectRow(index: number): number {
    return this.multiSelect ? index + 1 : index;
  }
}
