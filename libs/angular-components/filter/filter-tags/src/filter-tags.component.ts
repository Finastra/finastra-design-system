import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Attribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { uniqBy } from 'lodash-es';
import { Observable, Subscription } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

export interface Tag {
  label: string;
  value?: string;
  isSelected?: boolean;
  category?: string;
}

interface UXGFilterChanges {
  added: Tag[];
  removed: Tag[];
}

@Component({
  selector: 'uxg-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterTagsComponent implements OnInit, AfterViewInit, OnDestroy {
  visible = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  toHighlight = '';
  formCtrl = new FormControl();
  filteredTags$!: Observable<Tag[]>;
  categories$!: Observable<Tag[]>;
  categories: Tag[] = [];
  subscription!: Subscription;

  selectedData: Tag[] = [];
  private _data: Tag[] = [];

  @Input()
  set data(data: Tag[]) {
    this._data = data;
    this.categories = this.getCategories(data);
    this.selectedData = this.data.filter((tag) => tag.isSelected);
  }

  get data(): Tag[] {
    return this._data;
  }

  @Input() placeholder = 'Filter by tags';
  @Input() ariaLabel = 'Input Tag';
  @Input() groupTags = false;
  @Input() multiple = false;
  @Input() selectableGroups = true;
  @Input() displayMax = 5;
  @Input() appearance: MatFormFieldAppearance = 'fill';

  @Output() changes = new EventEmitter<UXGFilterChanges>();
  @Output() focused = new EventEmitter<boolean>();

  @ViewChild('tagInput', { static: true }) input!: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocomplete, { static: true }) autocomplete!: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger, { static: true }) trigger!: MatAutocompleteTrigger;
  @ViewChildren(MatChip) chipList!: QueryList<MatChip>;

  constructor(private hostElement: ElementRef, @Attribute('standard') public standard: any) {
    this.hostElement.nativeElement.__component = this;
    this.data = [];
  }

  ngOnInit() {
    if (this.groupTags) {
      this.categories$ = this.formCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => {
          if (tag) {
            const filteredTags = this.filter(tag);
            return this.categories.filter((tag) => filteredTags.some((fTag) => fTag.category === tag.category));
          } else {
            this.toHighlight = '';
            return this.categories;
          }
        })
      );
    }

    this.filteredTags$ = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        if (tag) {
          return this.filter(tag);
        } else {
          this.toHighlight = this.groupTags ? this.toHighlight : '';
          return this.data.slice();
        }
      })
    );
  }

  ngAfterViewInit() {
    this.subscription = this.chipList.changes.pipe(delay(2)).subscribe((c) => {
      this.trigger?.panelOpen ? this.trigger.updatePosition() : null;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterTagsByCategory(data: Tag[] | null, category: string | undefined) {
    return data?.filter((item: any) => category === item.category);
  }

  focus() {
    this.focused.emit(true);
  }

  blur() {
    this.focused.emit(false);
  }

  add(event: MatChipInputEvent) {
    if (!this.autocomplete.isOpen) {
      const input = event.chipInput?.inputElement;
      const value = (event.value || '').trim();

      const validValue = this.data.some((el) => el.label === value);

      if (validValue) {
        this.selectedData.push({ label: value });
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

  remove(tag: Tag, close = true) {
    if (close) {
      this.trigger.closePanel();
    }
    const index = this.selectedData.indexOf(tag);
    if (index >= 0) {
      const tagAtIndex = this.selectedData.splice(index, 1);
      this.changes.emit({ added: [], removed: [...tagAtIndex] });
      this.handleParent(tag);
    }
    this.toHighlight = '';
  }

  removeMultiple(tag: Tag) {
    const removeTags = this.selectedData.filter((sd) => sd.category === tag.category);
    const index = this.selectedData.findIndex((sd) => sd?.category === tag.category);
    do {
      this.selectedData.splice(index, 1);
    } while (this.selectedData.findIndex((value) => value?.category === tag.category) !== -1);
    this.changes.emit({ added: [], removed: [...removeTags] });
  }

  onSelected(event: MatAutocompleteSelectedEvent | any) {
    if (event.option.value.label === event.option.value.category) {
      this.onMultipleSelected(
        {
          checked: !this.descendantsAllSelected(event.option.value)
        } as MatCheckboxChange,
        event.option.value
      );
    } else {
      if (this.selectedData.indexOf(event.option.value) === -1) {
        this.selectedData.push(event.option.value);
        this.changes.emit({ added: [event.option.value], removed: [] });
        this.handleParent(event.option.value);
      } else if (this.multiple) {
        this.remove(event.option.value);
      }
    }

    this.toHighlight = '';
    this.input.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  onMultipleSelected(event: MatCheckboxChange, groupTag: any) {
    const selectTags = this.data.filter(
      (tag) => tag.category === groupTag.category && !this.selectedData.find((sd) => sd.label === tag.label)
    );

    if (event.checked && selectTags?.length) {
      selectTags.forEach((selectedTag) => {
        if (this.selectedData.indexOf(selectedTag) === -1) {
          this.selectedData.push(selectedTag);
        }
      });
      this.changes.emit({ added: [...selectTags], removed: [] });
    } else {
      this.removeMultiple(groupTag);
    }
    this.input.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  clearSelection() {
    if (!this.selectedData.length) {
      return;
    }
    const removed = [...this.selectedData];
    this.selectedData.length = 0;
    this.changes.emit({ added: [], removed });
    this.toHighlight = '';
  }

  onClick() {
    this.trigger._onChange('');
    this.trigger.openPanel();
  }

  isSelected(tag: Tag) {
    const element = this.selectedData.find((el) => el.label === tag.label);
    return element ? true : false;
  }

  private isTag(value: Tag | string): value is Tag {
    return (value as Tag).label !== undefined;
  }

  private filter(value: Tag | string): Tag[] {
    let filterValue = this.isTag(value) ? value.label.toLowerCase() : value.toLowerCase();
    this.toHighlight = filterValue;
    return this.data.filter((tag) => tag.label.toLowerCase().includes(filterValue));
  }

  private getCategories(data: Tag[]): Tag[] {
    return uniqBy(data, 'category').map((group) => ({
      category: group.category,
      label: group.category || ''
    }));
  }

  onCheckboxSelected(event: MatCheckboxChange, tag: any) {
    event.checked ? this.onSelected({ option: { value: tag } }) : this.remove(tag, false);
  }

  onGroupCheckboxSelected(event: MatCheckboxChange, groupTag: any) {
    const tag = this.data.find((tag) => tag.label === groupTag.label);
    this.getDescendats(groupTag).length ? this.onMultipleSelected(event, groupTag) : this.onCheckboxSelected(event, tag);
  }

  descendantsAllSelected(category: Tag): boolean {
    const descendants = this.getDescendats(category);
    const descAllSelected = descendants.length
      ? descendants.every((child) => this.selectedData.find((el) => el.label === child.label))
      : false;
    return descendants.length ? descAllSelected : this.isSelected(category);
  }

  descendantsPartiallySelected(category: Tag): boolean {
    const descendants = this.getDescendats(category);
    const someDescSelected = descendants.length
      ? descendants.some((child) => this.selectedData.find((el) => el.label === child.label))
      : false;
    return someDescSelected && !this.descendantsAllSelected(category);
  }

  getDescendats(category: Tag): Tag[] {
    return this.data.filter((tag) => tag.category === category.category && tag.label !== category.label);
  }

  private handleParent(tag: any) {
    const parent = this.data.find((el) => el.label === tag?.category);
    if (parent) {
      this.descendantsAllSelected(parent)
        ? this.onMultipleSelected({ checked: true } as MatCheckboxChange, parent)
        : this.remove(parent, false);
    }
  }

  showMoreTags(): string {
    const hiddenTags = this.selectedData.slice(this.displayMax);
    return hiddenTags.map((t) => t.label).join('\n');
  }

  getState() {
    return [...this.selectedData];
  }

  setState(data: Tag[]) {
    this.selectedData = [...data];
  }
}
