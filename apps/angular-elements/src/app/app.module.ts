import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TableComponent } from '@ffdc/uxg-angular-components/table';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [ AppComponent ],
  entryComponents: [ TableComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

    const customUxgTable = createCustomElement(TableComponent, { injector });
    customElements.define('custom-table', customUxgTable);
  }
  ngDoBootstrap() {

  }
}
