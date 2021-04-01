import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ChartComponent } from './chart.component';

import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = (global as any).Plotly;
import { CommonModule } from '@angular/common';
import { GroupTracesComponent } from './directives/groupTrace.component';
import { LegendComponent, LegendPosition, LegendPositionConvertion } from './directives/legend.component';
import { TraceComponent } from './directives/trace.component';
import { PaletteModule } from '@finastra/angular-components/core';
import { AfterViewInit, ViewChild, Component, SimpleChange } from '@angular/core';
import { ChartType, CHART_PLOLTLY_TYPE } from './chart.models';
import { of } from 'rxjs';

@Component({
  selector: 'uxg-test-container-component',
  template: ``
})
class TestContainerComponent implements AfterViewInit {
  @ViewChild('chart', { static: false }) chart!: ChartComponent;

  traces: any[] = [];
  traces2: any[] = [];
  columnPosition: any = undefined;
  rowPosition: any = undefined;
  columnPosition2: any = undefined;
  rowPosition2: any = undefined;
  legendPosition: LegendPosition = LegendPosition.verticalRightTop;

  ngAfterViewInit() {}
}

describe('Chart Component', () => {
  let component: TestContainerComponent;
  let fixture: ComponentFixture<TestContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, PlotlyModule, PaletteModule],
      declarations: [ChartComponent, GroupTracesComponent, LegendComponent, TraceComponent, TestContainerComponent]
    });
  });

  it('should create', () => {
    fixture = TestBed.createComponent(TestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should create simple chart', () => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });
    const trace: any = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };

    const dummyPlotlyTraces = [
      {
        dimensionName: trace.dimensionName,
        x: trace.dimension,
        y: trace.measure,
        labels: trace.dimension,
        values: trace.measure,
        name: trace.measureName,
        ...CHART_PLOLTLY_TYPE[trace.type as ChartType].trace,
        orientation: 'v'
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);

    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.chart.data).toStrictEqual(dummyPlotlyTraces);
  });

  it('should create groupe trace chart', () => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-group-traces [columnPosition]="columnPosition" [rowPosition]="rowPosition">
              <uxg-trace
                *ngFor="let trace of traces"
                [dimension]="trace.dimension"
                [dimensionName]="trace.dimensionName"
                [measure]="trace.measure"
                [measureName]="trace.measureName"
                [type]="trace.type"
              ></uxg-trace>
            </uxg-group-traces>
            <uxg-group-traces [columnPosition]="columnPosition2" [rowPosition]="rowPosition2">
              <uxg-trace
                *ngFor="let trace of traces2"
                [dimension]="trace.dimension"
                [dimensionName]="trace.dimensionName"
                [measure]="trace.measure"
                [measureName]="trace.measureName"
                [type]="trace.type"
              ></uxg-trace>
            </uxg-group-traces>
          </uxg-chart>`
      }
    });
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const trace2 = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    const dummyPlotlyTraces = [
      {
        dimensionName: trace.dimensionName,
        x: trace.dimension,
        y: trace.measure,
        labels: trace.dimension,
        values: trace.measure,
        name: trace.measureName,
        ...CHART_PLOLTLY_TYPE[trace.type].trace,
        orientation: 'v',
        legendgroup: 'group1',
        xaxis: 'x1',
        yaxis: 'y1'
      },
      {
        dimensionName: trace.dimensionName,
        x: trace.dimension,
        y: trace.measure,
        labels: trace.dimension,
        values: trace.measure,
        name: trace.measureName,
        ...CHART_PLOLTLY_TYPE[trace2.type].trace,
        orientation: 'v',
        legendgroup: 'group2',
        xaxis: 'x2',
        yaxis: 'y2'
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);

    component.traces = [trace];
    component.traces2 = [trace2];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.chart.data).toStrictEqual(dummyPlotlyTraces);
  });

  it('should set layout', () => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);

    component.traces = [trace];
    component.chart.layout = { title: 'Test chart' };

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.chart.layout.title).toStrictEqual('Test chart');

    component.chart.layout = { title: 'Test chart 2' };
    fixture.detectChanges();
    expect(component.chart.layout.title).toStrictEqual('Test chart 2');
  });

  it('should set config', () => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);

    component.traces = [trace];
    component.chart.config = { scrollZoom: true };

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.chart.config.scrollZoom).toBeTruthy();
  });

  it('should set legend', () => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-legend [position]="legendPosition"></uxg-legend>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);

    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();

    expect(component.chart.layout.legend).toStrictEqual(LegendPositionConvertion[LegendPosition.verticalRightTop]);

    component.legendPosition = LegendPosition.horizontalBottomCenter;

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    fixture.detectChanges();
    expect(component.chart.layout.legend).toStrictEqual(
      LegendPositionConvertion[LegendPosition.horizontalBottomCenter]
    );
  });

  it('should change revision', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.plot, 'updatePlot');

    component.chart.revision = component.chart.revision++;
    fixture.detectChanges();
    expect(component.chart.plot.updatePlot).toBeCalled();

    component.chart.revision = component.chart.revision++;
    fixture.detectChanges();
    expect(component.chart.plot.updatePlot).toBeCalled();
  }));

  it('should select barchart', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    const dummyPoint = {
      points: [
        {
          data: {
            x: ['Banks', 'Foods', 'Energies'],
            y: [100, 50, 70],
            labels: ['Banks', 'Foods', 'Energies'],
            values: [100, 50, 70],
            dimensionName: 'Industry',
            name: 'PNL',
            type: ChartType.bar,
            orientation: 'v'
          },
          name: 'PNL',
          pointIndex: 0
        }
      ]
    };

    const selectedObject = [
      {
        Industry: 'Banks',
        PNL: 100
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.onClick, 'emit');
    spyOn(component.chart.onSelected, 'emit');

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();

    expect(component.chart.onClick.emit).toBeCalledWith(selectedObject);
    expect(component.chart.onSelected.emit).toBeCalledWith(selectedObject);
  }));

  it('should click piechart', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.pie
    };

    const dummyPoint = {
      points: [
        {
          data: {
            x: ['Banks', 'Foods', 'Energies'],
            y: [100, 50, 70],
            labels: ['Banks', 'Foods', 'Energies'],
            values: [100, 50, 70],
            dimensionName: 'Industry',
            name: 'PNL',
            type: ChartType.pie,
            orientation: 'v'
          },
          name: 'PNL',
          pointNumber: 0
        }
      ]
    };

    const selectedObject = [
      {
        Industry: 'Banks',
        PNL: 100
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.onClick, 'emit');
    spyOn(component.chart.onSelected, 'emit');

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();

    expect(component.chart.onClick.emit).toBeCalledWith(selectedObject);
    expect(component.chart.onSelected.emit).toBeCalledWith(selectedObject);
  }));

  it('should deselect', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    const dummyPoint = {
      points: [
        {
          data: {
            x: ['Banks', 'Foods', 'Energies'],
            y: [100, 50, 70],
            labels: ['Banks', 'Foods', 'Energies'],
            values: [100, 50, 70],
            dimensionName: 'Industry',
            name: 'PNL',
            type: ChartType.bar,
            orientation: 'v',
            selectedoints: 0
          },
          name: 'PNL',
          pointIndex: 0
        }
      ]
    };

    const selectedObject = [
      {
        Industry: 'Banks',
        PNL: 100
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.onClick, 'emit');

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();

    expect(component.chart.onClick.emit).toBeCalledWith(selectedObject);

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();
    expect(component.chart.onClick.emit).toBeCalledWith([]);
  }));

  it('should doubleclick', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart>
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    const dummyPoint = {
      points: [
        {
          data: {
            x: ['Banks', 'Foods', 'Energies'],
            y: [100, 50, 70],
            labels: ['Banks', 'Foods', 'Energies'],
            values: [100, 50, 70],
            dimensionName: 'Industry',
            name: 'PNL',
            type: ChartType.bar,
            orientation: 'v'
          },
          name: 'PNL',
          pointIndex: 0
        }
      ]
    };

    const selectedObject = [
      {
        Industry: 'Banks',
        PNL: 100
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.onDoubleClick, 'emit');

    component.chart.onSelect(dummyPoint);
    tick(50);
    fixture.detectChanges();
    component.chart.onSelect(dummyPoint);
    tick(50);
    fixture.detectChanges();
    tick(300);

    expect(component.chart.onDoubleClick.emit).toBeCalledWith(selectedObject);
  }));

  it('should multiselect', fakeAsync(() => {
    TestBed.overrideComponent(TestContainerComponent, {
      set: {
        template: `<uxg-chart #chart [multiSelect]="true">
            <uxg-trace
              *ngFor="let trace of traces"
              [dimension]="trace.dimension"
              [dimensionName]="trace.dimensionName"
              [measure]="trace.measure"
              [measureName]="trace.measureName"
              [type]="trace.type"
            ></uxg-trace>
          </uxg-chart>`
      }
    });

    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };

    const dummyPoint = {
      points: [
        {
          data: {
            x: ['Banks', 'Foods', 'Energies'],
            y: [100, 50, 70],
            labels: ['Banks', 'Foods', 'Energies'],
            values: [100, 50, 70],
            dimensionName: 'Industry',
            name: 'PNL',
            type: ChartType.bar,
            orientation: 'v'
          },
          name: 'PNL',
          pointIndex: 0
        }
      ]
    };

    const selectedObject = [
      {
        Industry: 'Banks',
        PNL: 100
      },
      {
        Industry: 'Foods',
        PNL: 50
      }
    ];

    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.chart.plotlyReady$ = of(true);
    component.traces = [trace];

    fixture.detectChanges();
    component.ngAfterViewInit();
    component.chart.ngAfterContentInit();
    component.chart.ngOnInit();
    fixture.detectChanges();
    spyOn(component.chart.onClick, 'emit');
    spyOn(component.chart.onSelected, 'emit');

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();

    dummyPoint.points[0].pointIndex = 1;
    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();

    expect(component.chart.onClick.emit).toHaveBeenLastCalledWith([selectedObject[1]]);
    expect(component.chart.onSelected.emit).toHaveBeenLastCalledWith(selectedObject);

    component.chart.onSelect(dummyPoint);
    tick(300);
    fixture.detectChanges();
    expect(component.chart.onSelected.emit).toHaveBeenLastCalledWith([selectedObject[0]]);
  }));
});
