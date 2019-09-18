import { Component, OnInit } from '@angular/core';
import { sampleFilterFields } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {

  sampleData = [];
  filterArray: string[] = [];
  groupValue: string;

  constructor() { }

  ngOnInit() {
    this.groupValue = "api";
    this.sampleData = sampleFilterFields[this.groupValue];
  }

  updateFilter(newFilterArray: string[]) {
    this.filterArray = newFilterArray;
  }

  onGroupChange(val: string) {
    this.sampleData = sampleFilterFields[val];
  }
}
