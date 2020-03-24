import { async, TestBed } from '@angular/core/testing';
import { ListModule } from './list.module';

describe('ListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListModule).toBeDefined();
  });
});
