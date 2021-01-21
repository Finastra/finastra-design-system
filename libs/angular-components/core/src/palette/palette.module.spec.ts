import { waitForAsync, TestBed } from '@angular/core/testing';
import { PaletteModule } from './palette.module';

describe('PaletteModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [PaletteModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PaletteModule).toBeDefined();
  });
});
