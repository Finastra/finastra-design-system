import { async, TestBed } from '@angular/core/testing';
import { FilterPanelModule } from './filter-panel.module';

describe('FilterPanelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterPanelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FilterPanelModule).toBeDefined();
  });
});
