import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'uxp-field-matcher',
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

  @Output() change: EventEmitter<any[]> = new EventEmitter();


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }
  ngOnDestroy(): void {
  }


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
    let data  = {...this.templateFields};
    data[key] = changes.value.name;
    this.writeValue(data);
  }

  compareWith(o1: Object, o2: string): boolean {
    if (o1['name'] && o2) {
      return o1['name'] === o2;
    } 
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    console.log(this.fields)
  }

}
