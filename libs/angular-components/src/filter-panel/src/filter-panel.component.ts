import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface FilterList {
  data: NodeFilter[]
  group: string,
}

export interface NodeFilter {
  name: string;
}

@Component({
  selector: 'uxg-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Input() filterList: FilterList[];
  @Output() filter = new EventEmitter<any[]>();
  filterMap = [];

  constructor() {
  }

  ngOnInit() {}

  updateFilter(group, filter) {
    const index = this.filterMap.findIndex(function(e) { return (e.group === group && e.filter.name === filter.name ) });
    if (index > -1) {
      this.filterMap.splice(index, 1);
    } else {
      this.filterMap.push({ group: group, filter: filter });
    }
    this.filter.emit(this.filterMap);
  }
}
