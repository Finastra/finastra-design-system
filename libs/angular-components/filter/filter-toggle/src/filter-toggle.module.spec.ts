import { waitForAsync, TestBed } from '@angular/core/testing';
import { FilterToggleModule } from './filter-toggle.module';

describe('FilterToggleModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FilterToggleModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(FilterToggleModule).toBeDefined();
  });
});
