/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './radial-bar-chart-styles.css';

/**
 *
 * @attr {Array} [labels=[]] - Labels correspond to value in data array
 * @attr {Array} [data=[]] - Data of the chart
 */
@customElement('fds-radial-bar-chart')
export class RadialBarChart extends ApexChartsWrapper {
    static styles = [styles,apexchartsStyle]

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
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%"
          },
          track: {
            background: 'var(--fds-on-surface-disabled, #0000004a)',
            opacity: 0.2
          },
          dataLabels: {
            name: {
              offsetY: 32,
            },
            value: {
              offsetY: -12,
              formatter: function (val) {
                return val;
              }
            }
          }
        }
      },
        states: {},
        chart: {}
    }

    constructor() {
        super();
        this.type = 'radialBar';
    }
}
