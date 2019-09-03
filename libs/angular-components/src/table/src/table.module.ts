import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatButtonModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [TableComponent]
})
export class TableModule {}
