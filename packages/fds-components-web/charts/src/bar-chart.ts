import { customElement, property } from 'lit/decorators.js';
import { ApexChartsWrapper } from './apexcharts';
import { styles as apexchartsStyle } from './apexcharts-styles.css';
import { styles } from './bar-chart-styles.css';

/**
 * @attr {string} [chartTitle=""] - Defines title of chart
 * @attr {boolean} [xGrid=false] - Defines x grid visibility
 * @attr {boolean} [yGrid=false] - Defines y grid visibility
 * @attr {boolean} [horizontal=false] - Display chart as horizontal bar chart
 * @attr {boolean} [stacked=false] - Display chart as stacked bar chart
 */
@customElement('fds-bar-chart')
export class BarChart extends ApexChartsWrapper {
  static styles = [styles, apexchartsStyle];
  private _xGrid = false;
  @property({ attribute: false })
  public set xGrid(value: boolean) {
    this._xGrid = value;
    if (this.options) {
      this.options = {
        ...this.options,
        grid: {
          ...this.options.grid,
          xaxis: {
            lines: {
              show: value
            }
          }
        }
      };
    }
  }
  public get xGrid(): boolean {
    return this._xGrid;
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
  public set chartTitle(title: string) {
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
  public set stroke(stroke: ApexStroke) {
    if (this.options && this.options.stroke) {
      this.options.stroke = { ...this.options.stroke, ...stroke };
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

  private _horizontal = false;
  @property({ attribute: false })
  public get horizontal(): boolean {
    return this._horizontal;
  }
  public set horizontal(value: boolean) {
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
            fontWeight: 400
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
            width: 2,
            dashArray: 2
          },
          fill: {
            type: 'solid'
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto, sans-serif'
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
          fontFamily: 'Spartan'
        }
      }
    };

    this.type = 'bar';
    this.color = 'categorical';
    this.hideDataLabel = true;
    this.legendPosition = 'top';
    this.legendHorizontalAlign = 'right';
  }
}
