import { Component, OnInit } from '@angular/core';
import { Tag } from '@finastra/angular-components/filter/filter-tags';
import { ToggleBtn } from '@finastra/angular-components/filter/filter-toggle';
import { TreeNode } from '@finastra/angular-components/filter/filter-tree';
import { sampleFilterTags, sampleFilterTree, sampleGroupTags, sampleTimeline, sampleToggleBtn } from './filter-panel-demo.sample-data';

@Component({
  selector: 'ffdc-filter-panel-demo',
  templateUrl: './filter-panel-demo.component.html',
  styleUrls: ['./filter-panel-demo.component.scss']
})
export class FilterPanelDemoComponent implements OnInit {
  sampleDataTree: TreeNode[] = [];
  sampleDataTags: Tag[] = [];
  sampleGroupTags: Tag[] = [];
  sampleMixTags: Tag[] = [];
  sampleDataToggle: ToggleBtn[] = [];
  sampleDataTimeline: ToggleBtn[] = [];
  filterExpression: string[] = [];
  groupValue = 'api';
  initialGroupState = 'api';

  multiselectTagsSampleData = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  chosenTags: string[] = [];
  chosenMultiselectTags: string[] = [];

  treeFilter: string[] = [];
  tagFilter: string[] = [];
  groupTagFilter: string[] = [];
  multiselectGroupTags: string[] = [];
  groupFilter: string[] = [];
  toggleFilter: string[] = [];
  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
    this.sampleDataTree = sampleFilterTree;
    this.sampleDataTags = sampleFilterTags;
    this.sampleGroupTags = sampleGroupTags;
    this.sampleMixTags = [...sampleGroupTags, { category: 'D', label: 'D' }];
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

  updateMultiselectGroupTags(changes: string[]) {
    this.multiselectGroupTags = changes;
  }

  updateFilterToggle(changes: any[]) {
    this.toggleFilter = changes;
  }

  updateFilterGroup(changes: any[]) {
    this.groupFilter = changes;
  }

  updateMultiselectTags(tags: any) {
    this.chosenMultiselectTags = tags;
  }
}
