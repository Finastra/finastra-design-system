import ApexCharts from 'apexcharts';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './apexcharts-styles.css';

export type ChartType =  'line'
| 'area'
| 'bar'
| 'histogram'
| 'pie'
| 'donut'
| 'radialBar'
| 'scatter'
| 'bubble'
| 'heatmap'
| 'candlestick'
| 'boxPlot'
| 'radar'
| 'polarArea'
| 'rangeBar'
| 'treemap'

export type COLOR = 'primary' | 'secondary' | 'dark' | 'light'

@customElement('fds-apexcharts')
export class ApexChartsWrapper extends LitElement {
  static styles = [styles];

  private _type: ChartType = 'line';
  @property({ type: String })
  public get type(): ChartType {
    return this._type;
  }
  public set type(value: ChartType) {
    this._type = value;
    this.refresh();
  }

  
  private _series: ApexAxisChartSeries | ApexNonAxisChartSeries = [];  
  @property({ attribute: false })
  public get series(): ApexAxisChartSeries | ApexNonAxisChartSeries {
    return this._series;
  }
  public set series(value: ApexAxisChartSeries | ApexNonAxisChartSeries) {
    this._series = value;
    if (!this.chart) {
      this.init();
    } else {
      this.chart.updateSeries(this.series);
    }
  }
  
  private _width: string | number = '100%';
  @property()
  public get width(): string | number {
    return this._width;
  }
  public set width(value: string | number) {
    this._width = value;
    this.refresh();
  }
  
  private _color: COLOR = 'light';
  @property({type: String})
  public get color(): COLOR {
    return this._color;
  }
  public set color(value: COLOR) {
    this._color = value;
    this.refresh();
  }

  private _height: string | number = 'auto';
  @property()
  public get height(): string | number {
    return this._height;
  }
  public set height(value: string | number) {
    this._height = value;
    this.refresh();
  }
  
  private _hideDataLabel = false;
  @property({type: Boolean, attribute: 'hide-data-label'})
  public get hideDataLabel(): boolean {
    return this._hideDataLabel;
  }
  public set hideDataLabel(value: boolean) {
    this._hideDataLabel = value;
    this.refresh();
  }
  

  private _legendPosition:  'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @property()
  public get legendPosition() {
    return this._legendPosition;
  }
  public set legendPosition(value: 'top' | 'right' | 'bottom' | 'left') {
    this._legendPosition = value;
    this.refresh();
  }

  private _legendHorizontalAlign:  'left' | 'center' | 'right' = 'center';
  @property()
  public get legendHorizontalAlign() {
    return this._legendHorizontalAlign;
  }
  public set legendHorizontalAlign(value: 'left' | 'center' | 'right') {
    this._legendHorizontalAlign = value;
    this.refresh();
  }
  

  private _options: ApexCharts.ApexOptions = {};
  
  @property({ attribute: false })
  public get options(): ApexCharts.ApexOptions {
    return this._options;
  }
  public set options(value: ApexCharts.ApexOptions) {
    this._options = value;
    if (!this.chart) {
      this.init();
    } else {
      this.chart.updateOptions(this.options);
    }
  }


  $el: HTMLElement | null = null
  chart: ApexCharts | null = null
  
  _defaultOptions: ApexCharts.ApexOptions = {}
  override disconnectedCallback() {
    super.disconnectedCallback()
    if (this.chart) {
      this.chart.destroy()
    }
  }

  protected firstUpdated(): void {
    this.init()
  }

  render() {
    return html`<div>${this.createChartEl()}</div>`;
  }

  createChartEl() {
    this.$el = document.createElement('div');
    this.$el.classList.add(`fds-${this.type}-chart`)
    return this.$el
  }

  init() {
    if (!this.$el) return;
    const newOptions: ApexCharts.ApexOptions = this.extend(this._defaultOptions, {
      chart: {
        type: this.type || this.options.chart?.type || 'line',
        height: this.height,
        width: this.width,
        events: {}
      },
      tooltip: {
        fillSeriesColor: false,
        marker: {
          show: false,
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
        },
      },
      dataLabels: {
        enabled: !this.hideDataLabel,
        style: {
            fontSize: '12px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            colors: this.getDataLabelColor(),
        },
        background: {
         enabled: false,
         dropShadow: {
           enabled: false
         }
        },
        dropShadow: {
          enabled: false
        }
      },
      legend: {
        position: this.legendPosition,
        horizontalAlign: this.legendHorizontalAlign,
        itemMargin: {
          horizontal: 8,
          vertical: 4
        },
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 300,
      },
      colors: this.getColor(),
      series: this.series
    })  
    const config = this.extend(this.options, newOptions);
    this.chart = new ApexCharts(this.$el, config);
    return this.chart.render();
  }
  
  refresh() {
    if (this.chart) {
      this.chart.destroy()
    }
    return this.init();
  }
    
  getDataLabelColor(): string[] {
    switch (this.color) {
      case 'dark':
        return ['#000000', '#000000', '#000000', '#000000', '#000000', '#FFFFFF']
      case 'light':
        return ['#FFFFFF', '#000000', '#000000', '#000000', '#000000', '#000000']
      case 'primary':
        return ['#000000', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
      case 'secondary':
        return ['#000000', '#000000', '#000000', '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
      default:
        return []
    }
  }
  
  getColor(): string[] {
    switch (this.color) {
      case 'dark':
        return ['#8A72E0', '#F470B2', '#F1A423', '#FFDD22', '#97D9E6', '#505050']
      case 'light':
        return ['#694ED6', '#F04E98', '#ED8B00', '#FFD100', '#7FCDDE', '#E5E5E5']
      case 'primary':
        return ['#EDDDFF', '#CCB9F5', '#AB96EB', '#8A72E0', '#694ED6', '#5945B8', '#4A3B99', '#3A327B', '#2A285C']
      case 'secondary':
        return ['#FFD4FF', '#FBB3E5', '#F891CC', '#F470B2', '#F04E98', '#CA3F7F', '#A43067', '#7D214E', '#571235']
      default:
        return []
    }
  }

  extend(target: ApexCharts.ApexOptions, source: ApexCharts.ApexOptions) {
    const output: ApexCharts.ApexOptions = {...target};
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, {
              [key]: source[key]
            });
          } else {
            output[key] = this.extend(target[key], source[key]);
          }
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      });
    }
    return output;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isObject(item: any) {
    return (
      item && typeof item === "object" && !Array.isArray(item) && item != null
    );
  }
}

