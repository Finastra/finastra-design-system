import { TestBed } from '@angular/core/testing';

import { GlobalSearchService } from './global-search.service';

describe('GlobalSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSearchService = TestBed.get(GlobalSearchService);
    expect(service).toBeTruthy();
  });
});
