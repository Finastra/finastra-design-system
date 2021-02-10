import { waitForAsync, TestBed } from '@angular/core/testing';
import { AccountCardModule } from './account-card.module';

describe('AccountCardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AccountCardModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AccountCardModule).toBeDefined();
  });
});
