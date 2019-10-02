import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { WindowWrapper, getWindow } from './window.wrapper';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, BrowserAnimationsModule],
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent],
  providers: [{ provide: WindowWrapper, useFactory: getWindow }]
})
export class ScrollToTopModule {}
