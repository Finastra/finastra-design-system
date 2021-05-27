import { Component, OnInit } from '@angular/core';
import { sampleFilterTree, sampleFilterTags, sampleToggleBtn, sampleTimeline } from './filter-panel-demo.sample-data';
import { TreeNode } from '@finastra/angular-components/filter/filter-tree';
import { Tag } from '@finastra/angular-components/filter/filter-tags';
import { ToggleBtn } from '@finastra/angular-components/filter/filter-toggle';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {
  sampleDataTree: TreeNode[] = [];
  sampleDataTags: Tag[] = [];
  sampleDataToggle: ToggleBtn[] = [];
  sampleDataTimeline: ToggleBtn[] = [];
  filterExpression: string[] = [];
  groupValue = 'api';
  initialGroupState = 'api';
  tagsSampleData = [
    { label: 'Malauzai', isSelected: true },
    { label: 'North America' },
    { label: 'Money Movement' },
    { label: 'Static Data' }
  ];
  sampleGroupTags = [
    { category: 'A', label: 'Alabama' },
    { category: 'A', label: 'Alaska', isSelected: true },
    { category: 'A', label: 'Arizona' },
    { category: 'A', label: 'Arkansas' },
    { category: 'C', label: 'California' },
    { category: 'C', label: 'Colorado' }
  ];

  multiselectTagsSampleData = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  chosenTags: string[] = [];
  chosenMultiselectTags: string[] = [];

  treeFilter: string[] = [];
  tagFilter: string[] = [];
  groupTagFilter: string[] = [];
  groupFilter: string[] = [];
  toggleFilter: string[] = [];
  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
    this.sampleDataTree = sampleFilterTree;
    this.sampleDataTags = sampleFilterTags;
    this.sampleDataToggle = sampleToggleBtn;
    this.sampleDataTimeline = sampleTimeline;
  }

  updateFilterTree(changes: any[]) {
    this.treeFilter = changes;
  }

  onGroupChange(val: string) {
    this.groupValue = val;
  }

  updateFilterTags(changes: string[]) {
    this.tagFilter = changes;
  }

  updateGroupFilterTags(changes: string[]) {
    this.groupTagFilter = changes;
  }

  updateFilterToggle(changes: any[]) {
    this.toggleFilter = changes;
  }

  updateFilterGroup(changes: any[]) {
    this.groupFilter = changes;
  }

  updateMultiselectTags(tags: string[]) {
    this.chosenMultiselectTags = tags;
  }
}
