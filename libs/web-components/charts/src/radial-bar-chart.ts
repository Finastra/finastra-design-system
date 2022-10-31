/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './radial-bar-chart-styles.css';

/**
 *
 * @attr {Array} [labels=[]] - Labels correspond to value in data array
 * @attr {Array} [data=[]] - Data of the chart
 * @attr {String} [total-label=''] - Total label, visible only with multiple data
 * @attr {Boolean} [hide-labels=false] - Hide the labels and display only the value,
 * @cssprop [--fds-value-size = 2rem] - Label size
 * @cssprop [--fds-label-size = 0.75rem] - Label size
 */
@customElement('fds-radial-bar-chart')
export class RadialBarChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle]

  private _data: number[] = [];
  @property({ attribute: false })
  public get data(): number[] {
    return this._data;
  }
  public set data(value: number[]) {
    this._data = value;
    this.series = this._data;
    if (value) {
      this._defaultOptions.plotOptions.radialBar.dataLabels.total.show = value.length > 1;
    }
    this.refresh();
  }

  private _labels: string[] = [];
  @property({ attribute: false })
  public get labels(): string[] {
    return this._labels;
  }
  public set labels(value: string[]) {
    this._labels = value;
    this.options = { ...this.options, labels: value }
  }

  private _totalLabel: string = 'Total';
  @property({ type: String, attribute: 'total-label' })
  public get totalLabel(): string {
    return this._totalLabel;
  }
  public set totalLabel(value: string) {
    this._totalLabel = value;
    if (value && value.length) {
      this._defaultOptions.plotOptions.radialBar.dataLabels.total.label = value;
    }
    this.refresh();
  }

  private _hideLabels = false;
  @property({ type: Boolean, attribute: 'hide-labels' })
  public get hideLabels(): boolean {
    return this._hideLabels;
  }
  public set hideLabels(value: boolean) {
    this._hideLabels = value;

    if (value) {
      this._defaultOptions.plotOptions.radialBar.dataLabels.name.show = false;
      this._defaultOptions.plotOptions.radialBar.dataLabels.value.offsetY = 16;
    } else {
      this._defaultOptions.plotOptions.radialBar.dataLabels.name.show = true;
      this._defaultOptions.plotOptions.radialBar.dataLabels.value.offsetY = -16;
    }
    this.refresh();
  }

  _defaultOptions = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "var(--fds-surface, #FFFFFF)"
        },
        track: {
          background: 'var(--fds-outline, #0000001f)',
          margin: 4
        },
        dataLabels: {
          name: {
            show: true,
            offsetY: 24
          },
          value: {
            offsetY: -16
          },
          total : {
            show: false,
            label: 'Total'
          }
        }
      }
    }
  }

  constructor() {
    super();
    this.type = 'radialBar';
  }
}
