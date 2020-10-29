import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartType, CHART_PLOLTLY_TYPE, ChartOrientation } from '../chart.models';
import { TraceComponent } from './trace.component';

describe('Trace diretive', () => {
  let component: TraceComponent;
  let fixture: ComponentFixture<TraceComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TraceComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };
    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;
    expect(component).toBeTruthy();
  });

  it('should set trace', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      labels: trace.dimension,
      values: trace.measure,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v'
    };

    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;

    expect(component.getPlotlyTrace()).toEqual(dummyPlotlyTrace);
  });

  it('should have layout', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    };
    const dummyPlotlyTraceLayout = CHART_PLOLTLY_TYPE[trace.type].layout;

    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;

    expect(component.getPlotlyTypeLayout()).toEqual(dummyPlotlyTraceLayout);
  });

  it('should set trace with horizontal orientation', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line,
      orientation: ChartOrientation.horizontal
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.measure,
      y: trace.dimension,
      labels: trace.measure,
      values: trace.dimension,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'h'
    };

    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;
    component.orientation = trace.orientation;

    expect(component.getPlotlyTrace()).toEqual(dummyPlotlyTrace);
  });

  it('should set trace with selected points', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line,
      selectedPoints: [0, 2]
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      values: trace.measure,
      labels: trace.dimension,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v',
      selectedpoints: trace.selectedPoints
    };

    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;
    component.selectedPoints = trace.selectedPoints;

    expect(component.getPlotlyTrace()).toEqual(dummyPlotlyTrace);
  });

  it('should change the type', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      values: trace.measure,
      labels: trace.dimension,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v'
    };

    component.dimension = trace.dimension;
    component.dimensionName = trace.dimensionName;
    component.measure = trace.measure;
    component.measureName = trace.measureName;
    component.type = trace.type;

    expect(component.getPlotlyTrace()).toEqual(dummyPlotlyTrace);

    component.type = ChartType.bar;
    dummyPlotlyTrace.type = ChartType.bar;

    expect(component.getPlotlyTrace()).toEqual(dummyPlotlyTrace);
  });
});
