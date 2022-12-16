import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PaletteModule } from '@finastra/angular-components/core';
import { of } from 'rxjs';
import { VectorMapComponent } from './vector-map.component';
import { VectorMapCountry, VectorMapDataSource } from './vector-map.models';

// Created PlotlyDemoComponent because of issues when Testing with the
// PlotlyComponent
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'plotly-plot',
  template: '{{ data }}',
  styles: ['']
})
class PlotlyComponent {
  @Input() data: [] = [];
  @Input() layout: object = {};
  @Input() config: object = {};
  @Input() style: object = {};
  @Input() useResizeHandler = false;

  @Output() hover = new EventEmitter<any>();
  @Output() unhover = new EventEmitter<any>();
  @Output() plotlyClick = new EventEmitter<any>();
}

describe('VectorMapModule', () => {
  let component: VectorMapComponent;
  let fixture: ComponentFixture<VectorMapComponent>;

  const simplePlot: Partial<VectorMapCountry>[] = [
    {
      name: 'Romania',
      value: 1945
    }
  ];

  const viewMapDataSource: VectorMapDataSource = {
    data: {
      view1: [{ name: 'Romania', value: 2309 }],
      view2: [{ name: 'Moldova', value: 1919 }]
    },
    views: [
      {
        id: 'view1',
        text: 'View 1'
      },
      {
        id: 'view2',
        text: 'View 2'
      }
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatTooltipModule, MatSelectModule, MatFormFieldModule, MatInputModule, PaletteModule, NoopAnimationsModule],
      declarations: [VectorMapComponent, PlotlyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorMapComponent);
    component = fixture.componentInstance;
    component.dataSource = simplePlot;
    component.plotlyReady$ = of(true);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create simple plot with input data', async () => {
    await fixture.whenStable();
    await fixture.whenRenderingDone();

    const selectedCountry = simplePlot[0];

    const country = component.countries.find(({ name }) => name === selectedCountry.name);
    const text = component.data[0].text.find((t: string) => t === selectedCountry.name);
    const value = component.data[0].z.find((v: number) => v === selectedCountry.value);

    expect(country).toBeDefined();
    expect(text).toStrictEqual('Romania');
    expect(value).toStrictEqual(1945);
  });

  it('should create view plot with input data', async () => {
    component.dataSource = viewMapDataSource;
    component.ngOnInit();

    fixture.detectChanges();
    await fixture.whenStable();
    await fixture.whenRenderingDone();

    const selectedCountry = viewMapDataSource.data['view1'][0];

    const country = component.countries.find(({ name }) => name === selectedCountry.name);
    const location = component.data[0].text.find((t: string) => t === selectedCountry.name);
    const value = component.data[0].z.find((v: number) => v === selectedCountry.value);

    expect(country).toBeDefined();
    expect(location).toStrictEqual('Romania');
    expect(value).toStrictEqual(2309);
  });

  it('should create view plot with input data', async () => {
    component.dataSource = viewMapDataSource;
    component.ngOnInit();
    (component.plot as any) = { revision: 0 };
    component.onViewChange({ value: 'view2' });

    fixture.detectChanges();
    await fixture.whenStable();
    await fixture.whenRenderingDone();

    const selectedCountry = viewMapDataSource.data['view2'][0];

    const country = component.countries.find(({ name }) => name === selectedCountry.name);
    const location = component.data[0].text.find((t: string) => t === selectedCountry.name);
    const value = component.data[0].z.find((v: number) => v === selectedCountry.value);

    expect(country).toBeDefined();
    expect(location).toStrictEqual('Moldova');
    expect(value).toStrictEqual(1919);
  });
});
