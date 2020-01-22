import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { FilterGroupComponent } from './filter-group.component';
import { UxgFilter } from './filter.directive';
import { FilterGroupDialogComponent } from './filter-group-dialog/filter-group-dialog.component';

@NgModule({
  declarations: [FilterGroupComponent, UxgFilter, FilterGroupDialogComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [FilterGroupDialogComponent],
  exports: [FilterGroupComponent, UxgFilter]
})
export class FilterGroupModule {}
