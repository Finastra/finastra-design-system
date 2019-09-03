import { async, TestBed } from '@angular/core/testing';
import { TableModule } from './table.module';

describe('TableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TableModule).toBeDefined();
  });
});
