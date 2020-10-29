import { waitForAsync, TestBed } from '@angular/core/testing';
import { GlobalSearchModule } from './global-search.module';

describe('GlobalSearchModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [GlobalSearchModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(GlobalSearchModule).toBeDefined();
  });
});
