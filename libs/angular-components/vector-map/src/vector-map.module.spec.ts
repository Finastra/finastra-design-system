import { async, TestBed } from '@angular/core/testing';
import { VectorMapModule } from './vector-map.module';

describe('VectorMapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VectorMapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VectorMapModule).toBeDefined();
  });
});
