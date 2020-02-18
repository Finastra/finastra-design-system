import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { nestedRoutes } from './nested-routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  ...([] as Routes).concat(...nestedRoutes.map(nestedRoute => nestedRoute.routes))
];
