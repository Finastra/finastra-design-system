import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { UxpGridLayoutItemDirective } from './grid-layout-item.directive';

@Component({
  selector: 'uxg-grid-layout',
  templateUrl: 'grid-layout.component.html'
})
export class UxgGridLayoutComponent implements OnInit {
  @ContentChildren(UxpGridLayoutItemDirective) _items?: QueryList<UxpGridLayoutItemDirective>;

  constructor() {}

  ngOnInit() {}
}
