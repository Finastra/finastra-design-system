import { Component, OnInit } from '@angular/core';
import { AccountDetail } from '@ffdc/uxg-angular-components/cards/account-detail-card';

@Component({
  selector: 'ffdc-account-detail-card-demo',
  templateUrl: './account-detail-card-demo.component.html',
  styleUrls: ['./account-detail-card-demo.component.scss']
})
export class AccountDetailCardDemoComponent implements OnInit {

  accountDetail: AccountDetail = {
    accountType: 'CHK',
    nickname: 'John Doe',
    accountNumber: '0000006001-DDA',
    alternateAccountNumber: '0000006001',
    ownerName: undefined,
    openDate: undefined,
    balances: [
      {
        type: 'available',
        amount: 19721.64
      },
      {
        type: 'current',
        amount: 19721.64
      }
    ]
  }

  constructor() { }

  ngOnInit() { }
}
