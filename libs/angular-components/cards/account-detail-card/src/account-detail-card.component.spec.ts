import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailCardComponent } from './account-detail-card.component';

describe('AccountDetailCardModule', () => {
  let component: AccountDetailCardComponent;
  let fixture: ComponentFixture<AccountDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountDetailCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
