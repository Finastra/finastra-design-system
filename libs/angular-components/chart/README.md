# Chart

## Usage

In your `app.module.ts` :

```ts
import { ChartModule } from '@finastra/angular-components/chart';

@NgModule({
  imports: [
    ...
    ChartModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-chart-typography($config) @include uxg-chart-theme($theme);
```

In your html

```html
<uxg-chart
  #chart
  (onSelected)="onSelected($event)"
  (onDoubleClick)="onDoubleClick($event)"
  [config]="config"
  [layout]="layout"
  [revision]="revision"
  [multiselect]="multiSelect"
>
  <uxg-legend [position]="LegendPosition.verticalRightTop"></uxg-legend>
  <uxg-trace
    *ngFor="let trace of traces"
    [dimension]="trace.dimension"
    [dimensionName]="trace.dimensionName"
    [measure]="trace.measure"
    [measureName]="trace.measureName"
    [type]="trace.type"
    [orientation]="trace.orientation"
    [selectedPoints]="trace.selectedPoints"
  ></uxg-trace>
</uxg-chart>
```

or

```html
<uxg-chart (onClick)="onClick($event)" (onSelected)="onSelected($event)" (onDoubleClick)="onDoubleClick($event)">
  <uxg-legend [position]="legendPosition"></uxg-legend>
  <uxg-group-traces columnPosition="0">
    <uxg-trace
      *ngFor="let trace of traces"
      [dimension]="trace.dimension"
      [dimensionName]="trace.dimensionName"
      [measure]="trace.measure"
      [measureName]="trace.measureName"
      [type]="trace.type"
    ></uxg-trace>
  </uxg-group-traces>
  <uxg-group-traces columnPosition="1">
    <uxg-trace
      *ngFor="let trace of traces2"
      [dimension]="trace.dimension"
      [dimensionName]="trace.dimensionName"
      [measure]="trace.measure"
      [measureName]="trace.measureName"
      [type]="trace.type"
      [orientation]="ChartOrientation.horizontal"
    ></uxg-trace>
  </uxg-group-traces>
  <uxg-group-traces rowPosition="1">
    <uxg-trace
      *ngFor="let trace of traces3"
      [dimension]="trace.dimension"
      [dimensionName]="trace.dimensionName"
      [measure]="trace.measure"
      [measureName]="trace.measureName"
      [type]="trace.type"
    ></uxg-trace>
  </uxg-group-traces>
  <uxg-group-traces rowPosition="1" columnPosition="1">
    <uxg-trace
      *ngFor="let trace of traces4"
      [dimension]="trace.dimension"
      [dimensionName]="trace.dimensionName"
      [measure]="trace.measure"
      [measureName]="trace.measureName"
      [type]="trace.type"
    ></uxg-trace>
  </uxg-group-traces>
</uxg-chart>
```
