import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
import {
  ColorScale,
  LazyloadScriptService,
  PaletteConfig,
  PaletteService,
  PALETTE_DEFAULT_CONFIG
} from '@finastra/angular-components/core';
import { PlotComponent } from 'angular-plotly.js';
import { Observable, Subscription } from 'rxjs';
import {
  COUNTRIES,
  DEFAULT_CONFIG,
  DEFAULT_DATA,
  DEFAULT_LAYOUT,
  DEFAULT_STYLE,
  VectorMapCountry,
  VectorMapDataSource,
  VectorMapLegend,
  VectorMapView,
  VectorMapViewsDataSource
} from './vector-map.models';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild(PlotComponent, { static: false }) plot!: PlotComponent;
  @ViewChild('tooltip', { static: true }) tooltip!: TooltipComponent;

  @Input() title = 'Vector Map';
  @Input() dataSource: VectorMapDataSource = [];
  @Input() showLegend = true;
  @Input() autoResize = true;
  // tslint:disable-next-line: no-output-native
  @Output() click = new EventEmitter<Partial<VectorMapCountry>>();
  @Output() viewChange = new EventEmitter<VectorMapView>();

  countries: VectorMapCountry[] = [];
  data: any[] = [];
  layout: any = {};
  config: any = {};
  style: Partial<CSSStyleDeclaration> = {};
  paletteConfig: PaletteConfig = PALETTE_DEFAULT_CONFIG;
  legend: VectorMapLegend[] = [];
  viewId: string | null = null;
  views: VectorMapView[] | null = [];
  tooltipTop = '';
  tooltipLeft = '0px';
  max = 1;

  subscriptions: Subscription[] = [];

  plotlyReady$: Observable<any>;

  constructor(public paletteService: PaletteService, public lazyLoadScriptService: LazyloadScriptService) {
    this.click = new EventEmitter<Partial<VectorMapCountry>>();
    this.plotlyReady$ = lazyLoadScriptService.load('plotly.js', 'Plotly');
  }

  ngOnInit() {
    this.setView();
    this.setLayout();
    this.setConfig();
    this.setStyle();

    this.subscriptions.push(
      this.paletteService.paletteChange$.subscribe((config) => {
        this.paletteConfig = config;

        this.setPlotData();

        if (this.plot) this.refresh();
      })
    );
  }

  ngOnChanges({ dataSource, showLegend }: SimpleChanges) {
    let refreshPlot = false;
    let timedOutRefreshPlot = false;

    if (dataSource && !dataSource.isFirstChange()) {
      this.setView();
      this.setLayout();
      this.setPlotData();

      if (this.showLegend) timedOutRefreshPlot = true;
    }

    if (showLegend && !showLegend.isFirstChange() && showLegend.currentValue !== showLegend.previousValue) {
      timedOutRefreshPlot = true;
    }

    if (timedOutRefreshPlot) {
      // passing check for next pass in browser event loop / angular lifecycle
      // checks so that the legend is hidden / shown properly
      setTimeout(() => {
        this.refresh();
      });

      refreshPlot = false;
    }

    if (refreshPlot) {
      this.refresh();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.autoResize) {
      this.refresh();
    }
  }

  refresh() {
    try {
      this.plot.revision++;
      this.plot.updatePlot();
    } catch {
      this.plot.revision--;
    }
  }

  getLegendValue(value: number, max: number): number {
    return Math.floor(parseFloat((1 - value).toString()) * max);
  }

  getData(): Partial<VectorMapCountry>[] {
    return this.dataSource instanceof Array ? this.dataSource : this.viewId ? this.dataSource.data[this.viewId] : [];
  }

  setLayout(layout: any = {}) {
    this.layout = { ...DEFAULT_LAYOUT, ...layout };
  }

  setConfig(config: any = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  setStyle(style: Partial<CSSStyleDeclaration> = {}) {
    this.style = { ...DEFAULT_STYLE, ...style };
  }

  setView() {
    this.viewId = this.dataSource instanceof Array ? null : this.dataSource.views[0].id;

    if (this.viewId) {
      this.viewChange = this.viewChange || new EventEmitter<VectorMapView>();
      this.views = (this.dataSource as VectorMapViewsDataSource).views;
    } else {
      this.views = null;
    }
  }

  setPlotData() {
    const data = this.getData();

    this.max = Math.max(...[0, ...data.map(({ value }) => value!)]);
    this.setCountries(data);
    this.setLegend(this.paletteConfig.colorScale);

    this.data = [
      {
        ...DEFAULT_DATA,
        locations: this.countries.map(({ code }) => code),
        z: this.countries.map(({ value }) => value),
        text: this.countries.map(({ name }) => name),
        colorscale: this.paletteConfig.colorScale,
        marker: {
          line: {
            color: this.paletteConfig.vectorMap.marker.line.color,
            width: this.paletteConfig.vectorMap.marker.line.width
          }
        },
        zmax: this.max ? this.max : 1
      }
    ];
  }

  setCountries(data: Partial<VectorMapCountry>[]) {
    this.countries = COUNTRIES.map((country) => {
      const countryData = data.find(({ name, code }) => name === country.name || code === country.code) || country;
      return {
        ...country,
        ...{ value: countryData ? countryData.value || 0 : 0 }
      };
    });
  }

  setLegend(colorScale: ColorScale) {
    this.legend.length = 0;

    colorScale.forEach((color, i, arr) => {
      if (i === 0) return;
      let text: string, v: number, v1: number, v2: number;

      switch (color[0]) {
        case 0.1:
          v = this.getLegendValue(color[0], this.max);
          text = `>= ${v}`;
          break;
        case 1:
          v = this.getLegendValue(arr[i - 1][0], this.max);
          text = `< ${v}`;
          break;
        default:
          v1 = this.getLegendValue(color[0], this.max);
          v2 = this.getLegendValue(arr[i - 1][0], this.max) - 1;
          text = `${v1} — ${v2}`;
      }

      this.legend.push({
        color: color[1].toString(),
        text: text
      });
    });
  }

  onHover({ points: [point] }: { points: Array<any> }) {
    const box = (document.querySelectorAll('.choroplethlocation')[point.pointIndex] as SVGPathElement).getBBox();

    this.tooltipLeft = box.x + this.plot.plotEl.nativeElement.offsetLeft + box.width / 2 + 'px';
    this.tooltipTop = box.y + this.plot.plotEl.nativeElement.offsetTop + box.height / 2 + 'px';

    this.tooltip.message = `${point.text}: ${point.z}`;

    this.tooltip.show(200);
  }

  onUnHover() {
    this.tooltip.hide(200);
  }

  onPlotClick({ points: [point] }: { points: Array<any> }) {
    const clickedCountry = this.countries[point.pointIndex];

    this.click.emit(
      this.getData().find(({ name, code }) => name === clickedCountry.name || code === clickedCountry.code)
    );
  }

  onViewChange($event: any) {
    this.viewId = $event.value;

    this.setPlotData();
    this.plot.revision++;

    this.viewChange.emit((<VectorMapViewsDataSource>this.dataSource).views[$event.value]);
  }
}
