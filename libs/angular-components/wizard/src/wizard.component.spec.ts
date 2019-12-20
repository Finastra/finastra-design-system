import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizardComponent } from './wizard.component';
import { MatIconModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UxgWizardComponent', () => {
  let component: UxgWizardComponent;
  let fixture: ComponentFixture<UxgWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatIconModule, MatDividerModule],
      declarations: [UxgWizardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
