import { waitForAsync, TestBed } from '@angular/core/testing';
import { BannerModule } from './banner.module';

describe('BannerModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BannerModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(BannerModule).toBeDefined();
  });
});
