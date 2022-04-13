import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FilterTagsComponent } from './filter-tags.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [FilterTagsComponent, HighlightPipe],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [FilterTagsComponent, HighlightPipe]
})
export class FilterTagsModule {}
