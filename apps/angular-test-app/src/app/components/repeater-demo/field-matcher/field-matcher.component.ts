import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'ffdc-field-matcher',
  templateUrl: './field-matcher.component.html',
  styleUrls: ['./field-matcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldMatcherComponent),
      multi: true
    }
  ]
})
export class FieldMatcherComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
  @Input() fields: any;
  @Input() templateFields: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {}

  writeValue(value: any): void {
    this.templateFields = value;
    this.onChange(value);
    this.onTouched();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  onSelectionChange(changes: MatSelectChange, key: string) {
    const data = { ...this.templateFields };
    data[key] = changes.value.name;
    this.writeValue(data);
  }

  compareWith(o1: any, o2: string): boolean {
    if (o1.name && o2) {
      return o1.name === o2;
    }
    return false;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {}
}
