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
import { FilterGroupModule } from '@ffdc/uxg-angular-components/filter/filter-group';
import { FilterToggleModule } from '@ffdc/uxg-angular-components/filter/filter-toggle';
import { MultiselectTagsModule } from '@ffdc/uxg-angular-components/filter/multiselect-tags';
import { VectorMapModule } from '@ffdc/uxg-angular-components/vector-map';
import { ChartModule } from '@ffdc/uxg-angular-components/chart';
import { AvatarModule } from '@ffdc/uxg-angular-components/avatar';
import { ExpandableTableModule } from '@ffdc/uxg-angular-components/expandable-table';

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
import { PaletteModule } from '@ffdc/uxg-angular-components/core';
import { routes } from './routes';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';
import { GlobalNavModule } from '@ffdc/uxg-angular-components/global-nav';
import { GlobalNavDemoComponent } from './components/global-nav-demo/global-nav-demo.component';

import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { ExpandableTableDemoComponent } from './components/expandable-table-demo/expandable-table-demo.component';
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
    ChartModule,
    WizardModule,
    FilterGroupModule,
    FilterToggleModule,
    SkeletonTextModule,
    GlobalNavModule,
    ExpandableTableModule,
    MultiselectTagsModule,
    AvatarModule
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
    SkeletonDemoComponent,
    ChartDemoComponent,
    GlobalNavDemoComponent,
    AvatarDemoComponent,
    ExpandableTableDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
