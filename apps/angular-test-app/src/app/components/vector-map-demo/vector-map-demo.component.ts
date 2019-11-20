import { Component } from '@angular/core';
import { VectorMapDataSource } from '@ffdc/uxg-angular-components/vector-map';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.component.html',
  styleUrls: ['./vector-map-demo.component.scss']
})
export class VectorMapDemoComponent {
  viewMapDataSource: VectorMapDataSource = {
    data: {
      view1: [
        { name: 'Greenland', value: 2300 },
        { name: 'Canada', value: 2300 },
        { name: 'United States', value: 1610 },
        { name: 'Mexico', value: 1000 },
        { name: 'Russia', value: 5000 }
      ],
      view2: [
        { name: 'Greenland', value: 300 },
        { name: 'Canada', value: 300 },
        { name: 'United States', value: 5610 },
        { name: 'Mexico', value: 1000 },
        { name: 'Russia', value: 500 }
      ]
    },
    views: [
      {
        id: 'view1',
        text: 'View 1'
      },
      {
        id: 'view2',
        text: 'view 2'
      }
    ]
  };

  simpleMapDataSource: VectorMapDataSource = [
    { name: 'Greenland', value: 300 },
    { name: 'Canada', value: 300 },
    { name: 'United States', value: 5610 },
    { name: 'Mexico', value: 1000 },
    { name: 'Russia', value: 500 },
    { name: 'Singapore', value: 6000 }
  ];
}
