import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material';

export interface UXGFilterChanges<T> {
  added: T[];
  removed: T[];
}

export class UXGFilter<T> {
  private _data: T[];

  @Input()
  public set data(data: T[]) {
    this._data = data;
  }

  public get data(): T[] {
    return this._data;
  }

  // tslint:disable-next-line: no-output-native
  @Output()
  protected change: EventEmitter<UXGFilterChanges<T>>;

  constructor() {
    this.change = new EventEmitter<UXGFilterChanges<T>>();
  }
}

@Component({
  selector: 'uxg-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss']
})
export class FilterTagsComponent extends UXGFilter<string> implements OnInit, OnDestroy {
  visible = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  selectedData: string[] = [];
  removedData: string[] = [];
  inputPlaceholder: string;
  placeholder = { placeholderOnFocus: 'Input text', placeholderOnBlur: 'Filter by tags' };

  @ViewChild('tagInput', { static: false }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger, { static: false }) trigger: {
    _onChange: (arg0: string) => void;
    openPanel: () => void;
  };

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  add(event: MatChipInputEvent) {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.selectedData.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
      this.change.emit({ added: this.selectedData, removed: this.removedData });
    }
  }

  remove(tag: string) {
    const index = this.selectedData.indexOf(tag);
    if (index >= 0) {
      this.removedData.push(this.selectedData[index]);
      this.selectedData.splice(index, 1);
      this.change.emit({ added: this.selectedData, removed: this.removedData });
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.selectedData.indexOf(event.option.viewValue) === -1) {
      this.selectedData.push(event.option.viewValue);
    }

    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    this.change.emit({ added: this.selectedData, removed: this.removedData });
  }

  clearSelection() {
    this.removedData = this.removedData.concat(this.selectedData);
    this.selectedData.length = 0;
    this.change.emit({ added: this.selectedData, removed: this.removedData });
  }

  onClick() {
    this.trigger._onChange('');
    this.trigger.openPanel();
  }

  onOpen() {
    this.inputPlaceholder = this.placeholder.placeholderOnFocus;
    this.cdr.detectChanges();
  }

  onClose() {
    this.inputPlaceholder = this.placeholder.placeholderOnBlur;
    this.cdr.detectChanges();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.inputPlaceholder = this.placeholder.placeholderOnBlur;
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.data.slice()))
    );
  }

  ngOnDestroy() {}
}
