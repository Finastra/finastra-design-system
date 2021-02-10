import { waitForAsync, TestBed } from '@angular/core/testing';
import { FilterGroupModule } from './filter-group.module';

describe('FilterGroupModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FilterGroupModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(FilterGroupModule).toBeDefined();
  });
});
