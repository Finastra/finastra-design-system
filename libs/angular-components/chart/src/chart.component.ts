import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  Input,
  Inject,
  OnDestroy,
  ContentChild,
  QueryList,
  ContentChildren,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  AfterContentInit
} from '@angular/core';
import { PlotComponent } from 'angular-plotly.js';
import { DOCUMENT } from '@angular/common';
import { TraceComponent } from './directives/trace.component';
import { CHART_DEFAULT_PLOTLY_CONFIG } from './chart.models';
import { GroupTracesComponent } from './directives/groupTrace.component';
import { LegendComponent } from './directives/legend.component';
import { PaletteService, PaletteConfig, LazyloadScriptService } from '@finastra/angular-components/core';
import { Subscription, merge, Observable } from 'rxjs';

@Component({
  selector: 'uxg-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @ViewChild(PlotComponent, { static: false }) plot!: PlotComponent;

  @ContentChildren(TraceComponent) traces?: QueryList<TraceComponent>;
  @ContentChild(LegendComponent, { static: false }) legend?: LegendComponent;
  @ContentChildren(GroupTracesComponent) groupTraces?: QueryList<GroupTracesComponent>;

  data: any[] = [];

  private _config?: any;
  private _layout?: any;
  private _defaultLayout?: any;
  private paletteConfig?: PaletteConfig;
  private subscriptions: Subscription[] = [];

  @Input() multiSelect = false;

  @Input()
  get config(): any {
    return !this._config ? CHART_DEFAULT_PLOTLY_CONFIG : this._config;
  }
  set config(value: any) {
    this._config = this.merge_options(CHART_DEFAULT_PLOTLY_CONFIG, value);
  }

  @Input()
  get layout(): any {
    return this._layout ? this._layout : {};
  }
  set layout(value: any) {
    if (!this._defaultLayout) this.setDefautLayout();
    this._layout = this.merge_options(this.merge_options(this._defaultLayout, this._layout), value);
  }

  @Input()
  get revision(): number {
    return this.plot.revision;
  }
  set revision(value: number) {
    if (this.plot) {
      this.refresh();
      this.plot.revision = value;
      this.cd.markForCheck();
      this.plot.updatePlot();
    }
  }

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick: EventEmitter<Array<Object>>;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSelected: EventEmitter<Array<Object>>;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDoubleClick: EventEmitter<Array<Object>>;

  private lastClick = {
    time: 0,
    item: { selectedItems: [] as Array<Object>, clickedItems: [] as Array<Object> }
  };
  private clickTimer: any;

  plotlyReady$: Observable<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private paletteService: PaletteService,
    private cd: ChangeDetectorRef,
    public lazyLoadScriptService: LazyloadScriptService
  ) {
    this.onClick = new EventEmitter<Array<Object>>();
    this.onSelected = new EventEmitter<Array<Object>>();
    this.onDoubleClick = new EventEmitter<Array<Object>>();
    this.plotlyReady$ = lazyLoadScriptService.load('plotly.js', 'Plotly');
  }

  ngOnInit(): void {
    this.setDefautLayout();
    this.subscriptions.push(
      this.paletteService.paletteChange$.subscribe((config) => {
        this.paletteConfig = config;
      })
    );
  }

  ngAfterContentInit(): void {
    this.refresh();
    if (this.groupTraces && this.traces) {
      merge(this.groupTraces.changes, this.traces.changes).subscribe((value) => {
        this.refresh();
      });
    } else if (this.traces) {
      merge(this.traces.changes).subscribe((value) => {
        this.refresh();
      });
    } else if (this.groupTraces) {
      merge(this.groupTraces.changes).subscribe((value) => {
        this.refresh();
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
    this.setLayout();
  }

  onSelect(event: any) {
    const points: any = event.points;
    const items = { selectedItems: new Array<object>(), clickedItems: new Array<object>() };
    let trace: TraceComponent | undefined;
    points.forEach((item: any) => {
      if (this.traces) {
        trace = this.traces.find((t: TraceComponent) => {
          return t.dimensionName === item.data.dimensionName && t.measureName === item.data.name;
        });
      } else if (this.groupTraces) {
        this.groupTraces.forEach((g: GroupTracesComponent) => {
          trace = g.traces.find((t: TraceComponent) => {
            return t.dimensionName === item.data.dimensionName && t.measureName === item.data.name;
          });
        });
      }

      if (trace) {
        if (item.pointIndex !== undefined) {
          let dimension = item.data.orientation === 'v' ? item.data.x[item.pointIndex] : item.data.y[item.pointIndex];
          let measure = item.data.orientation === 'v' ? item.data.y[item.pointIndex] : item.data.x[item.pointIndex];

          // Get item clicked
          items.clickedItems.push({
            [item.data.dimensionName]: dimension,
            [item.data.name]: measure
          });

          // Update selectedpoints
          if (trace.selectedPoints && trace.selectedPoints.indexOf(item.pointIndex) !== -1) {
            if (!this.multiSelect) {
              // Set other trace selection to null
              this.groupTraces?.forEach((g: GroupTracesComponent) => {
                g.traces?.forEach((t) => delete t.selectedPoints);
              });
              this.traces?.forEach((t) => delete t.selectedPoints);
            } else {
              let someSelected = false;
              this.groupTraces?.forEach((g: GroupTracesComponent) => {
                g.traces?.forEach((t) => {
                  if (
                    (t.dimensionName !== trace?.dimensionName || t.measureName !== trace?.measureName) &&
                    t.selectedPoints?.length &&
                    t.selectedPoints?.length > 0
                  )
                    someSelected = true;
                });
              });
              this.traces?.forEach((t) => {
                if (
                  (t.dimensionName !== trace?.dimensionName || t.measureName !== trace?.measureName) &&
                  t.selectedPoints?.length &&
                  t.selectedPoints?.length > 0
                )
                  someSelected = true;
              });
              if (trace.selectedPoints.length === 1 && !someSelected) {
                delete trace.selectedPoints;
              } else {
                trace.selectedPoints.splice(trace.selectedPoints.indexOf(item.pointIndex), 1);
              }
              if (!someSelected) {
                this.groupTraces?.forEach((g: GroupTracesComponent) => {
                  g.traces?.forEach((t) => {
                    if (
                      (t.dimensionName !== trace?.dimensionName || t.measureName !== trace?.measureName) &&
                      t.selectedPoints?.length === 0
                    )
                      delete t.selectedPoints;
                  });
                });
                this.traces?.forEach((t) => {
                  if (
                    (t.dimensionName !== trace?.dimensionName || t.measureName !== trace?.measureName) &&
                    t.selectedPoints?.length === 0
                  )
                    delete t.selectedPoints;
                });
              }
            }
          } else {
            if (trace.selectedPoints && this.multiSelect) {
              trace.selectedPoints.push(item.pointIndex);
            } else {
              // Set other trace selection to empty
              this.groupTraces?.forEach((g: GroupTracesComponent) => {
                g.traces?.forEach((t) => (t.selectedPoints = []));
              });
              this.traces?.forEach((t) => (t.selectedPoints = []));

              trace.selectedPoints = [item.pointIndex];
            }
          }

          // Get items selected
          if (trace.selectedPoints) {
            trace.selectedPoints.forEach((index: any) => {
              dimension = item.data.orientation === 'v' ? item.data.x[index] : item.data.y[index];
              measure = item.data.orientation === 'v' ? item.data.y[index] : item.data.x[index];
              items.selectedItems.push({
                [item.data.dimensionName]: dimension,
                [item.data.name]: measure
              });
            });
          }
        } else if (item.pointNumber !== undefined) {
          items.selectedItems.push({
            [item.data.dimensionName]: item.data.labels[item.pointNumber],
            [item.data.name]: item.data.values[item.pointNumber]
          });
          items.clickedItems = items.selectedItems;
        }
      }
    });
    this.onEventClick(items);
  }

  private onEventClick(items: { selectedItems: object[]; clickedItems: object[] }) {
    const clickTime = Date.now();
    if (
      clickTime - this.lastClick.time < 250 &&
      this.lastClick.item &&
      this.lastClick.item.clickedItems &&
      this.lastClick.item.clickedItems.length
    ) {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
      this.onDoubleClick.emit(this.lastClick.item.clickedItems);
    } else {
      this.lastClick.time = clickTime;
      this.lastClick.item = items;
      this.clickTimer = setTimeout(() => {
        this.lastClick.item = { selectedItems: [], clickedItems: [] };
        this.onClick.emit(items.selectedItems.length ? items.clickedItems : []);
        this.onSelected.emit(items.selectedItems);
        clearTimeout(this.clickTimer);
        this.revision++;
      }, 300);
    }
  }

  private refresh() {
    this.setLayout();
    this.setData();
    this.cd.markForCheck();
  }

  private merge_options(obj1: { [key: string]: string } | any, obj2: { [key: string]: string } | any): object {
    const obj3: { [key: string]: string } = {};
    if (typeof obj2 === 'undefined') {
      return obj1;
    }
    if (typeof obj1 === 'undefined') {
      return obj2;
    }

    for (const attrname in obj1) {
      if (obj1.hasOwnProperty(attrname))
        obj3[attrname] =
          typeof obj1[attrname] === 'object' && !Array.isArray(obj1[attrname])
            ? this.merge_options(obj1[attrname], obj2[attrname])
            : obj1[attrname];
    }
    for (const attrname in obj2) {
      if (obj2.hasOwnProperty(attrname))
        obj3[attrname] =
          typeof obj2[attrname] === 'object' && !Array.isArray(obj2[attrname])
            ? this.merge_options(obj1[attrname], obj2[attrname])
            : obj2[attrname];
    }
    return obj3;
  }

  private setDefautLayout(): void {
    const themeContent = this.document.body;
    const tmpContent = document.createElement('chart-font');
    tmpContent.className = 'chart-font';
    tmpContent.style.display = 'none';
    themeContent.appendChild(tmpContent);

    const globalStyled: CSSStyleDeclaration = window.getComputedStyle(
      this.document.body.getElementsByTagName('chart-font')[0]
    );
    tmpContent.className = 'chart-font-legend';
    const legendStyled: CSSStyleDeclaration = window.getComputedStyle(
      this.document.body.getElementsByTagName('chart-font')[0]
    );
    tmpContent.className = 'chart-font-axis';
    const axisStyled: CSSStyleDeclaration = window.getComputedStyle(
      this.document.body.getElementsByTagName('chart-font')[0]
    );
    this._defaultLayout = {
      hovermode: 'closest',
      clickmode: 'event',
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
      bargap: parseFloat(axisStyled.margin ? axisStyled.margin.replace('px', '') : '10') / 100,
      bargroupgap: parseFloat(axisStyled.padding ? axisStyled.padding.replace('px', '') : '10') / 100
    };
    themeContent.removeChild(tmpContent);
  }

  private setLayout(layout?: any): void {
    if (!this._layout) this._layout = this._defaultLayout;
    if (this._layout) {
      if (this.groupTraces && !this._layout.grid) {
        let row = 0,
          column = 0;
        this.groupTraces.forEach((grpTraces: any) => {
          row = row < grpTraces.rowPosition ? grpTraces.rowPosition : row;
          column = column < grpTraces.columnPosition ? grpTraces.columnPosition : column;
        });
        this._layout.grid = { rows: Number(row) + 1, columns: Number(column) + 1, pattern: 'independent' };
      }
      this._layout.legend = !!this.legend;
      if (this.legend) {
        this._layout.legend = { ...this._layout.legend, ...this.legend.getLegendPlotly() };
      }
      if (this.paletteConfig && this.paletteConfig.colorWay) {
        this._layout.colorway = this.paletteConfig.colorWay;
      }
    }

    if (layout) {
      this.merge_options(this._layout, layout);
    }
  }

  private setData(): void {
    if (this.traces && this.traces.length) {
      this.data = this.traces
        .map((trace) => {
          return trace.getPlotlyTrace();
        })
        .filter((trace) => !!trace);
    } else if (this.groupTraces && this.groupTraces.length) {
      let datas: Array<object> = [];
      let nbGrp = 1;
      this.groupTraces.forEach((grpTrace: GroupTracesComponent) => {
        datas = [
          ...datas,
          ...grpTrace.getTraces().map((tr) => {
            tr.xaxis = 'x' + nbGrp;
            tr.yaxis = 'y' + nbGrp;
            tr.legendgroup = 'group' + nbGrp;
            return tr;
          })
        ];
        nbGrp++;
      });
      this.data = datas;
    }
  }
}
