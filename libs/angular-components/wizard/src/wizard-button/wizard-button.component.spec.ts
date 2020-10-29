import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizardButtonComponent } from './wizard-button.component';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { PageCollectionService } from '../services/page-collection.service';
import { ButtonHubService } from '../services/button-hub.service';

describe('UxgWizardButtonComponent', () => {
  let component: UxgWizardButtonComponent;
  let fixture: ComponentFixture<UxgWizardButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UxgWizardButtonComponent],
        providers: [WizardNavigationService, PageCollectionService, ButtonHubService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
