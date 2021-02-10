import { waitForAsync, TestBed } from '@angular/core/testing';
import { SkeletonTextModule } from './skeleton-text.module';

describe('SkeletonTextModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SkeletonTextModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(SkeletonTextModule).toBeDefined();
  });
});
