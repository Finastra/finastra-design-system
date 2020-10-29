import { waitForAsync, TestBed } from '@angular/core/testing';
import { UxgTableModule } from './table.module';

describe('UxgTableModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [UxgTableModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(UxgTableModule).toBeDefined();
  });
});
