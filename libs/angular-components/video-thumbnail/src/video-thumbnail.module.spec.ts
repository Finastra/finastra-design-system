import { async, TestBed } from '@angular/core/testing';
import { VideoThumbnailModule } from './video-thumbnail.module';

describe('VideoThumbnailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VideoThumbnailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VideoThumbnailModule).toBeDefined();
  });
});
