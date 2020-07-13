import { async, TestBed } from '@angular/core/testing';
import { UXGChangelogModule } from './changelog.module';

describe('ChangelogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UXGChangelogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UXGChangelogModule).toBeDefined();
  });
});
