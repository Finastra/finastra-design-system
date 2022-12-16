import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LazyloadScriptService } from '@finastra/angular-components/core';
import { PlotlyService, PlotlyViaCDNModule } from 'angular-plotly.js';
import { VectorMapComponent } from './vector-map.component';

@NgModule({
  imports: [CommonModule, MatTooltipModule, MatSelectModule, MatFormFieldModule, MatInputModule, PlotlyViaCDNModule],
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
