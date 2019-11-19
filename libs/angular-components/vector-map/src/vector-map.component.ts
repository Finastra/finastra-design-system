import { Component, OnInit, Input, ViewChild, HostListener, EventEmitter, Output, OnDestroy } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
import { PlotComponent } from 'angular-plotly.js';
import { Plotly } from 'angular-plotly.js/src/app/shared/plotly.interface';

import { PaletteService, ColorScale, PaletteConfig } from '@ffdc/uxg-angular-components/core';
import { Subscription } from 'rxjs';

import {
  Country,
  VectorMapLegend,
  VectorMapDataSource,
  VectorMapView,
  VectorMapViewsDataSource,
  COUNTRIES,
  DEFAULT_DATA,
  DEFAULT_LAYOUT,
  DEFAULT_CONFIG,
  DEFAULT_STYLE
} from './vector-map.models';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, OnDestroy {
  @ViewChild(PlotComponent, { static: false }) plot: PlotComponent;
  @ViewChild('tooltip', { static: true }) tooltip: TooltipComponent;

  @Input() title = 'Vector Map';
  @Input() dataSource: VectorMapDataSource = [];

  @Input() height = '450px';
  @Input() width: string;
  @Input() showLegend = true;

  // tslint:disable-next-line: no-output-native
  @Output() click: EventEmitter<Partial<Country>>;
  @Output() viewChange: EventEmitter<VectorMapView>;

  countries: Country[] = [];
  data: Partial<Plotly.Data>[] = [];
  layout: Partial<Plotly.Layout>;
  config: Partial<Plotly.Config>;
  style: Partial<CSSStyleDeclaration>;

  paletteConfig: PaletteConfig;
  legend: VectorMapLegend[] = [];

  viewId: string | null;
  views: VectorMapView[];

  tooltipTop: string;
  tooltipLeft: string;

  private subscriptions: Subscription[] = [];

  constructor(public paletteService: PaletteService) {
    this.click = new EventEmitter<Partial<Country>>();
  }

  ngOnInit() {
    this.viewId = this.dataSource instanceof Array ? null : this.dataSource.views[0].id;

    if (this.viewId) {
      this.viewChange = new EventEmitter<VectorMapView>();
      this.views = (this.dataSource as VectorMapViewsDataSource).views;
    }

    this.layout = { ...DEFAULT_LAYOUT, height: this.height, width: this.width };
    this.config = { ...DEFAULT_CONFIG };
    this.style = { ...DEFAULT_STYLE };

    this.subscriptions.push(
      this.paletteService.paletteChange$.subscribe(config => {
        this.paletteConfig = config;

        this.setPlotData();

        if (this.plot) this.plot.revision++;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  @HostListener('window:resize')
  refresh() {
    this.plot.revision++;
    this.plot.updatePlot();
  }

  getLegendValue(value: number, max: number): number {
    return Math.floor(parseFloat((1 - value).toString()) * max);
  }

  getDataSource(): Partial<Country>[] {
    return this.dataSource instanceof Array ? this.dataSource : this.dataSource.data[this.viewId];
  }

  setPlotData() {
    const data = this.getData();

    this.max = Math.max(...[0, ...data.map(({ value }) => value)]);
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

  setCountries(data: Partial<Country>[]) {
    this.countries = COUNTRIES.map(country => {
      return {
        ...country,
        value: (data.find(({ name, code }) => name === country.name || code === country.code) || country).value
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

  onHover({ points: [point] }) {
    const box = (document.querySelectorAll('.choroplethlocation')[point.pointIndex] as SVGPathElement).getBBox();

    this.tooltipLeft = box.x + this.plot.plotEl.nativeElement.offsetLeft + box.width / 2 + 'px';
    this.tooltipTop = box.y + this.plot.plotEl.nativeElement.offsetTop + box.height / 2 + 'px';

    this.tooltip.message = `${point.text}: ${point.z}`;

    this.tooltip.show(200);
  }

  onUnHover() {
    this.tooltip.hide(200);
  }

  onPlotClick({ points: [point] }) {
    const clickedCountry = this.countries[point.pointIndex];

    this.click.emit(
      this.getDataSource().find(({ name, code }) => name === clickedCountry.name || code === clickedCountry.code)
    );
  }

  onViewChange($event) {
    this.viewId = $event.value;

    this.setPlotData();
    this.plot.revision++;

    this.viewChange.emit((<VectorMapViewsDataSource>this.dataSource).views[$event.value]);
  }
}
