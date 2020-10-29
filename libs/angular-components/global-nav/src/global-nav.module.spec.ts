import { waitForAsync, TestBed } from '@angular/core/testing';
import { GlobalNavModule } from './global-nav.module';

describe('GlobalNavModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [GlobalNavModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(GlobalNavModule).toBeDefined();
  });
});
