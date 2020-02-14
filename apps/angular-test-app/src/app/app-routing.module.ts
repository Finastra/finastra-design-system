import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { RepeaterModule } from '@ffdc/uxg-angular-components/repeater';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollToTopModule } from '@ffdc/uxg-angular-components/scroll-to-top';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';
import { PopoverModule } from '@ffdc/uxg-angular-components/popover';
import { FilterTreeModule } from '@ffdc/uxg-angular-components/filter/filter-tree';
import { FilterTagsModule } from '@ffdc/uxg-angular-components/filter/filter-tags';
import { WizardModule } from '@ffdc/uxg-angular-components/wizard';

import { MaterialModule } from './material.module';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldMatcherComponent } from './components/repeater-demo/field-matcher/field-matcher.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';

import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { VectorMapModule } from '@ffdc/uxg-angular-components/vector-map';
import { PaletteModule } from '@ffdc/uxg-angular-components/core';
import { routes } from './routes';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    GlobalSearchModule,
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
    MatSlideToggleModule,
    MaterialModule,
    GlobalSearchModule,
    PaletteModule,
    ScrollToTopModule,
    PopoverModule,
    UxgTableModule,
    FilterTagsModule,
    FilterTreeModule,
    VectorMapModule,
    WizardModule,
    SkeletonTextModule
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    TableDemoComponent,
    PopoverDemoComponent,
    RepeaterDemoComponent,
    FieldMatcherComponent,
    FilterPanelDemoComponent,
    VectorMapDemoComponent,
    WizardDemoComponent,
    FoundationsDemoComponent,
    UiElementsDemoComponent,
    SkeletonDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
