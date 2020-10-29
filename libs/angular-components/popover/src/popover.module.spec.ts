import { waitForAsync, TestBed } from '@angular/core/testing';
import { PopoverModule } from './popover.module';

describe('PopoverModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [PopoverModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PopoverModule).toBeDefined();
  });
});
