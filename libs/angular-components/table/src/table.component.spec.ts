import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('UxgTableModule', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        MatCheckboxModule
      ],
      declarations: [TableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});

describe('Table Sort', () => {
  const table = new TableComponent();
});
