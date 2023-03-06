/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './line-chart-styles.css';

/**
 *
 * @attr {Object} [xaxis] - Defines axis X and its properties
 * @attr {Object} [yaxis] - Defines axis Y and its properties
 * @attr {boolean} [show-toolbar=false] - Displays toolbar from the top right corner
 * @attr {Object} [stroke] - Defines stroke and its properties
 * @attr {string} [strokeCurve='straight'] - Defines curve type
 * @attr {Object} [tooltip] - Defines tooltip and its properties
 */
@customElement('fds-line-chart')
export class LineChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle];

  /**
   * Defines axis X and its properties
   */
  private _xaxis: ApexXAxis | undefined;
  @property({ attribute: false })
  public get xaxis(): any {
    return this._xaxis;
  }
  public set xaxis(value: ApexXAxis) {
    this._xaxis = value;
    this.options = { ...this.options, xaxis: value };
    this.refresh();
  }

  /**
   * Defines axis Y and its properties
   */
  private _yaxis: ApexYAxis | undefined;
  @property({ attribute: false })
  public get yaxis(): any {
    return this._yaxis;
  }
  public set yaxis(value: ApexYAxis) {
    this._yaxis = value;
    this.options = { ...this.options, yaxis: value };
    this.refresh();
  }

  /**
   * Display the toolbar/menu in the top right corner
   */
  private _showToolbar = false;
  @property({ type: Boolean, attribute: 'show-toolbar' })
  public get showToolbar(): boolean {
    return this._showToolbar;
  }
  public set showToolbar(value: boolean) {
    this._showToolbar = value;
    if (value) {
      this._defaultOptions.chart.toolbar.show = true;
    } else {
      this._defaultOptions.chart.toolbar.show = false;
    }
    this.refresh();
  }

  /**
   * Defines stroke and its properties
   */
  private _stroke: any;
  @property({ type: String, attribute: false })
  public get stroke(): any {
    return this._stroke;
  }
  public set stroke(value: any) {
    this._stroke = value;
    this.options = { ...this.options, stroke: value };
    this.refresh();
  }

  /**
   * In line charts, whether to draw smooth, straight or step lines
   * @attr {straight|smooth|stepline} [strokeCurve=bottom]
   */
  private _strokeCurve: 'straight' | 'smooth' | 'stepline' = 'straight';
  @property({ type: String, attribute: 'stroke-curve' })
  public get strokeCurve() {
    return this._strokeCurve;
  }
  public set strokeCurve(value: 'straight' | 'smooth' | 'stepline') {
    this._strokeCurve = value;
    if (value && value.length) {
      this._defaultOptions.stroke.curve = value;
    }
    this.refresh();
  }

  /**
   * Defines tooltip and its properties
   */
  private _tooltip: any;
  @property({ type: String, attribute: false })
  public get tooltip(): any {
    return this._tooltip;
  }
  public set tooltip(value: any) {
    this._tooltip = value;
    this.options = { ...this.options, tooltip: value };
    this.refresh();
  }

  _defaultOptions = {
    chart: {
      toolbar: {
        show: this.showToolbar
      }
    },
    stroke: {
      width: 3,
      curve: this.strokeCurve
    },
    tooltip: this.tooltip
  };

  constructor() {
    super();
    this.type = 'line';
  }
}
