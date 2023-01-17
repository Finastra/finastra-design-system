/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './line-chart-styles.css';

@customElement('fds-line-chart')
export class LineChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle]

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
    this.options = { ...this.options, xaxis: value }
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
    this.options = { ...this.options, yaxis: value }
    this.refresh();
  }
  
  /**
   * Display the toolbar/menu in the top right corner
   */
  private _hideToolbar = true;
  @property({ type: Boolean, attribute: 'hide-toolbar' })
  public get hideToolbar(): boolean {
    return this._hideToolbar;
  }
  public set hideToolbar(value: boolean) {
    this._hideToolbar = value;
    if (value) {
      this._defaultOptions.chart.toolbar.show = false;
    } else {
      this._defaultOptions.chart.toolbar.show = true;
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
    this.options = { ...this.options, stroke: value }
    this.refresh();
  }
  
   /**
   * In line charts, whether to draw smooth, straight or step lines
   */
  private _strokeCurve: any = 'straight';
  @property({ type: String, attribute: 'stroke-curve' })
  public get strokeCurve() {
    return this._strokeCurve;
  }
  public set strokeCurve(value: any) {
    this._strokeCurve = value;
    if (value && value.length) {
      this._defaultOptions.stroke.curve = value;
    }
    this.refresh();
  }

  _defaultOptions = {
    chart: {
      toolbar: {
        show: this.hideToolbar
      },
    },
    stroke: {
      width: 3,
      curve: this.strokeCurve
    },
  }

  constructor() {
    super()
    this.type = 'line';
  }

}
