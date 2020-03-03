import { Input, Component } from '@angular/core';
import { ChartType, CHART_PLOLTLY_TYPE, ChartOrientation } from '../chart.models';

@Component({
  selector: 'uxg-trace',
  template: ''
})
export class TraceComponent {
  @Input() dimension!: Array<string | number>;
  @Input() dimensionName?: string;
  @Input() measure!: Array<string | number>;
  @Input() measureName?: string;
  @Input() selectedPoints?: Array<number>;
  @Input() type: ChartType = ChartType.bar;
  @Input() orientation: ChartOrientation;
  @Input() options?: Object;

  constructor() {
    this.orientation = ChartOrientation.vertical;
  }

  getPlotlyTrace(): any {
    const plotlyType = CHART_PLOLTLY_TYPE[this.type];
    if (plotlyType) {
      const trace = {
        dimensionName: this.dimensionName,
        x: this.orientation === ChartOrientation.vertical ? this.dimension : this.measure,
        y: this.orientation === ChartOrientation.vertical ? this.measure : this.dimension,
        labels: this.orientation === ChartOrientation.vertical ? this.dimension : this.measure,
        values: this.orientation === ChartOrientation.vertical ? this.measure : this.dimension,
        name: this.measureName,
        ...(plotlyType ? plotlyType.trace : {}),
        orientation: this.orientation === ChartOrientation.horizontal ? 'h' : 'v',
        ...(this.options ? this.options : {})
      };
      if (this.selectedPoints) {
        trace.selectedpoints = Array.from(this.selectedPoints);
      }
      return trace;
    }
    console.error('Chart type: ' + this.type + " doesn't exist!");
    return {};
  }

  getPlotlyTypeLayout(): any {
    const plotlyType = CHART_PLOLTLY_TYPE[this.type];
    return plotlyType && plotlyType.layout ? plotlyType.layout : {};
  }
}
