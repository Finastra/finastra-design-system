import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { UXGFilter } from './filter.models';

@Directive({ selector: '[uxgFilter]' })
export class UxgFilter implements AfterViewInit {
  @Input('uxgFilter') instance = '';

  component!: UXGFilter<any>;

  constructor(private ref: ElementRef) {}

  ngAfterViewInit() {
    this.component = this.ref.nativeElement.__component;
  }
}
