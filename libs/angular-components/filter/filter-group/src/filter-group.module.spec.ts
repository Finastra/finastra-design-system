import { async, TestBed } from '@angular/core/testing';
import { FilterGroupModule } from './filter-group.module';

describe('FilterGroupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterGroupModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FilterGroupModule).toBeDefined();
  });
});
