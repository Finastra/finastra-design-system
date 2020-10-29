import { waitForAsync, TestBed } from '@angular/core/testing';
import { FilterTagsModule } from './filter-tags.module';

describe('FilterTagsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FilterTagsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(FilterTagsModule).toBeDefined();
  });
});
