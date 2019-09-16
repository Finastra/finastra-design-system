import { async, TestBed } from '@angular/core/testing';
import { UxgTableModule } from './table.module';

describe('UxgTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UxgTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UxgTableModule).toBeDefined();
  });
});
