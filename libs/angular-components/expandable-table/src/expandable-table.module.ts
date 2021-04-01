import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ExpandableTableComponent } from './expandable-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UxgTableModule } from '@finastra/angular-components/table';

@NgModule({
  declarations: [ExpandableTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    UxgTableModule
  ],
  exports: [ExpandableTableComponent],
  entryComponents: [ExpandableTableComponent]
})
export class ExpandableTableModule {}
