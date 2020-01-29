import { AfterViewInit, Directive, Input, ViewContainerRef } from '@angular/core';
import { UXGFilter } from './filter.models';

@Directive({ selector: '[uxgFilter]' })
export class UxgFilter implements AfterViewInit {
  @Input('uxgFilter') instance = '';

  component!: UXGFilter<any>;

  constructor(public viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    // // TODO: wait for Ivy

    if ((<any>this.viewContainerRef)['_data'].componentView) {
      this.component = (<any>this.viewContainerRef)['_data'].componentView.component;
    }
  }
}
