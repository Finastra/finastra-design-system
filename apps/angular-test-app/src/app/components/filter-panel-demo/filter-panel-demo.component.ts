import { Component, OnInit } from '@angular/core';
import { sampleFilterTree, TreeNode } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {
  sampleData = [];
  filterArray: string[] = [];
  groupValue: string;
  initialGroupState = 'api';
  filterMap = [];

  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
    this.sampleData = sampleFilterTree;
  }

  updateFilter(changes: any[]) {
    changes['added'].forEach((node: TreeNode) => {
      if (!node.children) {
        const concatLabel = ((node.parent ? node.parent.label + '_' : '') + node.label)
          .replace(/\s/g, '')
          .toLowerCase();
        this.filterMap.push(concatLabel);
      }
    });

    changes['removed'].forEach((node: TreeNode) => {
      if (!node.children) {
        const concatLabel = ((node.parent ? node.parent.label + '_' : '') + node.label)
          .replace(/\s/g, '')
          .toLowerCase();
        for (let i = this.filterMap.length - 1; i >= 0; i--) {
          if (this.filterMap[i] === concatLabel) {
            this.filterMap.splice(i, 1);
          }
        }
      }
    });
  }

  onGroupChange(val: string) {
    this.groupValue = val;
  }
}
