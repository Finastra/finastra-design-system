import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { PaletteConfig, PALETTE_CONFIG } from './palette.models';

@Injectable({
  providedIn: 'root'
})
export class PaletteService implements OnDestroy {
  paletteChange$: Observable<PaletteConfig>;
  private subscriber: Subscriber<PaletteConfig>;

  constructor(@Inject(PALETTE_CONFIG) private config: PaletteConfig) {
    this.paletteChange$ = new Observable(subscriber => {
      this.subscriber = subscriber;

      this.subscriber.next(this.config);
    });
  }

  ngOnDestroy() {
    this.subscriber.complete();
  }

  changePalette(newPaletteConfig: PaletteConfig) {
    this.config = newPaletteConfig;

    this.subscriber.next(this.config);
  }
}
