import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RepeaterCardExampleComponent } from './components/repeater-demo/repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './components/repeater-demo/repeater-card-advanced-example/repeater-card-advanced-example.component';
import { RepeaterCardChartExampleComponent } from './components/repeater-demo/repeater-card-chart-example/repeater-card-chart-example.component';
import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';
import { ExpandableTableDemoComponent } from './components/expandable-table-demo/expandable-table-demo.component';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { FieldMatcherComponent } from './components/repeater-demo/field-matcher/field-matcher.component';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { UserProfileMenuDemoComponentComponent } from './components/user-profile-menu-demo/user-profile-menu-demo-component.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { BannerDemoComponent } from './components/banner-demo/banner-demo.component';
import { EntityMenuDemoComponent } from './components/entity-menu-demo/entity-menu-demo.component';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { RepeaterModule } from '@ffdc/uxg-angular-components/repeater';
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
import { PaletteModule } from '@ffdc/uxg-angular-components/core';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';
import { UxgUserProfileMenuModule } from '@ffdc/uxg-angular-components/user-profile-menu';
import { BannerModule } from '@ffdc/uxg-angular-components/banner';
import { GlobalNavModule } from '@ffdc/uxg-angular-components/global-nav';
import { GlobalNavDemoComponent } from './components/global-nav-demo/global-nav-demo.component';
import { AccountCardDemoComponent } from './components/account-card-demo/account-card-demo.component';
import { AccountCardModule } from '@ffdc/uxg-angular-components/cards/account-card';
import { EntityMenuModule } from '@ffdc/uxg-angular-components/entity-menu';

@NgModule({
  declarations: [
    AvatarDemoComponent,
    ChartDemoComponent,
    ExpandableTableDemoComponent,
    FilterPanelDemoComponent,
    FoundationsDemoComponent,
    GlobalSearchDemoComponent,
    HomeComponent,
    PopoverDemoComponent,
    RepeaterDemoComponent,
    FieldMatcherComponent,
    RepeaterCardAdvancedExampleComponent,
    RepeaterCardChartExampleComponent,
    RepeaterCardExampleComponent,
    SkeletonDemoComponent,
    TableDemoComponent,
    UiElementsDemoComponent,
    UserProfileMenuDemoComponentComponent,
    VectorMapDemoComponent,
    WizardDemoComponent,
    AppComponent,
    BannerDemoComponent,
    GlobalNavDemoComponent,
    AccountCardDemoComponent,
    EntityMenuDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ScrollToTopModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalSearchModule,
    RepeaterModule,
    FlexLayoutModule,
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
    ExpandableTableModule,
    MultiselectTagsModule,
    AvatarModule,
    UxgUserProfileMenuModule,
    BannerModule,
    GlobalNavModule,
    AccountCardModule,
    EntityMenuModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
