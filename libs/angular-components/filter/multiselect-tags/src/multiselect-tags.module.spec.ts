import { waitForAsync, TestBed } from '@angular/core/testing';
import { MultiselectTagsModule } from './multiselect-tags.module';

describe('MultiselectTagsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MultiselectTagsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MultiselectTagsModule).toBeDefined();
  });
});
