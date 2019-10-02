import { InjectionToken, Injectable } from '@angular/core';

@Injectable()
export class WindowWrapper extends Window {}

export function getWindow(): Window {
  return window;
}
