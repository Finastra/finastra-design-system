import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from '@finastra/angular-components/cards/account-card';

@Component({
  selector: 'ffdc-account-card-demo',
  templateUrl: './account-card-demo.component.html',
  styleUrls: ['./account-card-demo.component.scss']
})
export class AccountCardDemoComponent implements OnInit {
  accounts: Account[] = [
    {
      id: '1',
      name: 'France',
      currency: 'EUR',
      balance: 50000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      id: '2',
      name: 'USA',
      currency: 'USD',
      balance: 750000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      id: '3',
      name: 'UK',
      currency: 'GBP',
      balance: 80000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      id: '4',
      name: 'China',
      currency: 'CNY',
      balance: 70000,
      number: 'DE89 3704 0044 0532 0130 00'
    }
  ];
  accounts$ = new Subject();
  selectedAccount = this.accounts[0].id;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.accounts$.next(this.accounts);
    }, 1500);
  }

  selectAccount(account: Account) {
    this.selectedAccount = account.id;
  }
}
