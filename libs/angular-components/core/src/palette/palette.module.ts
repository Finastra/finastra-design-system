import { NgModule } from '@angular/core';

import { PaletteService } from './palette.service';
import { PALETTE_CONFIG } from './palette.models';
import { PALETTE_DEFAULT_CONFIG } from './palette.defaults';

@NgModule({
  providers: [
    PaletteService,
    {
      provide: PALETTE_CONFIG,
      useValue: PALETTE_DEFAULT_CONFIG
    }
  ]
})
export class PaletteModule {}
