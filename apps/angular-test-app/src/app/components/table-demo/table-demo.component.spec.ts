import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemoComponent } from './table-demo.component';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';
import {
  MatPaginatorModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TableDemoComponent', () => {
  let component: TableDemoComponent;
  let fixture: ComponentFixture<TableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UxgTableModule,
        CommonModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatRadioModule,
        FormsModule
      ],
      declarations: [TableDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create demo table ', () => {
    expect(component).toBeTruthy();
  });
});
