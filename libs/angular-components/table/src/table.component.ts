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
import { MatTable } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatCheckbox } from '@angular/material/checkbox';

import {
  UxgColumn,
  UxgSort,
  UxgPage,
  UxgColumnType,
  UxgTableSelectEvent,
  UxgDefaultPaging,
  UxgActionColumnPosition
} from './table.models';
import { CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import isEqual from 'lodash/isEqual';
@Component({
  selector: 'uxg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

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
    this.columnsToDisplayToComponent = columnsToDisplay;

    if (this.multiSelect && this.columnsToDisplayToComponent.indexOf(this.uxgMultiSelectColumn[0]) < 0) {
      this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(this.columnsToDisplayToComponent);
    }

    if (
      (this.enableEdit || this.enableDelete) &&
      this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) < 0
    ) {
      this.addOrUpdateActionColumnToColumnsToDisplay();
    }
  }

  @Input() columns: Array<UxgColumn> = []; // columns definitions
  @Input() showTotalRows = false;
  @Input() showTableHeader = true;
  @Input() totalData: any = null;

  // table config
  @Input() stickyHeader = true;
  @Input() stickyFooter = false;
  @Input() columnDragEnable = false;

  private uxgMultiSelectColumn = ['uxg-table-select-row'];
  private _selectedIndex: number[] = [];

  @Input()
  get selectedKeys(): number[] {
    return this._selectedIndex;
  }

  set selectedKeys(selectedIndex: number[]) {
    this._selectedIndex = selectedIndex;
    if (this.singleSelect && selectedIndex && selectedIndex.length > 0) {
      if (this.isRowSelected(this.data[selectedIndex[0]])) {
        this.selections.push(this.data[selectedIndex[0]]);
      }
    }
    if (!this.singleSelect && this.multiSelect) {
      this.selections.length = 0;
      selectedIndex.forEach((sIndex) => {
        if (!this.isRowSelected(this.data[sIndex])) {
          this.selections.push(this.data[sIndex]);
        }
      });
    }
  }

  @Input() singleSelect = false;
  @Input() multiSelect = false;

  @Output() selectChanged = new EventEmitter<UxgTableSelectEvent>();
  @Output() multiSelectSingleRowClicked = new EventEmitter<any>();
  @Output() sortChanged = new EventEmitter<UxgSort>();

  //paginator data
  @Input() pageEnable = false;
  @Input() paging?: UxgPage;
  @Output() pageChanged = new EventEmitter<PageEvent>();

  @Input() enableEdit = false;
  @Input() enableDelete = false;
  @Input() enableSend = false;
  @Input() actionColumnPosition: UxgActionColumnPosition = UxgActionColumnPosition.end;

  @Output() rowRemoved = new EventEmitter<any>();
  @Output() rowUpdated = new EventEmitter<any>();
  @Output() rowSend = new EventEmitter<any>();

  selections: any[] = [];
  dataToComponent: Array<any> = [];
  columnsToDisplayToComponent: Array<string> = [];

  //local variable
  previousIndex = -1; // used for column drag drop

  //table data
  private _data: Array<any> = [];
  private _columnsToDisplay: Array<string> = [];

  private uxgTableEdit = false;

  //edit part
  private uxgTableActionColumn = ['uxg-table-action-row'];
  private editRowOrigin: any;

  constructor() {}

  ngOnInit() {
    if (this.singleSelect && this.multiSelect) {
      this.multiSelect = false;
    }

    if (this.multiSelect && this.columnsToDisplayToComponent.indexOf(this.uxgMultiSelectColumn[0]) < 0) {
      this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(this.columnsToDisplay);
    }

    if (
      (this.enableEdit || this.enableDelete) &&
      this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) < 0
    ) {
      this.addOrUpdateActionColumnToColumnsToDisplay();
    }

    if (this.pageEnable && !this.paging) {
      this.applyDefaultPaging();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && !changes.data.isFirstChange()) {
      this.table.renderRows();
      if (this.pageEnable && !this.paging) {
        this.applyDefaultPaging();
      }
    }

    if (changes.pageEnable && !changes.pageEnable.isFirstChange()) {
      if (changes.pageEnable.currentValue === false) {
        this.dataToComponent = this.data;
        this.paging = undefined;
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
      this.columnsToDisplayToComponent = this.columnsToDisplay;

      if (this.multiSelect) {
        this.columnsToDisplayToComponent = this.uxgMultiSelectColumn.concat(this.columnsToDisplay);
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

    if (changes.enableEdit && !changes.enableEdit.isFirstChange()) {
      this.resetActionRow();
    }

    if (changes.enableDelete && !changes.enableDelete.isFirstChange()) {
      this.resetActionRow();
    }
    if (changes.enableSend && !changes.enableSend.isFirstChange()) {
      this.resetActionRow();
    }

    if (changes.actionColumnPosition && !changes.actionColumnPosition.isFirstChange()) {
      this.addOrUpdateActionColumnToColumnsToDisplay();
    }
  }

  sortData($event: UxgSort) {
    if (this.sortChanged.observers.length > 0) {
      this.sortChanged.emit($event);
    } else {
      this.dataToComponent = this.localSort($event);
    }
  }

  singleSelectRowClick(row: any) {
    if (this.uxgTableEdit) return;
    this.dataToComponent.forEach((item) => delete item.uxgTableEdit);

    if (this.singleSelect) {
      if (!this.isRowSelected(row)) {
        this.selections = [row];
      } else {
        this.selections = [];
      }
      this.emitSelectEvent();
      return;
    }

    if (!this.singleSelect && this.multiSelect) {
      this.emitClickEvent(row);
      return;
    }
  }

  multiSelectRowClick(row: any) {
    if (this.uxgTableEdit) return;

    if (!this.multiSelect) {
      return;
    }

    if (!this.isRowSelected(row)) {
      this.selections.push(row);
    } else {
      this.selections.splice(this.getSelectedIndex(row), 1);
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
    if (this.pageChanged.observers.length > 0) {
      this.pageChanged.emit($event);
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
        return '';
      }
    }
  }

  emitSelectEvent() {
    this.selectChanged.emit({
      singleSelect: this.singleSelect ? true : false,
      data: this.selections
    });
  }

  emitClickEvent(data: any) {
    this.multiSelectSingleRowClicked.emit({
      data: data
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

  rowEditClick(row: any) {
    this.dataToComponent.forEach((item) => {
      delete item.uxgTableEdit;
    });
    this.editRowOrigin = { ...row };
    row.uxgTableEdit = true;
    this.uxgTableEdit = true;
  }

  rowSendTriggered(row: any) {
    this.rowSend.emit({
      data: row
    });
  }

  rowEditConfirm(newRow: any) {
    delete newRow.uxgTableEdit;
    this.uxgTableEdit = false;
    this.rowUpdated.emit({
      data: newRow
    });
  }

  rowEditCancel(row: any) {
    delete row.uxgTableEdit;
    this.uxgTableEdit = false;
    Object.keys(row).forEach((key) => {
      row[key] = this.editRowOrigin[key];
    });
  }

  rowDelete(row: any) {
    const rowIndex = this.dataToComponent.findIndex((item) => item === row);
    this.dataToComponent.splice(rowIndex, 1);
    this.dataToComponent = this.dataToComponent.slice();
    this.rowRemoved.emit({
      data: row
    });
  }

  ngOnDestroy() {}

  //local functions
  applyDefaultPaging() {
    const defaultPaging = { ...UxgDefaultPaging, ...{ length: this.dataToComponent.length } };
    this.paging = defaultPaging;
    this.localPaging({
      pageIndex: this.paging.pageIndex || 0,
      pageSize: this.paging.pageSize || 5,
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

  getSortColumnType(columnName: string): string | undefined {
    const column = this.columns.find((item) => {
      return item.name === columnName;
    });

    return column ? column.type : undefined;
  }

  localPaging(page: PageEvent) {
    const offset = page.pageIndex * page.pageSize;

    this.dataToComponent = this.data.slice(offset, offset + page.pageSize);
  }

  resetIndexWithMultiSelectRow(index: number): number {
    return this.multiSelect ? index + 1 : index;
  }

  resetActionRow() {
    if (
      (this.enableDelete || this.enableEdit || this.enableSend) &&
      this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) < 0
    ) {
      this.addOrUpdateActionColumnToColumnsToDisplay();
    }

    if (
      !this.enableSend &&
      !this.enableDelete &&
      !this.enableEdit &&
      this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) > -1
    ) {
      this.removeActionColumnsFromColumnsToDisplay();
    }
  }

  isRowSelected(row: any) {
    return this.getSelectedIndex(row) > -1 ? true : false;
  }

  getSelectedIndex(row: any) {
    const rowIdx = this.selections.findIndex((item) => {
      return isEqual(item, row);
    });
    return rowIdx > -1 ? rowIdx : -1;
  }

  addOrUpdateActionColumnToColumnsToDisplay() {
    if (this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) > -1) {
      this.removeActionColumnsFromColumnsToDisplay();
    }

    if (!this.actionColumnPosition || this.actionColumnPosition === UxgActionColumnPosition.end) {
      this.columnsToDisplayToComponent = this.columnsToDisplayToComponent.concat(this.uxgTableActionColumn);
    }
    if (this.actionColumnPosition === UxgActionColumnPosition.start) {
      this.columnsToDisplayToComponent = this.uxgTableActionColumn.concat(this.columnsToDisplayToComponent);
    }
  }

  removeActionColumnsFromColumnsToDisplay() {
    if (this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]) > -1)
      this.columnsToDisplayToComponent.splice(
        this.columnsToDisplayToComponent.indexOf(this.uxgTableActionColumn[0]),
        1
      );
  }
}
