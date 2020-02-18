import { async, TestBed } from '@angular/core/testing';
import { ChartModule } from './chart.module';

describe('ChartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChartModule).toBeDefined();
  });
});
