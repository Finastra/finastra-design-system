import { Component, OnInit } from '@angular/core';
import { sampleFilterTree } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {
  sampleData = [];
  filterExpression: string[] = [];
  groupValue: string;
  initialGroupState = 'api';

  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
    this.sampleData = sampleFilterTree;
  }

  updateFilter(changes: any[]) {
    this.filterExpression = changes;
  }

  onGroupChange(val: string) {
    this.groupValue = val;
  }
}
