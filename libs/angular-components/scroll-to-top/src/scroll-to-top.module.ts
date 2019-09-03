import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent]
})
export class ScrollToTopModule {}
