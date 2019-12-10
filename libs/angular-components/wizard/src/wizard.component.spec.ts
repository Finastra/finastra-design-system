import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizard } from './wizard.component';
import { MatIconModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UxgWizard', () => {
  let component: UxgWizard;
  let fixture: ComponentFixture<UxgWizard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatIconModule, MatDividerModule],
      declarations: [UxgWizard]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
