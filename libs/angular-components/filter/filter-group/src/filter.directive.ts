import { AfterViewInit, Directive, Input, ViewRef } from '@angular/core';
import { UXGFilter } from './filter.models';

@Directive({ selector: '[uxgFilter]' })
export class UxgFilter implements AfterViewInit {
  @Input('uxgFilter') instance = '';

  component!: UXGFilter<any>;

  constructor(public ref: ViewRef) {}

  ngAfterViewInit() {
    if ((<any>this.ref).context) {
      this.component = (<any>this.ref).context;
    }
  }
}
