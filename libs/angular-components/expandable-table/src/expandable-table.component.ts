import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { chain, filter, find, isEqual, reject, cloneDeep } from 'lodash';

@Component({
  selector: 'uxg-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', padding: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ExpandableTableComponent implements OnInit, OnChanges {
  @Input() dataSource: any[];

  @Input() columns: any[];

  @Input() groupByKey: string;

  @Input() selectable: boolean;

  @Input() rowClickable: boolean;

  @Input() selection?: any[];

  @Input() startExpanded = false;

  @Output() rowClick = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() tableButtonsCallBack = new EventEmitter<any>();

  dataLength = 0;
  groupInfo: any;
  expandedElement: any;
  visibleColumns: any[];
  _columns: any[];
  _dataSource: any[];
  selectionModel = new SelectionModel<any>(true, []);
  primaryKey = "primaryKey";

  @ViewChild(MatAccordion, { static: false }) accordion?: MatAccordion;

  @ContentChild('expandableHeaderButtonsTemplate', { static: false }) templateHeaderButtons!: TemplateRef<any>;
  @ContentChild('expandableTableButtonsTemplate', { static: false }) templateTableButtons!: TemplateRef<any>;

  constructor() {
    this.dataSource =[];
    this._dataSource =[];
    this.columns = [];
    this._columns = [];
    this.visibleColumns = [];
    this.selectable = false;
    this.rowClickable = false;
    this.groupByKey = "id";

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.groupByKey && this.columns && this.dataSource) {
      this.selectionModel = new SelectionModel<any>(true, []);
      this.generateColumns();
      this.generateData();
    }
  }

  ngOnInit() {}

  generateData() {
    //add primaryKey
    let primaryKeyValue = 0;
    this.dataSource.forEach(data => {
      data[this.primaryKey] = ++primaryKeyValue;
    })

    //input selection
    if (this.selection) {
      const initialSelection:any[] = [];
      this.selection.forEach(selectionData => {
        this.dataSource.forEach(data => {
          const rawData = cloneDeep(data);
          delete rawData.primaryKey;
          if (isEqual(rawData, selectionData)) {
            initialSelection.push(data);
          }
        });
      });
      this.selectionModel = new SelectionModel<any>(true, initialSelection);
    }

    this.dataLength = this.dataSource.length;
    this.dataSource = filter(this.dataSource, data => {
      return data[this.groupByKey];
    });

    this._dataSource = this.groupBy(this.groupByKey, this.dataSource);
  }

  generateColumns() {

    this.groupInfo = find(this.columns, c => c.name === this.groupByKey);
    this._columns = reject(this.columns, c => c.name === this.groupByKey);
    this.visibleColumns = this._columns.map(c => c.name);
 
  }

  isInderterminate(){
    return this.selectionModel.selected.length>0 && !this.isAllSelected();
  }
  groupBy(id: string, collection: any[]): GroupedValues[] {
    const dataSource: GroupedValues[] = chain(collection)
      .groupBy(id)
      .map((values, id) => ({
        id,
        label: this.groupByKey ? values[0][this.groupByKey] : id,
        values,
        expanded: this.startExpanded
      }))
      .value();

    dataSource.forEach(ds => {
      if (!ds.values[0][this.visibleColumns[1]]) {
        ds.values = [];
      }
    });

    return dataSource;
  }

  isItemSelected(item: any) {
    return this.selectionModel.isSelected(item);
  }

  // All
  toggleAll() {
    if (this.selectionModel.selected.length && this.isAllSelected()) {
      this.selectionModel.selected.forEach(item => {
        this.selectionModel.toggle(item);
      });
    } else {
      this._dataSource.forEach((row: GroupedValues) => {
        row.values.forEach(item => this.selectionModel.select(item));
      });
    }
    this.onSelectionChanged();
  }

  isAllSelected() {
    return this.selectionModel.selected.length === this.dataLength;
  }

  // Row level
  toggleRow(row: GroupedValues) {
    const selected = this.getSelectionByRow(row);
    if (selected && selected.length === row.values.length) {
      selected.forEach(item => {
        this.selectionModel.toggle(item);
      });
    } else {
      row.values.forEach(item => this.selectionModel.select(item));
    }
    this.onSelectionChanged();
  }

  selectionHasRowValue(row: GroupedValues): boolean {
    return this.getSelectionByRow(row).length > 0;
  }

  isRowAllSelected(row: GroupedValues): boolean {
    return this.getSelectionByRow(row).length === row.values.length;
  }

  getSelectionByRow(row: GroupedValues): any[] {
    return filter(this.selectionModel.selected, { [this.groupByKey]: row.id } as any);
  }

  // Item level
  toggleItem(item: any) {
    this.selectionModel.toggle(item);
    this.onSelectionChanged();
  }

  collapseAll() {
    if(!this.accordion) return;
    if (this._dataSource.some((row: GroupedValues) => row.expanded)) {
      this.accordion.closeAll();
    } else {
      this.accordion.openAll();
    }
  }

  getSelectedKeys(row: any) {
    const keys:any[] = [];
    const prediction: any = {};
    row.values.forEach((value: any, key: string) => {
      prediction[this.primaryKey] = value[this.primaryKey];
      if (find(this.selectionModel.selected, prediction)) {
        keys.push(key);
      }
    });
    return keys;
  }

  onTableSelectionChange(tableSelectionEvent:any, row:any) {
    const rowSelection = this.getSelectionByRow(row);
    if (tableSelectionEvent.data) {
      rowSelection.forEach(selection => {
        this.selectionModel.toggle(selection);
      });
      tableSelectionEvent.data.forEach( (selection: any) => {
        this.selectionModel.toggle(selection);
      });
      this.onSelectionChanged();
    }
  }

  onSelectionChanged() {
    const selectedItems: any[] = cloneDeep(this.selectionModel.selected);
    selectedItems.forEach(data => {
      delete data[this.primaryKey];
    });
    this.selectionChange.emit(selectedItems);
  }

  onRowClicked(event: any){
    if(this.rowClick){
      this.rowClick.emit(event.data);
    }
  }
}

interface GroupedValues {
  id: any;
  label: string;
  values: any[];
  expanded?: boolean;
}
