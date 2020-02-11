import { TestBed } from '@angular/core/testing';

import { PageCollectionService } from './page-collection.service';

describe('PageCollectionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PageCollectionService]
    })
  );

  it('should be created', () => {
    const service: PageCollectionService = TestBed.inject(PageCollectionService);
    expect(service).toBeTruthy();
  });
});
