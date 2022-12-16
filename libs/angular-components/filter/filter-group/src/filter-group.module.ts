import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ClickOutsideModule } from '@finastra/angular-components/core';
import { FilterGroupDialogComponent } from './filter-group-dialog/filter-group-dialog.component';
import { FilterGroupComponent } from './filter-group.component';
import { UxgFilter } from './filter.directive';

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
    MatDialogModule,
    FormsModule,
    ClickOutsideModule
  ],
  entryComponents: [FilterGroupDialogComponent],
  exports: [FilterGroupComponent, UxgFilter]
})
export class FilterGroupModule {}
