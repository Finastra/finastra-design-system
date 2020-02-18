import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceComponent } from './directives/trace.component';
import { GroupTracesComponent } from './directives/groupTrace.component';
import { LegendComponent } from './directives/legend.component';
import { ChartComponent } from './chart.component';

import { PlotlyViaWindowModule } from 'angular-plotly.js';

@NgModule({
  imports: [CommonModule, PlotlyViaWindowModule],
  declarations: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent],
  exports: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent]
})
export class ChartModule {}
