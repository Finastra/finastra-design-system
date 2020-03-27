import { EventEmitter } from '@angular/core';

export interface UXGFilterChanges<T> {
  instance: string;
  added: T[];
  removed: T[];
}

export interface UXGFilter<T> {
  title: string;
  data: T[];
  changes: EventEmitter<UXGFilterChanges<T>>;
  clearSelection: Function;
  getState: Function;
  setState: Function;
}
