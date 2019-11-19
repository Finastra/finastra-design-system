import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface UXGFilterChanges {
  added: string[];
  removed: string[];
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
  filteredTags$: Observable<string[]>;

  selectedData: string[] = [];

  private _data: string[];

  @Input()
  set data(data: string[]) {
    this._data = data;
  }

  get data(): string[] {
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
  }

  add(event: MatChipInputEvent) {
    if (!this.autocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.selectedData.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.formCtrl.setValue(null);

      if (value) {
        this.changes.emit({ added: [event.value], removed: [] });
      }
    }
  }

  remove(tag: string) {
    this.trigger.closePanel();
    const index = this.selectedData.indexOf(tag);
    if (index >= 0) {
      this.changes.emit({ added: [], removed: [this.selectedData[index]] });
      this.selectedData.splice(index, 1);
    }
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    if (this.selectedData.indexOf(event.option.viewValue) === -1) {
      this.selectedData.push(event.option.viewValue);
      this.changes.emit({ added: [event.option.viewValue], removed: [] });
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

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
