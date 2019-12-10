import { TestBed } from '@angular/core/testing';

import { WizardNavigationService } from './wizard-navigation.service';

describe('WizardNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizardNavigationService = TestBed.get(WizardNavigationService);
    expect(service).toBeTruthy();
  });
});
