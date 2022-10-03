/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
// import { styles } from './pie-chart-styles.css';

@customElement('fds-radial-bar-chart')
export class RadialBarChart extends ApexChartsWrapper {
    static styles = [apexchartsStyle]

    private _data: number[] = [];
    @property({ attribute: false })
    public get data(): number[] {
        return this._data;
    }
    public set data(value: number[]) {
        this._data = value;
        this.series = this._data;
    }

    private _labels: string[] = [];
    @property({ attribute: false })
    public get labels(): string[] {
        return this._labels;
    }
    public set labels(value: string[]) {
        this._labels = value;
        this.options = {...this.options, labels: value}
    }

    _defaultOptions = {
        plotOptions: {
        },
        states: {},
        chart: {
            events: {},
            selection: {}
        }
    }

    constructor() {
        super();
        this.type = 'radialBar';
    }
}
