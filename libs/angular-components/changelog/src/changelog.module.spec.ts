import { waitForAsync, TestBed } from '@angular/core/testing';
import { UXGChangelogModule } from './changelog.module';

describe('ChangelogModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [UXGChangelogModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(UXGChangelogModule).toBeDefined();
  });
});
