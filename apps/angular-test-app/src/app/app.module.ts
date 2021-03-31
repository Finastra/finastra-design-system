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
import { ThemeBuilderComponent } from './components/theme-builder/theme-builder-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { UserProfileMenuDemoComponentComponent } from './components/user-profile-menu-demo/user-profile-menu-demo-component.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { BannerDemoComponent } from './components/banner-demo/banner-demo.component';
import { EntityMenuDemoComponent } from './components/entity-menu-demo/entity-menu-demo.component';
import { ChangelogDemoComponent } from './components/changelog-demo/changelog-demo.component';
import { SearchInputDemoComponent } from './components/search-input-demo/search-input-demo.component';
import { BreadcrumbDemoComponent } from './components/breadcrumb-demo/breadcrumb-demo.component';
import { ToasterDemoComponent } from './components/toaster-demo/toaster-demo.component';

import { GlobalSearchModule } from '@finastra/angular-components/global-search';
import { RepeaterModule } from '@finastra/angular-components/repeater';
import { ScrollToTopModule } from '@finastra/angular-components/scroll-to-top';
import { UxgTableModule } from '@finastra/angular-components/table';
import { PopoverModule } from '@finastra/angular-components/popover';
import { FilterTreeModule } from '@finastra/angular-components/filter/filter-tree';
import { FilterTagsModule } from '@finastra/angular-components/filter/filter-tags';
import { WizardModule } from '@finastra/angular-components/wizard';
import { FilterGroupModule } from '@finastra/angular-components/filter/filter-group';
import { FilterToggleModule } from '@finastra/angular-components/filter/filter-toggle';
import { MultiselectTagsModule } from '@finastra/angular-components/filter/multiselect-tags';
import { VectorMapModule } from '@finastra/angular-components/vector-map';
import { ChartModule } from '@finastra/angular-components/chart';
import { AvatarModule } from '@finastra/angular-components/avatar';
import { ExpandableTableModule } from '@finastra/angular-components/expandable-table';
import { PaletteModule } from '@finastra/angular-components/core';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { UxgUserProfileMenuModule } from '@finastra/angular-components/user-profile-menu';
import { BannerModule } from '@finastra/angular-components/banner';
import { GlobalNavModule } from '@finastra/angular-components/global-nav';
import { GlobalNavDemoComponent } from './components/global-nav-demo/global-nav-demo.component';
import { AccountCardDemoComponent } from './components/account-card-demo/account-card-demo.component';
import { AccountCardModule } from '@finastra/angular-components/cards/account-card';
import { EntityMenuModule } from '@finastra/angular-components/entity-menu';
import { ColorSketchModule } from 'ngx-color/sketch';

import { UxgSearchInputModule } from '@finastra/angular-components/search-input';
import { UXGChangelogModule } from '@finastra/angular-components/changelog';
import { UxgBreadcrumbModule } from '@finastra/angular-components/breadcrumb';
import { ToasterModule } from '@finastra/angular-components/toaster';
import { VideoThumbnailModule } from '@finastra/angular-components/video-thumbnail';
import {
  VideoThumbnailDemoComponent,
  VideoDialogComponent
} from './components/video-thumbnail/video-thumbnail.component';
import { StatusStepsDemoComponent } from './components/status-steps-demo/status-steps-demo.component';
import { StatusStepperModule } from '@finastra/angular-components/status-stepper';

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
    ThemeBuilderComponent,
    UiElementsDemoComponent,
    UserProfileMenuDemoComponentComponent,
    VectorMapDemoComponent,
    WizardDemoComponent,
    AppComponent,
    BannerDemoComponent,
    GlobalNavDemoComponent,
    AccountCardDemoComponent,
    EntityMenuDemoComponent,
    SearchInputDemoComponent,
    ChangelogDemoComponent,
    BreadcrumbDemoComponent,
    ToasterDemoComponent,
    VideoThumbnailDemoComponent,
    VideoDialogComponent,
    StatusStepsDemoComponent
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
    EntityMenuModule,
    ColorSketchModule,
    AccountCardModule,
    EntityMenuModule,
    UxgSearchInputModule,
    UXGChangelogModule,
    UxgBreadcrumbModule,
    ToasterModule,
    VideoThumbnailModule,
    StatusStepperModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
