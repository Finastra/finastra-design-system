import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { BannerDemoComponent } from './components/banner-demo/banner-demo.component';
import { BreadcrumbDemoComponent } from './components/breadcrumb-demo/breadcrumb-demo.component';
import { ChangelogDemoComponent } from './components/changelog-demo/changelog-demo.component';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';
import { EntityMenuDemoComponent } from './components/entity-menu-demo/entity-menu-demo.component';
import { ExpandableTableDemoComponent } from './components/expandable-table-demo/expandable-table-demo.component';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { FieldMatcherComponent } from './components/repeater-demo/field-matcher/field-matcher.component';
import { RepeaterCardAdvancedExampleComponent } from './components/repeater-demo/repeater-card-advanced-example/repeater-card-advanced-example.component';
import { RepeaterCardChartExampleComponent } from './components/repeater-demo/repeater-card-chart-example/repeater-card-chart-example.component';
import { RepeaterCardExampleComponent } from './components/repeater-demo/repeater-card-example/repeater-card-example.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { SearchInputDemoComponent } from './components/search-input-demo/search-input-demo.component';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { ThemeBuilderComponent } from './components/theme-builder/theme-builder-demo.component';
import { ToasterDemoComponent } from './components/toaster-demo/toaster-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { UserProfileMenuDemoComponentComponent } from './components/user-profile-menu-demo/user-profile-menu-demo-component.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { MaterialModule } from './material.module';

import { AvatarModule } from '@finastra/angular-components/avatar';
import { BannerModule } from '@finastra/angular-components/banner';
import { AccountCardModule } from '@finastra/angular-components/cards/account-card';
import { ChartModule } from '@finastra/angular-components/chart';
import { PaletteModule } from '@finastra/angular-components/core';
import { EntityMenuModule } from '@finastra/angular-components/entity-menu';
import { ExpandableTableModule } from '@finastra/angular-components/expandable-table';
import { FilterGroupModule } from '@finastra/angular-components/filter/filter-group';
import { FilterTagsModule } from '@finastra/angular-components/filter/filter-tags';
import { FilterToggleModule } from '@finastra/angular-components/filter/filter-toggle';
import { FilterTreeModule } from '@finastra/angular-components/filter/filter-tree';
import { MultiselectTagsModule } from '@finastra/angular-components/filter/multiselect-tags';
import { GlobalNavModule } from '@finastra/angular-components/global-nav';
import { GlobalSearchModule } from '@finastra/angular-components/global-search';
import { PopoverModule } from '@finastra/angular-components/popover';
import { RepeaterModule } from '@finastra/angular-components/repeater';
import { ScrollToTopModule } from '@finastra/angular-components/scroll-to-top';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { UxgTableModule } from '@finastra/angular-components/table';
import { UxgUserProfileMenuModule } from '@finastra/angular-components/user-profile-menu';
import { VectorMapModule } from '@finastra/angular-components/vector-map';
import { WizardModule } from '@finastra/angular-components/wizard';
import { ColorSketchModule } from 'ngx-color/sketch';
import { AccountCardDemoComponent } from './components/account-card-demo/account-card-demo.component';
import { GlobalNavDemoComponent } from './components/global-nav-demo/global-nav-demo.component';

import { UxgBreadcrumbModule } from '@finastra/angular-components/breadcrumb';
import { UXGChangelogModule } from '@finastra/angular-components/changelog';
import { UxgSearchInputModule } from '@finastra/angular-components/search-input';
import { StatusStepperModule } from '@finastra/angular-components/status-stepper';
import { ToasterModule } from '@finastra/angular-components/toaster';
import { VideoThumbnailModule } from '@finastra/angular-components/video-thumbnail';
import { StatusStepsDemoComponent } from './components/status-steps-demo/status-steps-demo.component';
import { VideoDialogComponent, VideoThumbnailDemoComponent } from './components/video-thumbnail/video-thumbnail.component';

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
    ScrollToTopModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalSearchModule,
    RepeaterModule,
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
