import { Component } from '@angular/core';
import { LegendPosition, ChartType } from '@ffdc/uxg-angular-components/chart';

@Component({
  selector: 'ffdc-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss']
})
export class ChartDemoComponent {
  legendPosition = LegendPosition.horizontalBottomCenter;

  traces = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    },
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [75, 10, 90],
      measureName: 'Asset Values',
      type: ChartType.line
    }
  ];

  traces2 = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar,
      orientation: 'horizontal'
    },
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [75, 10, 90],
      measureName: 'Asset Values',
      type: ChartType.bar,
      orientation: 'horizontal'
    }
  ];

  traces3 = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.fullStackedArea
    },
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [75, 10, 90],
      measureName: 'Asset Values',
      type: ChartType.fullStackedArea
    }
  ];

  traces4 = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.pie
    }
  ];

  onClick(event) {
    console.log('simple click: ', event);
  }

  onDoubleClick(event) {
    console.log('double click: ', event);
  }
}
