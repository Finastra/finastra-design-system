import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './bar-chart-styles.css';

@customElement('fds-bar-chart')
export class BarChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle];

  @property({ attribute: false })
  public set xGrid(xGrid: boolean) {
    if (this.options) {
      this.options = {
        ...this.options,
        grid: {
          ...this.options.grid,
          xaxis: {
            lines: {
              show: xGrid
            }
          }
        }
      };
    }
  }

  @property({ attribute: false })
  public set yGrid(yGrid: boolean) {
    if (this.options) {
      this.options = {
        ...this.options,
        grid: {
          ...this.options.grid,
          yaxis: {
            lines: {
              show: yGrid
            }
          }
        }
      };
    }
  }

  @property({ attribute: false })
  public set barTitle(title: string) {
    if (this.options && this.options.title) {
      this.options = {
        ...this.options,
        title: {
          ...this.options.title,
          text: title
        }
      };
    }
    this.refresh();
  }

  @property({ attribute: false })
  public set legend(legend: boolean) {
    legend;
    const default_legend = {
      show: true,
      offsetX: 100,
      offsetY: -30,
      inverseOrder: false,
      markers: {
        width: 12,
        height: 12,
        radius: 12
      }
    };
    this.options.legend = { ...this.options.legend, ...default_legend };
    this.refresh();
  }

  @property({ attribute: false })
  public set toolbar(toolbar: boolean) {
    if (this.options && this.options.chart && this.options.chart.toolbar) {
      this.options.chart.toolbar.show = toolbar;
    }
    this.refresh();
  }

  @property({ attribute: false })
  public set stroke(stroke: boolean) {
    if (this.options && this.options.stroke) {
      this.options.stroke.show = stroke;
    }
    this.refresh();
  }

  @property({ attribute: false })
  public set stacked(value: boolean) {
    if (this.options && this.options.chart) {
      this.options.chart.stacked = value;
    }
    this.refresh();
  }

  private _categories: [] = [];
  @property({ attribute: false })
  public get categories(): [] {
    return this._categories;
  }
  public set categories(values) {
    this._categories = values;
    if (this.options && this.options.xaxis) {
      this.options.xaxis.categories = this._categories;
    }
    this.refresh();
  }

  private _horizontal: boolean = false;
  @property({ attribute: false })
  public get horizontal(): boolean {
    return this._horizontal;
  }
  public set horizontal(value: boolean) {
    console.log('horizontal=' + value);

    this._horizontal = value;
    if (this.options && this.options.plotOptions && this.options.plotOptions.bar) {
      this.options.plotOptions.bar.horizontal = this._horizontal;
    }
    this.refresh();
  }

  constructor() {
    super();
    this.options = {
      ...this.options,
      chart: {
        stacked: false,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 4
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          barHeight: '40%',
          dataLabels: {
            position: 'top', // top, center, bottom
            hideOverflowingLabels: true
          }
        }
      },
      legend: {
        offsetX: 100,
        offsetY: -30,
        markers: {
          width: 12,
          height: 12,
          radius: 12
        }
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },

      colors: ['#43ad7f7f'],

      tooltip: {
        enabled: true,
        followCursor: true,
        intersect: false,
        shared: true
      },

      xaxis: {
        categories: [],
        position: 'bottom',
        labels: {
          show: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            colors: '#626262'
          }
        },

        axisBorder: {
          show: false
        },

        axisTicks: {
          show: false
        },

        crosshairs: {
          show: false,
          opacity: 0.1,
          stroke: {
            color: '#b6b6b6',
            width: 2,
            dashArray: 2
          },
          fill: {
            type: 'solid',
            color: '#694ED6'
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto, sans-serif',
            colors: ['#626262']
          }
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      title: {
        text: '',
        align: 'left',
        style: {
          fontSize: '13px',
          fontWeight: 'ExtraBold',
          fontFamily: 'Spartan',
          color: '#363636'
        }
      }
    };
    this.type = 'bar';
    this.hideDataLabel = true;
    this.color = 'categorical';
    this.legendPosition = 'top';
    this.legendHorizontalAlign = 'right';
  }
}
