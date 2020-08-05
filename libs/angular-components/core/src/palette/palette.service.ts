import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { PaletteConfig, PALETTE_CONFIG } from './palette.models';

@Injectable()
export class PaletteService implements OnDestroy {
  paletteChange$: Observable<PaletteConfig>;
  private internalSubject: BehaviorSubject<PaletteConfig>;

  constructor(@Inject(PALETTE_CONFIG) private config: PaletteConfig) {
    this.internalSubject = new BehaviorSubject(this.config);
    this.paletteChange$ = this.internalSubject.asObservable();
  }

  ngOnDestroy() {
    this.internalSubject.complete();
  }

  changePalette(newPaletteConfig: PaletteConfig) {
    this.config = newPaletteConfig;
    this.internalSubject.next(this.config);
  }
}
