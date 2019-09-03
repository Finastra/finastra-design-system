import { TestBed } from '@angular/core/testing';

import { GlobalSearchOverlayService } from './global-search-overlay.service';
import { GlobalSearchModule } from '../global-search.module';

describe('GlobalSearchOverlayService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [GlobalSearchModule]
    })
  );

  it('should be created', () => {
    const service: GlobalSearchOverlayService = TestBed.get(GlobalSearchOverlayService);
    expect(service).toBeTruthy();
  });
});
