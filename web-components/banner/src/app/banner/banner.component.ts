import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Banner } from '@ffdc/uxg-angular-components/banner';

@Component({
  selector: 'uxg-ce-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() data = '[]';
  bannerData!: Banner[];

  constructor() {
    console.log('from Web component constructor !!');
  }

  ngOnInit(): void {
    console.log('from lifecycle hook !!');
    this.bannerData = JSON.parse(this.data);
  }
}
