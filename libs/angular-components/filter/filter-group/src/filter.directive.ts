import { AfterViewInit, Directive, Input, ViewContainerRef } from '@angular/core';
import { UXGFilter } from './filter.models';

@Directive({ selector: '[uxgFilter]' })
export class UxgFilter implements AfterViewInit {
  @Input('uxgFilter') instance = '';
  // @ts-ignore
  component: UXGFilter<any>;

  constructor(public viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    // // TODO: wait for Ivy

    // @ts-ignore
    if (this.viewContainerRef['_data'].componentView) {
      // @ts-ignore
      this.component = this.viewContainerRef['_data'].componentView.component;
    }
  }
}
