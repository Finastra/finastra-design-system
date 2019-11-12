import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { VectorMapComponent } from './vector-map.component';

import { PlotlyModule } from 'angular-plotly.js';
import * as plotlyjs from 'plotly.js';
PlotlyModule.plotlyjs = plotlyjs;

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    PlotlyModule
  ],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {}
