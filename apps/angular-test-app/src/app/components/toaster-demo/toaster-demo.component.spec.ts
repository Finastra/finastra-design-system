import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterDemoComponent } from './toaster-demo.component';
import { ToasterModule } from '@ffdc/uxg-angular-components/toaster';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ToasterDemoComponent', () => {
  let component: ToasterDemoComponent;
  let fixture: ComponentFixture<ToasterDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ToasterModule,
          CommonModule,
          BrowserAnimationsModule,
          MatSelectModule,
          MatFormFieldModule,
          MatButtonModule,
          MatInputModule,
          MatCheckboxModule,
          FormsModule
        ],
        declarations: [ToasterDemoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create toaster demo ', () => {
    expect(component).toBeTruthy();
  });
});
