import { Component, Input } from '@angular/core';
import { AccountDetail } from './account-detail.interface';

@Component({
  selector: 'uxg-account-detail-card',
  templateUrl: './account-detail-card.component.html',
  styleUrls: ['./account-detail-card.component.scss']
})


export class AccountDetailCardComponent {

  @Input() accountDetail: AccountDetail = {};

}
