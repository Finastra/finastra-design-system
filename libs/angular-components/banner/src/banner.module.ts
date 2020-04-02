import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BannerComponent],
  imports: [MatTooltipModule, BrowserModule, BrowserAnimationsModule],
  exports: [BannerComponent]
})
export class BannerModule {}
