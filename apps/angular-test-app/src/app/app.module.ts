import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatListModule, MatSidenavModule, MatCardModule } from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    GlobalSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
