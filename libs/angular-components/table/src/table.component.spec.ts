import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

describe('TableModule', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatTableModule, MatPaginatorModule, CdkTableModule, MatSortModule, MatIconModule],
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
