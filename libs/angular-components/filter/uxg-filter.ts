import { Input, Output, EventEmitter } from '@angular/core';

export interface UXGFilterChanges<T> {
  added: T[];
  removed: T[];
}
export class UXGFilter<T> {
  private _change: UXGFilterChanges<T>;
  private _data: T[];
  constructor() {
    this.changes = new EventEmitter<UXGFilterChanges<T>>();
  }
  @Input()
  set data(data: T[]) {
    this._data = data;
  }
  get data(): T[] {
    return this._data;
  }
  @Output()
  changes: EventEmitter<UXGFilterChanges<T>>;
}
