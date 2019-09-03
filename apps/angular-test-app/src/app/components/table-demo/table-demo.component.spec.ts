import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemoComponent } from './table-demo.component';
import { TableModule } from '@ffdc/uxg-angular-components/table';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableDemoComponent', () => {
  let component: TableDemoComponent;
  let fixture: ComponentFixture<TableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule, MatPaginatorModule, BrowserAnimationsModule],
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
