import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ToggleBtn {
  label: string;
  value: string;
  matIcon?: string;
  isSelected?: boolean;
}

interface UXGFilterChanges {
  added: ToggleBtn[];
  removed: ToggleBtn[];
}

@Component({
  selector: 'uxg-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.scss']
})
export class FilterToggleComponent implements OnInit {
  selectedValue: ToggleBtn | undefined;
  initialValue!: ToggleBtn;
  previousValue!: ToggleBtn;
  private _data: ToggleBtn[] = [];

  @Input()
  set data(data: ToggleBtn[]) {
    this._data = data;
  }

  get data(): ToggleBtn[] {
    return this._data;
  }
  @Input() showIcon = true;
  @Input() showLabel = true;
  @Input() dense = false;
  @Input() uxgClass = '';

  @Output() changes = new EventEmitter<UXGFilterChanges>();

  constructor(private hostElement: ElementRef) {
    this.hostElement.nativeElement.__component = this;
  }

  ngOnInit() {
    this.data.forEach((toggleBtn) => {
      if (toggleBtn.isSelected) {
        this.initialValue = toggleBtn;
        this.selectedValue = toggleBtn;
        this.previousValue = toggleBtn;
      }
    });
  }

  onValueChange(val: ToggleBtn) {
    this.selectedValue = val;
    this.changes.emit({ added: [val], removed: [this.previousValue] });
    this.previousValue = val;
  }

  clearSelection() {
    this.selectedValue = undefined;
    this.changes.emit({ added: [], removed: [this.previousValue] });
  }

  reset() {
    if (this.initialValue) {
      this.selectedValue = this.initialValue;
      this.changes.emit({ added: [this.initialValue], removed: [this.previousValue] });
    }
  }

  getState() {
    return this.selectedValue ? [this.selectedValue] : [];
  }

  setState(value: ToggleBtn[]) {
    if (value.length) {
      this.selectedValue = value[0];
    }
  }
}
