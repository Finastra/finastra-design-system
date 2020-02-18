import { Component, OnInit } from '@angular/core';
import { nestedRoutes } from '../../nested-routes';

@Component({
  selector: 'ffdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nestedRoutes = nestedRoutes;
  constructor() {}

  ngOnInit() {}
}
