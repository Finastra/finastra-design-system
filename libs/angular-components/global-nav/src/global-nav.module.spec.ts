import { async, TestBed } from '@angular/core/testing';
import { GlobalNavModule } from './global-nav.module';

describe('GlobalNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GlobalNavModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GlobalNavModule).toBeDefined();
  });
});
