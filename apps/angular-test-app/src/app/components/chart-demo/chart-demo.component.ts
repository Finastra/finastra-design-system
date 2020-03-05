import { Component } from '@angular/core';
import { LegendPosition, ChartType, ChartOrientation } from '@ffdc/uxg-angular-components/chart';

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
      type: ChartType.bar
    }
  ];

  traces2 = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar,
      orientation: ChartOrientation.horizontal
    },
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [75, 10, 90],
      measureName: 'Asset Values',
      type: ChartType.bar,
      orientation: ChartOrientation.horizontal
    },
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [75, 10, 90],
      measureName: 'Asset',
      type: ChartType.bar,
      orientation: ChartOrientation.horizontal
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

  onClick(event: Array<object>) {
    console.log('simple click: ', event);
  }

  onSelected(event: Array<object>) {
    console.log('simple click list items selected: ', event);
  }

  onDoubleClick(event: Array<object>) {
    console.log('double click: ', event);
  }
}
