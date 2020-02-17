import { Component, OnInit, ViewChild } from '@angular/core';
import { UxgGlobalSearch, ResultGroup } from '@ffdc/uxg-angular-components/global-search';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientSideSearchService } from './client-side-search.service';

@Component({
  selector: 'ffdc-global-search-demo',
  templateUrl: './global-search-demo.component.html',
  styleUrls: ['./global-search-demo.component.scss']
})
export class GlobalSearchDemoComponent implements OnInit {
  @ViewChild('uxgGlobalSearch', { static: true }) globalSearch!: UxgGlobalSearch;

  results: ResultGroup[] = [];

  constructor(
    private snackBar: MatSnackBar, 
    public searchService: ClientSideSearchService
    ) {}

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

    this.searchService.initIndex(['nickname', 'id', 'accountType']).then(() => {
      documents.forEach(item => {
        this.searchService.addDoc(item);
      });
    });

    this.globalSearch.resultItemClick.subscribe((item: any) => {
      this.snackBar.open(`You clicked on '${item.nickname}'`, 'CONFIRM', { duration: 3000 });
    });
  }

  onSearchTermChange(value: string) {
    const results = this.searchService.search(value);
    this.results = results.map(result => ({
      key: result.ref,
      value: result.doc
    }))
  }
}
