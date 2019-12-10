import { Directive, Input } from '@angular/core';
import { ChartType, chartTypePlotly, ChartTypeConvertion } from '../chart.models';
import { Plotly } from 'angular-plotly.js/src/app/shared/plotly.interface';

@Directive({ selector: 'uxg-trace' })
export class Trace {
    @Input() dimension: Array<string | number>;
    @Input() dimensionName: string;
    @Input() measure: Array<string | number>;
    @Input() measureName: string;
    @Input() selectedPoints: Array<any>;
    @Input() type: ChartType;
    @Input() orientation: string;
    @Input() options: Object;

    getPlotlyTrace(): Partial<Plotly.Data> {
        const plotlyType = chartTypePlotly[this.type];
        if (plotlyType)
            return {
                dimensionName: this.dimensionName,
                x: this.dimension,
                y: this.measure,
                values: this.measure,
                labels: this.dimension,
                name: this.measureName,
                ...plotlyType ? plotlyType.trace : {},
                ...this.options ? this.options : {}
            }
        console.error("Chart type: " + this.type + " doesn't exist!");
        return undefined;
    }

    getPlotlyTypeLayout(): Partial<Plotly.Layout> {
        const plotlyType = chartTypePlotly[this.type];
        return plotlyType && plotlyType.layout ? plotlyType.layout : {};
    }
}