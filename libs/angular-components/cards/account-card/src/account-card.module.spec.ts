import { async, TestBed } from '@angular/core/testing';
import { AccountCardModule } from './account-card.module';

describe('AccountCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountCardModule).toBeDefined();
  });
});
