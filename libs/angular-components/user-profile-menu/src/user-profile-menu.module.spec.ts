import { waitForAsync, TestBed } from '@angular/core/testing';
import { UxgUserProfileMenuModule } from './user-profile-menu.module';

describe('UxgUserProfileMenuModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [UxgUserProfileMenuModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(UxgUserProfileMenuModule).toBeDefined();
  });
});
