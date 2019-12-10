import { TestBed } from '@angular/core/testing';

import { PageCollectionService } from './page-collection.service';

describe('PageCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageCollectionService = TestBed.get(PageCollectionService);
    expect(service).toBeTruthy();
  });
});
