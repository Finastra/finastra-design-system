import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceComponent } from './directives/trace.component';
import { GroupTracesComponent } from './directives/groupTrace.component';
import { LegendComponent } from './directives/legend.component';
import { ChartComponent } from './chart.component';
import { PlotlyViaCDNModule, PlotlyService } from 'angular-plotly.js';
import { LazyloadScriptService } from '@finastra/angular-components/core';
@NgModule({
  imports: [CommonModule, PlotlyViaCDNModule],
  declarations: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent],
  exports: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent]
})
export class ChartModule {
  constructor(lazyLoadScriptService: LazyloadScriptService) {
    lazyLoadScriptService.load('plotly.js', 'Plotly').subscribe((plotly) => {
      PlotlyService.setPlotly(plotly);
    });
  }
}
