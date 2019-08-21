import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTable } from '@angular/material';

import { UxgColumn, UxgSort } from './utils';

@Component({
  selector: 'uxg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnDestroy, OnChanges{
  
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  @Input() data: Array<any> = [];
  @Input() columns: Array<UxgColumn> = []; // columns definations
  @Input() columnsToDisplay: Array<string> = []; 

  @Input() stickyHeader = true;

  @Output() sortChange = new EventEmitter<UxgSort>();


  constructor(){}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes.data && !changes.data.isFirstChange() ){
      this.table.renderRows();
    }
  }

  sortData($event: UxgSort){
    if( this.sortChange.observers.length > 0){
      this.sortChange.emit($event);
    }else{
      this.data = this.localSort($event);
    }
  }

  localSort(sort: UxgSort): any[]{
    return this.data.slice().sort( (a, b) => {
      let comparison = 0;
      switch(this.getSortColumnType(sort.active)){
        case 'number':
            comparison = a[sort.active] - b[sort.active];
            break;
        default:
          if ( a[sort.active].toUpperCase() > b[sort.active].toUpperCase() ){
            comparison = 1;
          }else{
            comparison = -1;
          }
      } 
      if( sort.direction === 'asc'){
        return comparison;
      }else{
        return - comparison;
      }
    })
  }

  getSortColumnType(columnName: string){
    return this.columns.find( column => { 
      return column.name === columnName}
      ).type;
  }

  ngOnDestroy() {

  }
}

