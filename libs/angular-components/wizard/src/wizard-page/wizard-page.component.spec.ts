import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizardPage } from './wizard-page.component';

describe('UxgWizardPage', () => {
  let component: UxgWizardPage;
  let fixture: ComponentFixture<UxgWizardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizardPage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
