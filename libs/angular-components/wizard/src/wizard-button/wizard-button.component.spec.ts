import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizardButton } from './wizard-button.component';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { PageCollectionService } from '../services/page-collection.service';
import { ButtonHubService } from '../services/button-hub.service';

describe('UxgWizardButton', () => {
  let component: UxgWizardButton;
  let fixture: ComponentFixture<UxgWizardButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizardButton],
      providers: [WizardNavigationService, PageCollectionService, ButtonHubService]
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
