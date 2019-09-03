import { Component, OnInit, ViewChild } from '@angular/core';
import { UxgGlobalSearch } from '@ffdc/uxg-angular-components/global-search';

@Component({
  selector: 'ffdc-global-search-demo',
  templateUrl: './global-search-demo.component.html',
  styleUrls: ['./global-search-demo.component.scss']
})
export class GlobalSearchDemoComponent implements OnInit {
  @ViewChild('uxgGlobalSearch', { static: true }) globalSearch: UxgGlobalSearch;

  ngOnInit() {
    const documents = [
      {
        accountType: 'EUR',
        nickname: 'Personnal',
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
        nickname: 'Savings',
        balances: [
          {
            type: 'current',
            amount: 22000
          }
        ],
        id: '5811'
      }
    ];

    const searchService = this.globalSearch.searchService;
    searchService.initIndex(['nickname', 'id', 'accountType']).then(() => {
      documents.forEach(function(item) {
        searchService.addDoc(item);
      });
    });

    this.globalSearch.resultItemClick.subscribe(item => {
      console.log(item);
    });
  }
}
