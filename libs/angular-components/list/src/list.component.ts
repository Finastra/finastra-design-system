import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'uxg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ListComponent implements OnInit,OnChanges{
  @Input() title ='';
  @Input() columnsMatcher =''
  @Input() abbreviationLength =0
  @Input() bottomLabel ='';

  @Output() bottomClick :EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionItem: EventEmitter<any> = new EventEmitter<any>();

  private _data: Array<any> = [];
  @Input()
  get data() {
    return this._data;
  }
  set data(data: Array<any>) {
    this._data = data;
  }


  ngOnInit() {
    if(this.data){
      this.data=this.data.slice(0,9)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.data) {
      this.data=this.data.slice(0,9)
    }
  }
  
  formatItemName(name:string) {
    if (name) {
      return name.split(' ').map(str => str.charAt(0)).join('').toUpperCase().substring(0, this.abbreviationLength ? this.abbreviationLength : 1);
    }
    return name;
  } 
}
