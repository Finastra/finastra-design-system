import { Component, OnInit } from '@angular/core';
import { Banner } from '@ffdc/uxg-angular-components/banner';
@Component({
  selector: 'ffdc-banner-demo',
  templateUrl: './banner-demo.component.html',
  styleUrls: ['./banner-demo.component.scss']
})
export class BannerDemoComponent implements OnInit {
  exampleBannerData: Banner[] = [];
  constructor() {}

  ngOnInit() {
    this.exampleBannerData = [
      {
        name: 'App number',
        value: 935,
        tooltip: 'How many apps'
      },
      {
        name: 'Income',
        value: 9435,
        prefix: '€',
        tooltip: 'Income with prefix currency'
      },
      {
        name: 'Income',
        value: 9435,
        suffix: '€',
        tooltip: 'incomes with suffix currency'
      },
      {
        name: 'Request Result',
        value: 'Pending',
        tooltip: 'Text banner example'
      }
    ];
  }
}
