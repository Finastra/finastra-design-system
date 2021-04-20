import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Attribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Tag {
  label: string;
  category?: string;
  isSelected?: boolean;
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
export class FilterTagsComponent implements OnInit {
  visible = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  groupData: any[] = [];

  toHighlight = '';
  formCtrl = new FormControl();
  filteredTags$!: Observable<Tag[]>;

  selectedData: Tag[] = [];

  private _data: Tag[] = [];

  @Input()
  set data(data: Tag[]) {
    this._data = data;
    this.selectedData = this.data.filter((tag) => tag.isSelected);
  }

  get data(): Tag[] {
    return this._data;
  }

  @Input() placeholder = 'Filter by tags';
  @Input() ariaLabel = 'Input Tag';
  @Input() groupTags = false;
  @Output() changes = new EventEmitter<UXGFilterChanges>();

  @ViewChildren('tagInput') input!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren(MatAutocomplete) autocomplete!: QueryList<MatAutocomplete>;
  @ViewChildren(MatAutocompleteTrigger) triggerCollection!: QueryList<MatAutocompleteTrigger>;

  constructor(
    private hostElement: ElementRef,
    @Attribute('standard') public standard: any,
    @Attribute('dense') public dense: any
  ) {
    this.hostElement.nativeElement.__component = this;
    this.data = [];
  }

  ngOnInit() {
    if (this.groupTags) {
      this.filterByCategory();
    }
    this.filteredTags$ = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        if (tag) {
          return this.filter(tag);
        } else {
          this.toHighlight = '';
          return this.data.slice();
        }
      })
    );
  }

  add(event: MatChipInputEvent, field: number) {
    const auto = this.autocomplete.find((element, index) => index === field);
    if (auto) {
      if (!auto.isOpen) {
        const input = event.input;
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
  }

  filterByCategory() {
    this.groupData = this.data.reduce((aggregate: any, nextElement: any) => {
      const category = nextElement.category;

      let aggregatedRow = aggregate.find((tag: any) => tag.category === category);
      if (!aggregatedRow) {
        aggregatedRow = { category, labels: [] };
        aggregate.push(aggregatedRow);
      }
      aggregatedRow.labels.push({ label: nextElement.label });

      return aggregate;
    }, []);

    console.log('groups', this.groupData);
  }

  remove(tag: Tag) {
    for (const trigger of this.triggerCollection.toArray()) {
      trigger.panelClosingActions.subscribe((e) => {
        if (!(e && e.source)) {
          trigger.closePanel();
        }
      });
    }
    const index = this.selectedData.indexOf(tag);
    if (index >= 0) {
      const tagAtIndex = this.selectedData.splice(index, 1);
      this.changes.emit({ added: [], removed: [...tagAtIndex] });
    }
    this.toHighlight = '';
  }

  onSelected(event: MatAutocompleteSelectedEvent, field: number) {
    const input = this.input.find((element, index) => index === field);
    if (this.selectedData.indexOf(event.option.value) === -1) {
      this.selectedData.push(event.option.value);
      this.changes.emit({ added: [event.option.value], removed: [] });
    }

    this.toHighlight = '';
    if (input) {
      input.nativeElement.value = '';
    }
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
    for (const trigger of this.triggerCollection.toArray()) {
      trigger.panelClosingActions.subscribe((e) => {
        if (!(e && e.source)) {
          trigger._onChange('');
          trigger.openPanel();
        }
      });
    }
  }

  applyHighlight(tag: Tag) {
    const element = this.selectedData.find((el) => el.label === tag.label);
    if (element) {
      return true;
    }
    return false;
  }

  private isTag(value: Tag | string): value is Tag {
    return (value as Tag).label !== undefined;
  }

  private filter(value: Tag | string): Tag[] {
    let filterValue: string;
    if (this.isTag(value)) {
      filterValue = value.label.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    this.toHighlight = filterValue;

    return this.data.filter((tag) => tag.label.toLowerCase().includes(filterValue));
  }

  getState() {
    return [...this.selectedData];
  }

  setState(data: Tag[]) {
    this.selectedData = [...data];
  }
}
