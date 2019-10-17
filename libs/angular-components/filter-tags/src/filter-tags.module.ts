import { NgModule } from '@angular/core';

import { FilterTagsComponent } from './filter-tags.component';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterTagsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [FilterTagsComponent]
})
export class FilterTagsModule {}
