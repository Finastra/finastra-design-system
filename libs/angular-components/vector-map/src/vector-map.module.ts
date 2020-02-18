import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { VectorMapComponent } from './vector-map.component';

import { PlotlyViaWindowModule } from 'angular-plotly.js';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    PlotlyViaWindowModule
  ],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {}
