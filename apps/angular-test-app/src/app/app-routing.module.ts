import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatExpansionModule,
  MatRadioModule,
  MatMenuModule
} from '@angular/material';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';
import { RepeaterModule } from '@ffdc/uxg-angular-components/repeater';

import { routes } from './routes';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { HomeComponent } from './components/home/home.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldMatcherComponent } from './components/repeater-demo/field-matcher/field-matcher.component';
import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

export function hljsLanguages() {
  return [
    {name: 'javascript', func: javascript},
    {name: 'xml', func: xml}
  ];
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    GlobalSearchModule,
    TableModule,
    RepeaterModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    FlexLayoutModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
    
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent, RepeaterDemoComponent,FieldMatcherComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
