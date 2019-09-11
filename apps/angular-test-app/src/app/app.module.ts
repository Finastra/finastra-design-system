import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';
import { RepeaterModule } from '@ffdc/uxg-angular-components/repeater';

import { RepeaterCardExampleComponent } from './components/repeater-demo/repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './components/repeater-demo/repeater-card-advanced-example/repeater-card-advanced-example.component';
@NgModule({
  declarations: [AppComponent, RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent],
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
    GlobalSearchModule,
    TableModule,
    RepeaterModule,
    MatMenuModule
  ],
  providers: [],
  exports: [RepeaterCardExampleComponent],
  entryComponents: [RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
