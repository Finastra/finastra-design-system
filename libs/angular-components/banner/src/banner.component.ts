import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Banner } from './model';

interface BannerItem {
  name: string;
  text: string;
  tooltip: string;
}

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
  get banners(): BannerItem[] {
    return this._bannerData.map(banner => {
      return {
        name: banner.name,
        text: this.getBannerText(banner),
        tooltip: banner.tooltip
      };
    });
  }

  private abbreviateNumber(number: number) {
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
    // what tier? (determines SI symbol)
    // tslint:disable-next-line: no-bitwise
    const tier = (Math.log10(number) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return number;

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  private getBannerText(banner: Banner): string {
    if (typeof banner.value === 'number') {
      let bannerText = '';
      if (banner.prefix) {
        bannerText += banner.prefix + ' ';
      }
      bannerText += this.abbreviateNumber(banner.value).toString();
      if (banner.suffix) {
        bannerText += ' ' + banner.suffix;
      }
      return bannerText;
    }
    return banner.value;
  }
  ngOnInit() {}
  ngOnDestroy() {}
}
