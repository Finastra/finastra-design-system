import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopComponent } from './scroll-to-top.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, BrowserAnimationsModule],
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent]
})
export class ScrollToTopModule {}
