import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNavComponent } from './global-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { UxgBreadcrumbModule } from '@finastra/angular-components/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    UxgBreadcrumbModule
  ],
  declarations: [GlobalNavComponent, NavbarComponent, SidenavComponent],
  exports: [GlobalNavComponent, NavbarComponent, SidenavComponent]
})
export class GlobalNavModule {}
