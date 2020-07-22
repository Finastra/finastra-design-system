import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, Inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { BannerModule } from '@ffdc/uxg-angular-components/banner';

import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [BrowserModule, BannerModule],
  entryComponents: [BannerComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(BannerComponent, this.injector);
    const webComponent = createCustomElement(BannerComponent, { injector, strategyFactory });
    customElements.define('uxg-ce-banner', webComponent);
  }

  ngDoBootstrap() {}
}
