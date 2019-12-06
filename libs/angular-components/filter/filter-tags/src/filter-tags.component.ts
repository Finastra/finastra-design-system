import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Tag {
  label: string;
  isSelected?: boolean;
}

interface UXGFilterChanges {
  added: Tag[];
  removed: Tag[];
}

@Component({
  selector: 'uxg-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss']
})
export class FilterTagsComponent implements OnInit {
  visible = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  formCtrl = new FormControl();
  filteredTags$: Observable<Tag[]>;

  selectedData: Tag[] = [];

  private _data: Tag[];

  @Input()
  set data(data: Tag[]) {
    this._data = data;
  }

  get data(): Tag[] {
    return this._data;
  }

  @Output() changes = new EventEmitter<UXGFilterChanges>();

  @ViewChild('tagInput', { static: false }) input: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocomplete, { static: false }) autocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger, { static: false }) trigger: MatAutocompleteTrigger;

  constructor() {}

  ngOnInit() {
    this.filteredTags$ = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this.filter(tag) : this.data.slice()))
    );
    this.selectedData = this.data.filter(tag => tag.isSelected);
  }

  add(event: MatChipInputEvent) {
    if (!this.autocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.selectedData.push({ label: value.trim() });
      }

      if (input) {
        input.value = '';
      }

      this.formCtrl.setValue(null);

      if (value) {
        this.changes.emit({ added: [{ label: event.value }], removed: [] });
      }
    }
  }

  remove(tag: Tag) {
    this.trigger.closePanel();
    const index = this.selectedData.indexOf(tag);
    if (index >= 0) {
      this.changes.emit({ added: [], removed: [this.selectedData[index]] });
      this.selectedData.splice(index, 1);
    }
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    if (this.selectedData.indexOf(event.option.value) === -1) {
      this.selectedData.push(event.option.value);
      this.changes.emit({ added: [event.option.value], removed: [] });
    }

    this.input.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  clearSelection() {
    this.changes.emit({ added: [], removed: [...this.selectedData] });
    this.selectedData.length = 0;
  }

  onClick() {
    this.trigger._onChange('');
    this.trigger.openPanel();
  }

  private filter(value: Tag | string): Tag[] {
    let filterValue;
    if (typeof value === 'object') {
      filterValue = value.label.toLowerCase();
    } else if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    }
    return this.data.filter(tag => tag.label.toLowerCase().indexOf(filterValue) === 0);
  }
}
