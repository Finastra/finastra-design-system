import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Banner } from './model';

@Component({
  selector: 'uxg-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit, OnDestroy {
  private _bannerData: Banner[] = [];
  @Input()
  set bannerData(data: Banner[]) {
    if (data && data.length > 0) {
      this._bannerData = data;
    }
  }
  get bannerData(): Banner[] {
    return this._bannerData;
  }
  ngOnInit() {}
  ngOnDestroy() {}
}
