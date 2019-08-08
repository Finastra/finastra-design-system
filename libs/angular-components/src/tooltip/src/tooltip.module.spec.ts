import { async, TestBed } from '@angular/core/testing';
import { TooltipModule } from './tooltip.module';

describe('SignpostModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TooltipModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TooltipModule).toBeDefined();
  });
});
