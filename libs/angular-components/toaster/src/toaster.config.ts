import { InjectionToken } from '@angular/core';
import { ToastPosition, ToastLogicalPosition } from './toaster.model';

export const TOASTER_CONFIG = new InjectionToken<ToasterConfig>('Default toaster config');

export class ToasterConfig {
  /**
   * Status chooses color scheme for the toast.
   * */
  type = 'info';
  /**
   * Duration is timeout between toast appears and disappears. 0 keeps the toast indefinitely on the screen
   * */
  duration = 5000;
  /**
   * Determines where on the screen toast have to be rendered.
   * */
  position: ToastPosition = ToastLogicalPosition.TOP_END;
  /**
   * Destroy by click means you can hide the toast by clicking it.
   * */
  destroyByClick = true;

  constructor(config: Partial<ToasterConfig>) {
    Object.assign(this, config);
  }
}
