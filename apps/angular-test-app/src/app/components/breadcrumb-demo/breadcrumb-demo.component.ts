import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from '@ffdc/uxg-angular-components/breadcrumb';

@Component({
  selector: 'ffdc-breadcrumb-demo',
  templateUrl: './breadcrumb-demo.component.html',
  styleUrls: ['./breadcrumb-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbDemoComponent implements OnInit {
  defaultBreadcrumbs: Breadcrumb[] = [
    {
      label: 'Design System',
      url: '/'
    },
    {
      label: 'Foundations',
      url: '/foundations'
    },
    {
      label: 'Icons',
      url: '/foundations',
      items: [
        {
          label: 'Color',
          url: '/foundations',
          icon: 'opacity'
        },
        {
          label: 'Icons',
          url: '/foundations',
          icon: 'gesture'
        },
        {
          label: 'Logo',
          url: '/foundations',
          icon: 'scatter_plot'
        },
        {
          label: 'Spacings',
          url: '/foundations',
          icon: 'format_align_center'
        },
        {
          label: 'Typography',
          url: '/foundations',
          icon: 'format_size'
        }
      ]
    }
  ];

  defaultBreadcrumbsWithoutMenu: Breadcrumb[] = [
    {
      label: 'Design System',
      url: '/',
      itemClass: 'uxg-h6'
    },
    {
      label: 'Foundations',
      url: '/foundations'
    },
    {
      label: 'Icons',
      url: '/foundations'
    }
  ];

  onlyOneItem: Breadcrumb[] = [
    {
      label: 'Design System',
      url: '/'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
