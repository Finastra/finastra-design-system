import { Component, OnInit, ViewChild } from '@angular/core';
import { UxgGlobalSearch } from '@ffdc/uxg-angular-components/global-search';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ffdc-global-search-demo',
  templateUrl: './global-search-demo.component.html',
  styleUrls: ['./global-search-demo.component.scss']
})
export class GlobalSearchDemoComponent implements OnInit {
  @ViewChild('uxgGlobalSearch', { static: true }) globalSearch: UxgGlobalSearch;

  constructor(private _snackBar: MatSnackBar) {}

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
      }
    ];

    const searchService = this.globalSearch.searchService;
    searchService.initIndex(['nickname', 'id', 'accountType']).then(() => {
      documents.forEach(function(item) {
        searchService.addDoc(item);
      });
    });

    this.globalSearch.resultItemClick.subscribe(item => {
      this._snackBar.open(`You clicked on '${item.nickname}'`, 'CONFIRM', { duration: 3000 });
    });
  }
}
