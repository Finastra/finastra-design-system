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
  tagsSampleData = [
    { label: 'Malauzai', isSelected: true },
    { label: 'North America' },
    { label: 'Money Movement' },
    { label: 'Static Data' }
  ];
  chosenTags: string[] = [];

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

  updateFilterTags(tags: string[]) {
    this.chosenTags = tags;
  }
}
