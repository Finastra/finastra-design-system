import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'global-search', component: GlobalSearchDemoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }