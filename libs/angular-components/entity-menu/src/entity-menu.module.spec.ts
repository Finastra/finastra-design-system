import { waitForAsync, TestBed } from '@angular/core/testing';
import { EntityMenuModule } from './entity-menu.module';

describe('EntityMenuModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [EntityMenuModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(EntityMenuModule).toBeDefined();
  });
});
