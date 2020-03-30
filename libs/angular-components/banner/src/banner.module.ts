import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BannerComponent],
  imports: [MatTooltipModule, BrowserModule],
  exports: [BannerComponent]
})
export class BannerModule {}
