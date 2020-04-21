import { Directive, Input } from '@angular/core';

@Directive({ selector: '[uxg-grid-layout-item], [uxgGridLayoutItem]' })
export class UxpGridLayoutItemDirective {
  private _uxgGridLayoutItem = '3:3';

  @Input() get uxgGridLayoutItem() {
    return this._uxgGridLayoutItem;
  }

  set uxgGridLayoutItem(value) {
    this._uxgGridLayoutItem = value;
    this.extractColsRowsValue(value);
  }

  cols = 3;
  rows = 3;
  constructor() {}

  private extractColsRowsValue(data: string) {
    if (data) {
      const values = data.split(':');
      this.cols = parseInt(values[0], 0);
      this.rows = parseInt(values[1], 0);
    }
  }
}
