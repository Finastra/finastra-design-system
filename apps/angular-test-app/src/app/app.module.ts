import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    // GlobalSearchModule,
    UxgTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
