
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, ViewChild, Input, Inject, OnDestroy, ContentChild, QueryList, ContentChildren, Output, EventEmitter } from '@angular/core';
import { PlotComponent } from 'angular-plotly.js';
import { DOCUMENT } from '@angular/common';
import { Trace } from './directives/trace.directive';
import { Plotly } from 'angular-plotly.js/src/app/shared/plotly.interface';
import { DEFAULT_PLOTLY_CONFIG, } from './chart.models';
import { GroupTraces } from './directives/groupTrace.directive';
import { Legend } from './directives/legend.directive';
import { PaletteService, PaletteConfig } from '@ffdc/uxg-angular-components/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'uxg-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild(PlotComponent, { static: false }) plot!: PlotComponent;

  @ContentChildren(Trace) traces!: QueryList<Trace>;
  @ContentChild(Legend, { static: false}) legend?: Legend;
  @ContentChildren(GroupTraces) groupTraces?: QueryList<GroupTraces>;

  private _config: Partial<Plotly.Config> = {};
  private _layout: Partial<Plotly.Layout> = {};
  private _defaultLayout: Partial<Plotly.Layout> = {};
  private paletteConfig: PaletteConfig = {};
  private subscriptions: Subscription[] = [];

  @Input()
  get config(): Partial<Plotly.Config> {
    return !this._config ? DEFAULT_PLOTLY_CONFIG : this._config;
  }
  set config(value: Partial<Plotly.Config>) {
    this._config = this.merge_options(DEFAULT_PLOTLY_CONFIG, value);
  }

  @Input()
  get layout(): Partial<Plotly.Layout> {
    if (!this._layout) this._layout = this._defaultLayout;
    if (this.groupTraces && !this._layout.grid) {
      let row = 0, column = 0;
      this.groupTraces.forEach(grpTraces => {
        row = row < grpTraces.rowPosition ? grpTraces.rowPosition : row;
        column = column < grpTraces.columnPosition ? grpTraces.columnPosition : column;
      });
      this._layout.grid = { rows: Number(row) + 1, columns: Number(column) + 1, pattern: 'independent'};
    }
    this._layout.legend = !!this.legend;
    if (this.legend) {
      this._layout.legend = {...this._layout.legend, ...this.legend.getLegendPlotly()};
    }
    if(this.paletteConfig.colorWay) {
      this._layout.colorway = this.paletteConfig.colorWay;
    }

    return this._layout;
  }
  set layout(value: Partial<Plotly.Layout>) {
    if (!this._defaultLayout) this.setDefautLayout();
    this._layout = this.merge_options(this._defaultLayout, value);
  }

  @Input() 
  get revision(): number {
    return this.plot.revision;
  }
  set revision(value: number) {
    this.plot.revision = value;
    this.plot.updatePlot();
  }

  get data(): Partial<Plotly.Data>[] {
    if (this.traces && this.traces.length) {
      return this.traces.map(trace => {
        return trace.getPlotlyTrace();
      }).filter(trace => !!trace);
    } else {
      let datas: Partial<Plotly.Data>[] = [];

      if (this.groupTraces && this.groupTraces.length) {
        let nbGrp = 1;
        this.groupTraces.forEach((grpTrace: GroupTraces) => {
          datas = [
            ...datas, 
            ...grpTrace.getTraces().map(tr => {
              tr.xaxis = 'x' + nbGrp; 
              tr.yaxis = 'y' + nbGrp;
              tr.legendgroup = 'group' + nbGrp;
              return tr;
            })
          ];
          nbGrp++;
        });
      }

      return datas ;
    } 
  }

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick: EventEmitter<Array<Object>>;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDoubleClick: EventEmitter<Array<Object>>;
  private lastClick = {
    time: 0, 
    item: [] as Array<Object>
  };
  private clickTimer: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private paletteService: PaletteService) {
      this.onClick = new EventEmitter<Array<Object>>();
      this.onDoubleClick = new EventEmitter<Array<Object>>();
  }
  
  ngOnInit(): void {
    this.setDefautLayout();
    this.subscriptions.push(
      this.paletteService.paletteChange$.subscribe(config => {
        this.paletteConfig = config;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSelect(event: any) {
    const points = event.points;
    const itemsClicked: Array<Object> = [];
    points.forEach((item: any) => {
      const value = item.x;
      if (itemsClicked.map((it: any) => it[item.data.dimensionName]).indexOf(value) === -1) {
        itemsClicked.push({[item.data.dimensionName]: value});
      }
    });
    this.onEventClick(itemsClicked);
  }

  onDeSelect(): void {
    this.onEventClick([]);
  }

  private onEventClick(itemsClicked: Array<Object>) {
    const clickTime = Date.now();
    if (this.lastClick && this.lastClick.time && this.lastClick.item && (clickTime - this.lastClick.time < 250) && this.lastClick.item.length) {
      clearTimeout(this.clickTimer);
      this.clickTimer = 0;
      this.onDoubleClick.emit(this.lastClick.item);
    } else {
      this.lastClick.time = clickTime;
      this.lastClick.item = itemsClicked;
      this.clickTimer = setTimeout(() => {
        this.lastClick.item = [];
        this.onClick.emit(itemsClicked);
      }, 300);
    }
  }

  private merge_options(obj1: Object, obj2: Object): Object {
    const obj3 = {};
    if (typeof obj2 === 'undefined') {
      return obj1;
    } 
    if (typeof obj1 === 'undefined') {
      return obj2;
    }

    for (const attrname in obj1) {
      if (obj1.hasOwnProperty(attrname))
        obj3[attrname] = typeof obj1[attrname] === 'object' && !Array.isArray(obj1[attrname]) ? this.merge_options(obj1[attrname], obj2[attrname]) : obj1[attrname];
    }
    for (const attrname in obj2) {
      if (obj2.hasOwnProperty(attrname))
        obj3[attrname] = typeof obj2[attrname] === 'object' && !Array.isArray(obj2[attrname]) ? this.merge_options(obj1[attrname], obj2[attrname]) : obj2[attrname];
    }
    return obj3;
  }

  private setDefautLayout(): void {
    const themeContent = this.document.body;
    const tmpContent = document.createElement('chart-font');
    tmpContent.className = 'chart-font';
    tmpContent.style.display = 'none';
    themeContent.appendChild(tmpContent);
    
    const globalStyled: CSSStyleDeclaration = window.getComputedStyle(this.document.body.getElementsByTagName('chart-font')[0]);
    tmpContent.className = 'chart-font-legend';
    const legendStyled: CSSStyleDeclaration = window.getComputedStyle(this.document.body.getElementsByTagName('chart-font')[0]);
    tmpContent.className = 'chart-font-axis';
    const axisStyled: CSSStyleDeclaration = window.getComputedStyle(this.document.body.getElementsByTagName('chart-font')[0]);
    this._defaultLayout = {
      hovermode: 'closest',
      clickmode: 'event+select',
      margin: {
        t: 20,
        l: 20,
        r: 20,
        b: 20
      },
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      legend: {
        font: {
          family: legendStyled.fontFamily,
          size: legendStyled.fontSize,
          color: legendStyled.color
        }
      },
      xaxis: {
        automargin: true,
        tickfont: {
          family: axisStyled.fontFamily,
          size: axisStyled.fontSize,
          color: axisStyled.color
        },
        title: {
          font: {
            family: axisStyled.fontFamily,
            size: axisStyled.fontSize,
            color: axisStyled.color
          }
        }
      },
      yaxis: {
        automargin: true,
        tickfont: {
          family: axisStyled.fontFamily,
          size: axisStyled.fontSize,
          color: axisStyled.color
        },
        title: {
          font: {
            family: axisStyled.fontFamily,
            size: axisStyled.fontSize,
            color: axisStyled.color
          }
        }
      },
      font: {
        family: globalStyled.fontFamily,
        size: globalStyled.fontSize,
        color: globalStyled.color
      },
      bargap: parseFloat(axisStyled.margin.replace('px', '')) / 100,
      bargroupgap: parseFloat(axisStyled.padding.replace('px', '')) / 100
    };
    themeContent.removeChild(tmpContent);
  }
}
