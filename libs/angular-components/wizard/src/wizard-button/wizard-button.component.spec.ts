import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizardButton } from './wizard-button.component';

describe('UxgWizardButton', () => {
  let component: UxgWizardButton;
  let fixture: ComponentFixture<UxgWizardButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizardButton]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
