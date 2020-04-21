import { async, TestBed } from '@angular/core/testing';
import { BannerModule } from './banner.module';

describe('BannerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BannerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BannerModule).toBeDefined();
  });
});
