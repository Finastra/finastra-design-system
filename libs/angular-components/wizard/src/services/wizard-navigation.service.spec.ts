import { TestBed } from '@angular/core/testing';

import { WizardNavigationService } from './wizard-navigation.service';
import { PageCollectionService } from './page-collection.service';
import { ButtonHubService } from './button-hub.service';

describe('WizardNavigationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [WizardNavigationService, PageCollectionService, ButtonHubService]
    })
  );

  it('should be created', () => {
    const service: WizardNavigationService = TestBed.inject(WizardNavigationService);
    expect(service).toBeTruthy();
  });
});
