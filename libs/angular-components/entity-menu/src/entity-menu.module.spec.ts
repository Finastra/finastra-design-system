import { async, TestBed } from '@angular/core/testing';
import { EntityMenuModule } from './entity-menu.module';

describe('EntityMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EntityMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EntityMenuModule).toBeDefined();
  });
});
