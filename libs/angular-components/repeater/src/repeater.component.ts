import { Component, OnInit, Input } from '@angular/core';
import { UxgColumn } from 'libs/angular-components/table/src/utils';

@Component({
  selector: 'uxg-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.scss']
})
export class RepeaterComponent implements OnInit {

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


  @Input() orientation:string = "vertical"

  constructor() { }

  ngOnInit() {
  }

}
