import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { VectorMapComponent } from './vector-map.component';
import { PlotlyViaCDNModule, PlotlyService } from 'angular-plotly.js';
import { LazyloadScriptService } from '@finastra/angular-components/core';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    PlotlyViaCDNModule
  ],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {
  constructor(lazyLoadScriptService: LazyloadScriptService) {
    lazyLoadScriptService.load('plotly.js', 'Plotly').subscribe((plotly) => {
      PlotlyService.setPlotly(plotly);
    });
  }
}
