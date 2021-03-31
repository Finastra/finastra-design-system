import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemoComponent } from './table-demo.component';
import { UxgTableModule } from '@finastra/angular-components/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TableDemoComponent', () => {
  let component: TableDemoComponent;
  let fixture: ComponentFixture<TableDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          UxgTableModule,
          CommonModule,
          MatPaginatorModule,
          BrowserAnimationsModule,
          MatSlideToggleModule,
          MatSelectModule,
          MatFormFieldModule,
          MatSidenavModule,
          MatRadioModule,
          FormsModule
        ],
        declarations: [TableDemoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create demo table ', () => {
    expect(component).toBeTruthy();
  });
});
