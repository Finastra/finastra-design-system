import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FilterTreeComponent } from './filter-tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatButtonModule,
  MatTreeModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
  ],
  declarations: [FilterTreeComponent],
  exports: [FilterTreeComponent]
})
export class FilterTreeModule { }
