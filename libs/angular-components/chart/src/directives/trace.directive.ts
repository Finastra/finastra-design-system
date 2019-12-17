import { Directive, Input } from '@angular/core';
import { ChartType, chartTypePlotly, ChartTypeConvertion } from '../chart.models';
import { Plotly } from 'angular-plotly.js/src/app/shared/plotly.interface';

@Directive({ selector: 'uxg-trace' })
export class Trace {
    @Input() dimension: Array<string | number>;
    @Input() dimensionName: string;
    @Input() measure: Array<string | number>;
    @Input() measureName: string;
    @Input() selectedPoints: Array<number>;
    @Input() type: ChartType;
    @Input() orientation: 'horizontal' | 'vertical';
    @Input() options: Object;

    constructor() {
        this.orientation = 'vertical';
    }

    getPlotlyTrace(): Partial<Plotly.Data> {
        const plotlyType = chartTypePlotly[this.type];
        if (plotlyType) {
            const trace = {
                dimensionName: this.dimensionName,
                x: this.orientation === 'vertical' ? this.dimension : this.measure,
                y: this.orientation === 'vertical' ? this.measure : this.dimension,
                labels: this.orientation === 'vertical' ? this.dimension : this.measure,
                values: this.orientation === 'vertical' ? this.measure : this.dimension,
                name: this.measureName,
                ...plotlyType ? plotlyType.trace : {},
                orientation: this.orientation === 'horizontal' ? 'h' : 'v',
                ...this.options ? this.options : {}
            }
            if (this.selectedPoints) {
                trace.selectedpoints = this.selectedPoints;
            }
            return trace;
        }
        console.error("Chart type: " + this.type + " doesn't exist!");
        return undefined;
    }

    getPlotlyTypeLayout(): Partial<Plotly.Layout> {
        const plotlyType = chartTypePlotly[this.type];
        return plotlyType && plotlyType.layout ? plotlyType.layout : {};
    }
}