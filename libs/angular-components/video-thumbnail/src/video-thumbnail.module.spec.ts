import { waitForAsync, TestBed } from '@angular/core/testing';
import { VideoThumbnailModule } from './video-thumbnail.module';

describe('VideoThumbnailModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [VideoThumbnailModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VideoThumbnailModule).toBeDefined();
  });
});
