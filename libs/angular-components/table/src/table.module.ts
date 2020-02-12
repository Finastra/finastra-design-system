import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  exports: [TableComponent]
})
export class UxgTableModule {}
