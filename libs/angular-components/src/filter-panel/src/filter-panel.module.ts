import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FilterPanelComponent } from './filter-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatChipsModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [FilterPanelComponent],
  exports: [FilterPanelComponent]
})
export class FilterPanelModule { }
