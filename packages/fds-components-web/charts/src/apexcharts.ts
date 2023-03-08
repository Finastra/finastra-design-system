import ApexCharts from 'apexcharts';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './apexcharts-styles.css';

export type ChartType =
  | 'line'
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
  | 'treemap';

export type COLOR =
  | 'semantic-1'
  | 'semantic-2'
  | 'semantic-3'
  | 'categorical'
  | 'focus-1'
  | 'focus-2'
  | 'focus-1-angular'
  | 'focus-2-angular'
  | 'sequential-1'
  | 'sequential-2';
export interface ChartTheme {
  strokeColor: string;
  semanticPalette1: string;
  semanticPalette2: string;
  semanticPalette3: string;
  categoricalPalette: string[];
  categoricalLabelColor: string[];
  focus1: {
    start: string;
    end: string;
    neutral: string;
  };
  focus2: {
    start: string;
    end: string;
    neutral: string;
  };
  focus1Angular: {
    start: string;
    end: string;
    middle1: string;
    middle2: string;
    neutral: string;
  };
  focus2Angular: {
    start: string;
    end: string;
    middle1: string;
    middle2: string;
    neutral: string;
  };
  sequential1: string[];
  sequential1LabelColor: string[];
  sequential2: string[];
  sequential2LabelColor: string[];
}

/**
 * @attr {boolean} [hide-data-label=false] - Hide labels
 * @attr {string} [height=100%] - Height of the chart
 * @attr {string} [width=100%] - Width of the chart
 * @attr {left|center|right} [legendHorizontalAlign=center] - Define the horizontal alignment of legend
 * @attr {top|right|bottom|left} [legendPosition=bottom] - Define the position of the legend
 * @attr {semantic-1|semantic-2|semantic-3|categorical|focus-1|focus-2|focus-1-angular|focus-2-angular |sequential-1|sequential-2} [color=categorical] - Define palette used by the chart
 */
@customElement('fds-apexcharts')
export class ApexChartsWrapper extends LitElement {
  static styles = [styles];

  private _type: ChartType = 'line';
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

  private _color: COLOR = 'categorical';
  @property({ type: String })
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
  @property({ type: Boolean, attribute: 'hide-data-label' })
  public get hideDataLabel(): boolean {
    return this._hideDataLabel;
  }
  public set hideDataLabel(value: boolean) {
    this._hideDataLabel = value;
    this.refresh();
  }

  private _legendPosition: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @property()
  public get legendPosition() {
    return this._legendPosition;
  }
  public set legendPosition(value: 'top' | 'right' | 'bottom' | 'left') {
    this._legendPosition = value;
    this.refresh();
  }

  private _legendHorizontalAlign: 'left' | 'center' | 'right' = 'center';
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

  private defaultTheme: ChartTheme = {
    strokeColor: '#FFFFFF',
    semanticPalette1: '#008744',
    semanticPalette2: '#D60040',
    semanticPalette3: '#FF600A',
    categoricalPalette: ['#694ED6', '#F04E98', '#ED8B00', '#FFD100', '#7FCDDE', '#E5E5E5'],
    categoricalLabelColor: ['#FFFFFF', '#000000', '#000000', '#000000', '#000000', '#000000'],
    focus1: {
      start: '#1379C4',
      end: '#694ED6',
      neutral: '#E5E5E5'
    },
    focus2: {
      start: '#C34DD5',
      end: '#F04E98',
      neutral: '#E5E5E5'
    },
    focus1Angular: {
      start: '#1379C4',
      end: '#694ED6',
      middle1: '#694ED6',
      middle2: '#1379C4',
      neutral: '#E5E5E5'
    },
    focus2Angular: {
      start: '#C34DD5',
      end: '#F04E98',
      middle1: '#F04E98',
      middle2: '#C34DD5',
      neutral: '#E5E5E5'
    },
    sequential1: ['#2A285C', '#3A327B', '#4A3B99', '#5945B8', '#694ED6', '#8A72E0', '#AB96EB', '#CCB9F5', '#EDDDFF'],
    sequential1LabelColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#000000'],
    sequential2: ['#571235', '#7D214E', '#A43067', '#CA3F7F', '#F04E98', '#F470B2', '#F891CC', '#FBB3E5', '#FFD4FF'],
    sequential2LabelColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#000000', '#000000', '#000000']
  };

  private _chartTheme = this.defaultTheme;
  public get chartTheme(): ChartTheme {
    return this._chartTheme;
  }
  public set chartTheme(value: ChartTheme) {
    this._chartTheme = value;
  }

  $el: HTMLElement | null = null;
  chart: ApexCharts | null = null;

  _defaultOptions: ApexCharts.ApexOptions = {};
  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.chart) {
      this.chart.destroy();
    }
  }

  override connectedCallback() {
    super.connectedCallback();

    this.loadChartThemeFromCssVariables();
  }

  protected firstUpdated(): void {
    this.init();
  }

  render() {
    return html`<div>${this.createChartEl()}</div>`;
  }

  createChartEl() {
    this.$el = document.createElement('div');
    this.$el.classList.add(`fds-${this.type}-chart`);
    return this.$el;
  }

  loadChartThemeFromCssVariables() {
    const styles = getComputedStyle(this);
    const cssChartTheme: Partial<ChartTheme> = {};
    const strokeColor = styles.getPropertyValue('--fds-surface');
    const semanticPalette1 = styles.getPropertyValue('--fds-chart-semantic-palette1');
    const semanticPalette2 = styles.getPropertyValue('--fds-chart-semantic-palette2');
    const semanticPalette3 = styles.getPropertyValue('--fds-chart-semantic-palette3');
    const categoricalPalette = styles.getPropertyValue('--fds-chart-categorical-palette');
    const focus1Palette = styles.getPropertyValue('--fds-chart-focus1-palette');
    const focus2Palette = styles.getPropertyValue('--fds-chart-focus2-palette');
    const focus1AngularPalette = styles.getPropertyValue('--fds-chart-focus1-angular-palette');
    const focus2AngularPalette = styles.getPropertyValue('--fds-chart-focus2-angular-palette');
    const sequential1 = styles.getPropertyValue('--fds-chart-sequential-1');
    const sequential2 = styles.getPropertyValue('--fds-chart-sequential-2');
    const categoricalLabelColor = styles.getPropertyValue('--fds-chart-categorical-label-color');

    if (semanticPalette1) {
      cssChartTheme.semanticPalette1 = semanticPalette1.trim();
    }
    if (semanticPalette2) {
      cssChartTheme.semanticPalette2 = semanticPalette2.trim();
    }
    if (semanticPalette3) {
      cssChartTheme.semanticPalette3 = semanticPalette3.trim();
    }
    if (categoricalPalette) {
      cssChartTheme.categoricalPalette = categoricalPalette.trim().split(',');
    }
    if (focus1Palette) {
      cssChartTheme.focus1 = {
        start: focus1Palette.trim().split(',')[0],
        end: focus1Palette.trim().split(',')[1],
        neutral: focus1Palette.trim().split(',')[2]
      };
    }
    if (focus2Palette) {
      cssChartTheme.focus2 = {
        start: focus2Palette.trim().split(',')[0],
        end: focus2Palette.trim().split(',')[1],
        neutral: focus2Palette.trim().split(',')[2]
      };
    }

    if (focus1AngularPalette) {
      cssChartTheme.focus1Angular = {
        start: focus1AngularPalette.trim().split(',')[0],
        end: focus1AngularPalette.trim().split(',')[1],
        middle1: focus1AngularPalette.trim().split(',')[2],
        middle2: focus1AngularPalette.trim().split(',')[3],
        neutral: focus1AngularPalette.trim().split(',')[4]
      };
    }

    if (focus2AngularPalette) {
      cssChartTheme.focus2Angular = {
        start: focus2AngularPalette.trim().split(',')[0],
        end: focus2AngularPalette.trim().split(',')[1],
        middle1: focus2AngularPalette.trim().split(',')[2],
        middle2: focus2AngularPalette.trim().split(',')[3],
        neutral: focus2AngularPalette.trim().split(',')[4]
      };
    }

    if (sequential1) {
      cssChartTheme.sequential1 = sequential1.trim().split(',');
    }
    if (sequential2) {
      cssChartTheme.sequential2 = sequential2.trim().split(',');
    }

    if (categoricalLabelColor) {
      cssChartTheme.categoricalLabelColor = categoricalLabelColor.trim().split(',');
    }

    if (strokeColor) {
      cssChartTheme.strokeColor = strokeColor.trim();
    }
    this.chartTheme = this.extend(this.defaultTheme, cssChartTheme);
  }

  init() {
    if (!this.$el) return;
    this.loadChartThemeFromCssVariables();
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
          show: true
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif'
        }
      },
      dataLabels: {
        enabled: !this.hideDataLabel,
        offsetY: 10,
        style: {
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 300,
          colors: this.getDataLabelColor()
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
        fontWeight: 300
      },
      ...this.getColor(),
      ...this.getStrokeColor(),
      series: this.series
    });

    const config = this.extend(this.options, newOptions);
    this.chart = new ApexCharts(this.$el, config);
    this.initWatchers();
    return this.chart.render();
  }

  initWatchers() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.refresh();
    });
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      this.refresh();
    });
  }

  refresh() {
    if (this.chart) {
      this.chart.destroy();
    }
    return this.init();
  }

  getStrokeColor() {
    if (this.type === 'line') {
      return {
        stroke: {
          color: this.chartTheme.categoricalPalette
        }
      };
    } else {
      if (this.options.stroke && this.options.stroke.colors) {
        return { stroke: { colors: [...this.options.stroke.colors] } };
      } else
        return {
          stroke: {
            colors: [this.chartTheme.strokeColor]
          }
        };
    }
  }

  getDataLabelColor(): string[] {
    switch (this.color) {
      case 'sequential-1':
        return this.chartTheme.sequential1LabelColor;
      case 'sequential-2':
        return this.chartTheme.sequential2LabelColor;
    }
    return this.chartTheme.categoricalLabelColor;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getColor(): any {
    switch (this.color) {
      case 'semantic-1':
        return {
          theme: {
            monochrome: {
              enabled: true,
              color: this.chartTheme.semanticPalette1,
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          }
        };
      case 'semantic-2':
        return {
          theme: {
            monochrome: {
              enabled: true,
              color: this.chartTheme.semanticPalette2,
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          }
        };
      case 'semantic-3':
        return {
          theme: {
            monochrome: {
              enabled: true,
              color: this.chartTheme.semanticPalette3,
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          }
        };
      case 'categorical':
        return {
          colors: this.chartTheme.categoricalPalette
        };
      case 'focus-1':
        return {
          colors: [this.chartTheme.focus1.start, this.chartTheme.focus1.neutral],
          fill: {
            type: ['gradient', 'solid'],
            gradient: {
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.7,
              opacityTo: 0.9,
              shade: 'light',
              colorStops: [
                {
                  offset: 0,
                  color: this.chartTheme.focus1.start
                },
                {
                  offset: 100,
                  color: this.chartTheme.focus1.end
                }
              ]
            },
            pattern: {
              style: 'circles'
            }
          }
        };
      case 'focus-2':
        return {
          colors: [this.chartTheme.focus2.start, this.chartTheme.focus2.neutral],
          fill: {
            type: ['gradient', 'solid'],
            gradient: {
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.7,
              opacityTo: 0.9,
              shade: 'light',
              colorStops: [
                {
                  offset: 0,
                  color: this.chartTheme.focus2.start
                },
                {
                  offset: 100,
                  color: this.chartTheme.focus2.end
                }
              ]
            },
            pattern: {
              style: 'circles'
            }
          }
        };

      case 'focus-1-angular':
        return {
          colors: [this.chartTheme.focus1Angular.start, this.chartTheme.focus1Angular.neutral],
          fill: {
            type: ['gradient', 'solid'],
            gradient: {
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.7,
              opacityTo: 0.9,
              shade: 'light',
              colorStops: [
                {
                  offset: 0,
                  color: this.chartTheme.focus1Angular.start
                },
                {
                  offset: 25,
                  color: this.chartTheme.focus1Angular.middle1
                },
                {
                  offset: 50,
                  color: this.chartTheme.focus1Angular.middle2
                },
                {
                  offset: 100,
                  color: this.chartTheme.focus1Angular.end
                }
              ]
            },
            pattern: {
              style: 'circles'
            }
          }
        };

      case 'focus-2-angular':
        return {
          colors: [this.chartTheme.focus2Angular.start, this.chartTheme.focus2Angular.neutral],
          fill: {
            type: ['gradient', 'solid'],
            gradient: {
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.7,
              opacityTo: 0.9,
              shade: 'light',
              colorStops: [
                {
                  offset: 0,
                  color: this.chartTheme.focus2Angular.start
                },
                {
                  offset: 25,
                  color: this.chartTheme.focus2Angular.middle1
                },
                {
                  offset: 50,
                  color: this.chartTheme.focus2Angular.middle2
                },
                {
                  offset: 100,
                  color: this.chartTheme.focus2Angular.end
                }
              ]
            },
            pattern: {
              style: 'circles'
            }
          }
        };
      case 'sequential-1':
        return {
          colors: this.chartTheme.sequential1
        };
      case 'sequential-2':
        return {
          colors: this.chartTheme.sequential2
        };
    }
  }

  extend<T>(target: T, source: Partial<T>) {
    const output: T = { ...target };
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
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
    return item && typeof item === 'object' && !Array.isArray(item) && item != null;
  }
}
