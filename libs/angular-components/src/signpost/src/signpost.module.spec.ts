import { async, TestBed } from '@angular/core/testing';
import { SignpostModule } from './signpost.module';

describe('SignpostModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignpostModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SignpostModule).toBeDefined();
  });
});
