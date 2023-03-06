/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './pie-chart-styles.css';

@customElement('fds-pie-chart')
export class PieChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle];

  private _disableSelection = false;
  @property({ type: Boolean, attribute: 'disable-selection' })
  public get disableSelection() {
    return this._disableSelection;
  }
  public set disableSelection(value) {
    this._disableSelection = value;
    if (value) {
      this._defaultOptions.plotOptions.pie.expandOnClick = false;
    } else {
      this._defaultOptions.plotOptions.pie.expandOnClick = true;
    }
    this.refresh();
  }

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
    this.options = { ...this.options, labels: value };
  }

  _defaultOptions = {
    plotOptions: {
      pie: {
        expandOnClick: true
      }
    },
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    chart: {
      events: {
        click: () => this.toggleSelected()
      },
      selection: {
        enabled: false
      }
    }
  };

  constructor() {
    super();
    this.type = 'pie';
  }

  toggleSelected() {
    if (this.disableSelection) return;
    setTimeout(() => {
      if (!this.$el) return;
      const series = this.$el.querySelectorAll('[class*="apexcharts-pie-slice-"]');
      let selected = false;
      for (const item of series) {
        selected = item.getAttribute('selected') == 'true' ? true : false;
        if (selected) break;
      }

      if (selected) {
        this.$el.classList.add('selected');
      } else {
        this.$el.classList.remove('selected');
      }
    }, 0);
  }
}
