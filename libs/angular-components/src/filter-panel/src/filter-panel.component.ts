import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface FilterField {
  group: string,
  options: Option[]
}

export interface Option {
  label: string;
}

@Component({
  selector: 'uxg-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Input() filterField: FilterField[];
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter<any[]>();

  filterMap: any[];

  constructor() {
  }

  ngOnInit() {
    this.initFilterMap();
  }

  initFilterMap() {
    this.filterMap = [];
    if(this.filterField && this.filterField.length > 0) {
      this.filterField.forEach(node => {
        node.options.forEach(option => {
          option["selected"] = false;
        });
        this.filterMap[node.group] = [];
      });
    }
  }

  updateFilter(group, option) {
    const index = this.filterMap[group].indexOf(option.label);
    if (index === -1) {
      this.filterMap[group].push(option.label)
    } else {
      this.filterMap[group].splice(index, 1);
    }
    this.change.emit(this.filterMap);
  }

  clearFilter() {
    this.initFilterMap();
    if(this.filterField && this.filterField.length > 0) {
      this.filterField.forEach(node => {
        node.options.forEach(option => {
          option["selected"] = false;
        })
      })
      this.change.emit(this.filterMap);
    }
  }
}
