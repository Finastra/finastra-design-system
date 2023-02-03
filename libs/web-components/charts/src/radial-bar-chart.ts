/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './radial-bar-chart-styles.css';

/**
 *
 * @attr {Array} [labels=[]] - Labels correspond to value in data array
 * @attr {Array} [data=[]] - Data of the chart
 * @attr {string} [total-label=''] - Total label, visible only with multiple data
 * @attr {boolean} [hide-labels=false] - Hide the labels and display only the value
 * @attr {boolean} [dense=false] - Radial Chart in a smaller size
 * @attr {boolean} [extra-dense=false] - Radial Chart in an extra smaller size
 * @attr {boolean} [large=false] - Radial Chart in a larger size
 */
@customElement('fds-radial-bar-chart')
export class RadialBarChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle];

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
    this.options = { ...this.options, labels: value };
  }

  private _totalLabel = 'Total';
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
    if ((this as Element).getAttribute('dense') !== null || (this as Element).getAttribute('extra-dense') !== null) {
      this._defaultOptions.plotOptions.radialBar.dataLabels.name.show = false;
    } else {
      if (value) {
        this.setRadialBarDataLabels(false, 16);
      } else {
        this.setRadialBarDataLabels(true, -16);
      }
    }

    this.refresh();
  }

  private _dense = false;
  @property({ type: Boolean, attribute: 'dense' })
  public get dense(): boolean {
    return this._dense;
  }
  public set dense(value: boolean) {
    this.setDense(value, '263', 12);
    this._dense = value;
  }

  private _extraDense = false;
  @property({ type: Boolean, attribute: 'extra-dense' })
  public get extraDense(): boolean {
    return this._extraDense;
  }
  public set extraDense(value: boolean) {
    this.setDense(value, '163', 7);
    this._extraDense = value;
  }

  private _large = false;
  @property({ type: Boolean, attribute: 'large' })
  public get large(): boolean {
    return this._large;
  }
  public set large(value: boolean) {
    this.setLarge(value, '555px');
    this._large = value;
  }

  _defaultOptions = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
          background: 'var(--fds-surface, #FFFFFF)'
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
          total: {
            show: false,
            label: 'Total'
          }
        }
      }
    }
  };

  private resetToDefault() {
    (this as Element).setAttribute('height', '445px');
    (this as Element).setAttribute('width', '445px');
    if (this.hideLabels && (this as Element).getAttribute('hide-labels') == null) {
      this.hideLabels = false;
    }
  }

  private setDense(dense, size, offsetY) {
    if (dense) {
      this.hideLabels = true;
      (this as Element).setAttribute('height', size);
      (this as Element).setAttribute('width', size);
      this._defaultOptions.plotOptions.radialBar.dataLabels.value.offsetY = offsetY;
    } else {
      this.resetToDefault();
    }
  }

  private setLarge(large, size) {
    if (large) {
      (this as Element).setAttribute('height', size);
      (this as Element).setAttribute('width', size);
    } else {
      this.resetToDefault();
    }
  }

  private setRadialBarDataLabels(show, offsetY) {
    this._defaultOptions.plotOptions.radialBar.dataLabels.name.show = show;
    this._defaultOptions.plotOptions.radialBar.dataLabels.value.offsetY = offsetY;
  }

  protected updated(changedProperties) {
    if (!this.dense && !this.large && !this.extraDense) {
      this.resetToDefault();
    }
    super.updated(changedProperties);
  }

  constructor() {
    super();
    this.type = 'radialBar';
  }
}
