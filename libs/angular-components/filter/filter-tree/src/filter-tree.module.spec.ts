import { waitForAsync, TestBed } from '@angular/core/testing';
import { FilterTreeModule } from './filter-tree.module';

describe('FilterTreeModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FilterTreeModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(FilterTreeModule).toBeDefined();
  });
});
