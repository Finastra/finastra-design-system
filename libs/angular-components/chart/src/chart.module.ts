import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trace } from './directives/trace.directive';
import { GroupTraces } from './directives/groupTrace.directive';
import { Legend } from './directives/legend.directive';
import { ChartComponent } from './chart.component';

import { PlotlyModule } from 'angular-plotly.js';
import * as plotlyjs from 'plotly.js';
PlotlyModule.plotlyjs = plotlyjs;

@NgModule({
  imports: [CommonModule, PlotlyModule],
  declarations: [ChartComponent, GroupTraces, Legend, Trace],
  exports: [ChartComponent, GroupTraces, Legend, Trace]
})
export class ChartModule {}
