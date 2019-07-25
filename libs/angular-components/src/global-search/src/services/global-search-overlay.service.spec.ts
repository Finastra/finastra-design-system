import { TestBed } from '@angular/core/testing';

import { GlobalSearchOverlayService } from './global-search-overlay.service';

describe('GlobalSearchOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSearchOverlayService = TestBed.get(GlobalSearchOverlayService);
    expect(service).toBeTruthy();
  });
});
