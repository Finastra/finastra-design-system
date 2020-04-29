import { async, TestBed } from '@angular/core/testing';
import { AccountDetailCardModule } from './account-detail-card.module';

describe('AccountDetailCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountDetailCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountDetailCardModule).toBeDefined();
  });
});
