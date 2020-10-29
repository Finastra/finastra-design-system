import { waitForAsync, TestBed } from '@angular/core/testing';
import { AvatarModule } from './avatar.module';

describe('AvatarModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AvatarModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AvatarModule).toBeDefined();
  });
});
