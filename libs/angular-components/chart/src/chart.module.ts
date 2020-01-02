import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceComponent } from './directives/trace.component';
import { GroupTracesComponent } from './directives/groupTrace.component';
import { LegendComponent } from './directives/legend.component';
import { ChartComponent } from './chart.component';

import { PlotlyModule } from 'angular-plotly.js';
import * as plotlyjs from 'plotly.js';
PlotlyModule.plotlyjs = plotlyjs;

@NgModule({
  imports: [CommonModule, PlotlyModule],
  declarations: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent],
  exports: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent]
})
export class ChartModule {}
