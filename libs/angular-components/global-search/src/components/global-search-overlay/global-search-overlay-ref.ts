import { OverlayRef } from '@angular/cdk/overlay';

export class SearchOverlayRef {
  constructor(private readonly overlay: OverlayRef) {}

  close() {
    this.overlay.dispose();
  }
}
