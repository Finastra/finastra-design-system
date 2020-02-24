import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FilterToggleComponent } from './filter-toggle.component';

@NgModule({
  declarations: [FilterToggleComponent],
  imports: [ReactiveFormsModule, CommonModule, MatButtonToggleModule, MatIconModule],
  exports: [FilterToggleComponent]
})
export class FilterToggleModule {}
