import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { FilterGroupComponent } from './filter-group.component';
import { UxgFilter } from './filter.directive';
import { FilterGroupDialogComponent } from './filter-group-dialog/filter-group-dialog.component';
import { ClickOutsideModule } from '@finastra/angular-components/core';

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
    FormsModule,
    ClickOutsideModule
  ],
  entryComponents: [FilterGroupDialogComponent],
  exports: [FilterGroupComponent, UxgFilter]
})
export class FilterGroupModule {}
