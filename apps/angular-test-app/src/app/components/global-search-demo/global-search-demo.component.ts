import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientSideSearchService } from './client-side-search.service';

@Component({
  selector: 'ffdc-global-search-demo',
  templateUrl: './global-search-demo.component.html',
  styleUrls: ['./global-search-demo.component.scss']
})
export class GlobalSearchDemoComponent implements OnInit {
  results: any[] = [];

  constructor(private snackBar: MatSnackBar, public searchService: ClientSideSearchService) {}

  ngOnInit() {
    const documents = [
      {
        accountType: 'EUR',
        nickname: 'Personal Account',
        balances: [
          {
            type: 'current',
            amount: 1000
          }
        ],
        id: '3658'
      },
      {
        accountType: 'GBP',
        nickname: 'Personal Account 2',
        balances: [
          {
            type: 'current',
            amount: 1200
          }
        ],
        id: '3659'
      },
      {
        accountType: 'EUR',
        nickname: 'Savings Account',
        balances: [
          {
            type: 'current',
            amount: 22000
          }
        ],
        id: '5811'
      },
      {
        accountType: 'USD',
        nickname: 'Forex Account',
        balances: [
          {
            type: 'current',
            amount: 1500
          }
        ],
        id: '4127'
      },
      {
        accountType: 'USD',
        nickname: 'Forex Account 2',
        balances: [
          {
            type: 'current',
            amount: 2500
          }
        ],
        id: '4128'
      },
      {
        accountType: 'GBP',
        nickname: 'Forex Account 3',
        balances: [
          {
            type: 'current',
            amount: 3500
          }
        ],
        id: '4129'
      }
    ];

    this.searchService.initIndex(['nickname', 'id', 'accountType']).then(() => {
      documents.forEach((item) => {
        this.searchService.addDoc(item);
      });
    });
  }

  onResultItemClick(item: any) {
    this.snackBar.open(`You clicked on '${item.nickname}'`, 'CONFIRM', { duration: 3000 });
  }

  onSearchTermChange(value: string) {
    const results = this.searchService.search(value);
    this.results = results.map((result) => result.doc);
  }
}
