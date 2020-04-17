import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';

export interface MultiselectTag {
  label: string;
  isSelected?: boolean;
}

interface UXGMultiSelectFilterChanges {
  added: MultiselectTag[];
  removed: MultiselectTag[];
}

@Component({
  selector: 'uxg-multiselect-tags',
  templateUrl: './multiselect-tags.component.html',
  styleUrls: ['./multiselect-tags.component.scss']
})
export class MultiselectTagsComponent implements OnInit {
  private _data: MultiselectTag[] = [];
  @Input('dense') dense = null;
  @Input('large') large = null;
  @Input()
  set data(data: MultiselectTag[]) {
    this._data = cloneDeep(data);
  }

  get data(): MultiselectTag[] {
    return this._data;
  }

  @Output() changes = new EventEmitter<UXGMultiSelectFilterChanges>();

  constructor() {
    this.data = [];
  }

  ngOnInit() {}

  onTagSelection(tag: MultiselectTag) {
    if (tag.isSelected) {
      this.remove(tag);
    } else {
      this.add(tag);
    }
  }

  add(tag: MultiselectTag) {
    const index = this.data.indexOf(tag);
    if (index >= 0) {
      this.data[index].isSelected = true;
      this.changes.emit({ added: [this.data[index]], removed: [] });
    }
  }

  remove(tag: MultiselectTag) {
    const index = this.data.indexOf(tag);
    if (index >= 0) {
      this.data[index].isSelected = false;
      this.changes.emit({ added: [], removed: [this.data[index]] });
    }
  }

  clearSelection() {
    this.changes.emit({ added: [], removed: [...this.data] });
    this.data.forEach(tag => (tag.isSelected = false));
  }

  getState() {
    const filteredMultiTags = this.data.filter(el => el.isSelected === true);
    return [...filteredMultiTags];
  }

  setState(data: MultiselectTag[]) {
    this.data.forEach(tag => {
      let found = false;
      data.forEach(el => {
        if (el.label === tag.label) {
          tag.isSelected = true;
          found = true;
        }
      });
      if (!found) {
        delete tag.isSelected;
      }
    });
  }
}
