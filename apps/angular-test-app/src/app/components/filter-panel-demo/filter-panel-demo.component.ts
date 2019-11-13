import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { sampleFilterTree } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {
  filterExpression: string[] = [];
  groupValue: string;
  initialGroupState = 'api';
  tagsSampleData = ['Malauzai', 'North America', 'Money Movement', 'Static Data'];
  chosenTags: string[] = [];

  treeSampleData$ = new Observable(observer => {
    observer.next()
    setTimeout(() => {
      observer.next(sampleFilterTree)
      observer.complete();
    }, 300);
  });

  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
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
