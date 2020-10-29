import { waitForAsync, TestBed } from '@angular/core/testing';
import { ClickOutsideModule } from './click-outside.module';

describe('ClickOutsideModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ClickOutsideModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ClickOutsideModule).toBeDefined();
  });
});
