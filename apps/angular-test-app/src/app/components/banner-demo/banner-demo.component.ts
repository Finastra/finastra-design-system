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
        value: 9,
        tooltip: 'Existing appss'
      },
      {
        name: 'Income',
        value: '666',
        tooltip: 'Income currency $'
      }
    ];
  }
}
