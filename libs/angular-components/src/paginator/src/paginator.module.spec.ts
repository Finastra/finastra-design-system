import { async, TestBed } from '@angular/core/testing';
import { PaginatorModule } from './paginator.module';

describe('PaginatorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaginatorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaginatorModule).toBeDefined();
  });
});
