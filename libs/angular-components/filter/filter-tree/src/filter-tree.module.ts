import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTreeComponent } from './filter-tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ],
  declarations: [FilterTreeComponent],
  exports: [FilterTreeComponent]
})
export class FilterTreeModule {}
