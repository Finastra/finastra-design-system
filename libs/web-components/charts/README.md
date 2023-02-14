# Charts

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/charts?style=for-the-badge)](https://www.npmjs.com/package/@finastra/charts)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/charts?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/charts')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-charts-donut-chart--default)

This package contains a wrapper for [Apex Charts](https://apexcharts.com/) in Web Components as well as a implementation of a Pie Chart.

Other type of charts will be added in the future, but the wrapper is already ready to use and extend if you need something more specific.

Have a look at the [Pie Chart implementation](./src/pie-chart.ts) for an example of how to extend the generic wrapper.

## Usage

### Import

```
npm i @finastra/charts
```

```ts
import '@finastra/charts';
...
<fds-pie-chart width="380" data='[44, 55, 13, 43, 22]' label="['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki']"></fds-pie-chart>
```

### API

<!-- DOC -->

#### Properties

| Property                | Attribute               | Type                                                                                                                               | Default       | Description                               |
| ----------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------- |
| `$el`                   |                         | `HTMLElement \| null`                                                                                                              | null          |                                           |
| `chart`                 |                         | `ApexCharts \| null`                                                                                                               | null          |                                           |
| `chartTheme`            |                         | `ChartTheme`                                                                                                                       |               |                                           |
| `color`                 | `color`                 | `semantic-1\|semantic-2\|semantic-3\|categorical\|focus-1\|focus-2\|focus-1-angular\|focus-2-angular \|sequential-1\|sequential-2` | "categorical" | Define palette used by the chart          |
| `height`                | `height`                | `string`                                                                                                                           | "100%"        | Height of the chart                       |
| `hideDataLabel`         | `hide-data-label`       | `boolean`                                                                                                                          | false         | Hide labels                               |
| `legendHorizontalAlign` | `legendHorizontalAlign` | `left\|center\|right`                                                                                                              | "center"      | Define the horizontal alignment of legend |
| `legendPosition`        | `legendPosition`        | `top\|right\|bottom\|left`                                                                                                         | "bottom"      | Define the position of the legend         |
| `options`               |                         | `ApexOptions`                                                                                                                      |               |                                           |
| `override`              |                         |                                                                                                                                    |               |                                           |
| `series`                |                         | `ApexAxisChartSeries \| ApexNonAxisChartSeries`                                                                                    |               |                                           |
| `type`                  |                         | `ChartType`                                                                                                                        |               |                                           |
| `width`                 | `width`                 | `string`                                                                                                                           | "100%"        | Width of the chart                        |

#### Methods

| Method                           | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `createChartEl`                  | `(): HTMLElement`                        |
| `extend`                         | `<T>(target: T, source: Partial<T>): T`  |
| `getColor`                       | `(): any`                                |
| `getDataLabelColor`              | `(): string[]`                           |
| `getStrokeColor`                 | `(): { stroke: { colors: string[]; }; }` |
| `init`                           | `(): Promise<void> \| undefined`         |
| `initWatchers`                   | `(): void`                               |
| `isObject`                       | `(item: any): boolean`                   |
| `loadChartThemeFromCssVariables` | `(): void`                               |
| `refresh`                        | `(): Promise<void> \| undefined`         |

# fds-donut-chart

#### Properties

| Property                | Attribute               | Type                                                                                                                               | Default       | Description                               |
| ----------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------- |
| `$el`                   |                         | `HTMLElement \| null`                                                                                                              | null          |                                           |
| `chart`                 |                         | `ApexCharts \| null`                                                                                                               | null          |                                           |
| `chartTheme`            |                         | `ChartTheme`                                                                                                                       |               |                                           |
| `color`                 | `color`                 | `semantic-1\|semantic-2\|semantic-3\|categorical\|focus-1\|focus-2\|focus-1-angular\|focus-2-angular \|sequential-1\|sequential-2` | "categorical" | Define palette used by the chart          |
| `data`                  | `data`                  | `Array`                                                                                                                            | "[]"          | Data of the chart                         |
| `disableSelection`      | `disable-selection`     | `boolean`                                                                                                                          | false         | Disable selection                         |
| `height`                | `height`                | `string`                                                                                                                           | "100%"        | Height of the chart                       |
| `hideDataLabel`         | `hide-data-label`       | `boolean`                                                                                                                          | false         | Hide labels                               |
| `labels`                | `labels`                | `Array`                                                                                                                            | "[]"          | Labels correspond to value in data array  |
| `legendHorizontalAlign` | `legendHorizontalAlign` | `left\|center\|right`                                                                                                              | "center"      | Define the horizontal alignment of legend |
| `legendPosition`        | `legendPosition`        | `top\|right\|bottom\|left`                                                                                                         | "bottom"      | Define the position of the legend         |
| `options`               |                         | `ApexOptions`                                                                                                                      |               |                                           |
| `override`              |                         |                                                                                                                                    |               |                                           |
| `series`                |                         | `ApexAxisChartSeries \| ApexNonAxisChartSeries`                                                                                    |               |                                           |
| `type`                  |                         | `string`                                                                                                                           | "donut"       |                                           |
| `width`                 | `width`                 | `string`                                                                                                                           | "100%"        | Width of the chart                        |

#### Methods

| Method                           | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `createChartEl`                  | `(): HTMLElement`                        |
| `extend`                         | `<T>(target: T, source: Partial<T>): T`  |
| `getColor`                       | `(): any`                                |
| `getDataLabelColor`              | `(): string[]`                           |
| `getStrokeColor`                 | `(): { stroke: { colors: string[]; }; }` |
| `init`                           | `(): Promise<void> \| undefined`         |
| `initWatchers`                   | `(): void`                               |
| `isObject`                       | `(item: any): boolean`                   |
| `loadChartThemeFromCssVariables` | `(): void`                               |
| `refresh`                        | `(): Promise<void> \| undefined`         |
| `toggleSelected`                 | `(): void`                               |

# fds-pie-chart

#### Properties

| Property                | Attribute               | Type                                                                                                                               | Default       | Description                               |
| ----------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------- |
| `$el`                   |                         | `HTMLElement \| null`                                                                                                              | null          |                                           |
| `chart`                 |                         | `ApexCharts \| null`                                                                                                               | null          |                                           |
| `chartTheme`            |                         | `ChartTheme`                                                                                                                       |               |                                           |
| `color`                 | `color`                 | `semantic-1\|semantic-2\|semantic-3\|categorical\|focus-1\|focus-2\|focus-1-angular\|focus-2-angular \|sequential-1\|sequential-2` | "categorical" | Define palette used by the chart          |
| `data`                  |                         | `number[]`                                                                                                                         |               |                                           |
| `disableSelection`      | `disable-selection`     | `boolean`                                                                                                                          |               |                                           |
| `height`                | `height`                | `string`                                                                                                                           | "100%"        | Height of the chart                       |
| `hideDataLabel`         | `hide-data-label`       | `boolean`                                                                                                                          | false         | Hide labels                               |
| `labels`                |                         | `string[]`                                                                                                                         |               |                                           |
| `legendHorizontalAlign` | `legendHorizontalAlign` | `left\|center\|right`                                                                                                              | "center"      | Define the horizontal alignment of legend |
| `legendPosition`        | `legendPosition`        | `top\|right\|bottom\|left`                                                                                                         | "bottom"      | Define the position of the legend         |
| `options`               |                         | `ApexOptions`                                                                                                                      |               |                                           |
| `override`              |                         |                                                                                                                                    |               |                                           |
| `series`                |                         | `ApexAxisChartSeries \| ApexNonAxisChartSeries`                                                                                    |               |                                           |
| `type`                  |                         | `string`                                                                                                                           | "pie"         |                                           |
| `width`                 | `width`                 | `string`                                                                                                                           | "100%"        | Width of the chart                        |

#### Methods

| Method                           | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `createChartEl`                  | `(): HTMLElement`                        |
| `extend`                         | `<T>(target: T, source: Partial<T>): T`  |
| `getColor`                       | `(): any`                                |
| `getDataLabelColor`              | `(): string[]`                           |
| `getStrokeColor`                 | `(): { stroke: { colors: string[]; }; }` |
| `init`                           | `(): Promise<void> \| undefined`         |
| `initWatchers`                   | `(): void`                               |
| `isObject`                       | `(item: any): boolean`                   |
| `loadChartThemeFromCssVariables` | `(): void`                               |
| `refresh`                        | `(): Promise<void> \| undefined`         |
| `toggleSelected`                 | `(): void`                               |

# fds-radial-bar-chart

#### Properties

| Property                | Attribute               | Type                                                                                                                               | Default       | Description                                  |
| ----------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| `$el`                   |                         | `HTMLElement \| null`                                                                                                              | null          |                                              |
| `chart`                 |                         | `ApexCharts \| null`                                                                                                               | null          |                                              |
| `chartTheme`            |                         | `ChartTheme`                                                                                                                       |               |                                              |
| `color`                 | `color`                 | `semantic-1\|semantic-2\|semantic-3\|categorical\|focus-1\|focus-2\|focus-1-angular\|focus-2-angular \|sequential-1\|sequential-2` | "categorical" | Define palette used by the chart             |
| `data`                  | `data`                  | `Array`                                                                                                                            | "[]"          | Data of the chart                            |
| `height`                | `height`                | `string`                                                                                                                           | "100%"        | Height of the chart                          |
| `hideDataLabel`         | `hide-data-label`       | `boolean`                                                                                                                          | false         | Hide labels                                  |
| `hideLabels`            | `hide-labels`           | `Boolean`                                                                                                                          | false         | Hide the labels and display only the value,  |
| `labels`                | `labels`                | `Array`                                                                                                                            | "[]"          | Labels correspond to value in data array     |
| `legendHorizontalAlign` | `legendHorizontalAlign` | `left\|center\|right`                                                                                                              | "center"      | Define the horizontal alignment of legend    |
| `legendPosition`        | `legendPosition`        | `top\|right\|bottom\|left`                                                                                                         | "bottom"      | Define the position of the legend            |
| `options`               |                         | `ApexOptions`                                                                                                                      |               |                                              |
| `override`              |                         |                                                                                                                                    |               |                                              |
| `series`                |                         | `ApexAxisChartSeries \| ApexNonAxisChartSeries`                                                                                    |               |                                              |
| `totalLabel`            | `total-label`           | `String`                                                                                                                           | ""            | Total label, visible only with multiple data |
| `type`                  |                         | `string`                                                                                                                           | "radialBar"   |                                              |
| `width`                 | `width`                 | `string`                                                                                                                           | "100%"        | Width of the chart                           |

#### Methods

| Method                           | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `createChartEl`                  | `(): HTMLElement`                        |
| `extend`                         | `<T>(target: T, source: Partial<T>): T`  |
| `getColor`                       | `(): any`                                |
| `getDataLabelColor`              | `(): string[]`                           |
| `getStrokeColor`                 | `(): { stroke: { colors: string[]; }; }` |
| `init`                           | `(): Promise<void> \| undefined`         |
| `initWatchers`                   | `(): void`                               |
| `isObject`                       | `(item: any): boolean`                   |
| `loadChartThemeFromCssVariables` | `(): void`                               |
| `refresh`                        | `(): Promise<void> \| undefined`         |

# fds-line-chart

#### Properties

| Property                | Attribute               | Type                       | Default       | Description                               |
| ----------------------- | ----------------------- | -------------------------- | ------------- | ----------------------------------------- |
| `$el`                   |                         | `HTMLElement \| null`      | null          |                                           |
| `chart`                 |                         | `ApexCharts \| null`       | null          |                                           |
| `chartTheme`            |                         | `ChartTheme`               |               |                                           |
| `color`                 | `color`                 | `categorical`              | "categorical" | Define palette used by the chart          |
| `series`                |                         | `Object`                   | [name, data]  | Set of data                               |
| `height`                | `height`                | `string`                   | "100%"        | Height of the chart                       |
| `hideDataLabel`         | `hide-data-label`       | `boolean`                  | false         | Hide data labels                          |
| `legendHorizontalAlign` | `legendHorizontalAlign` | `left\|center\|right`      | "center"      | Define the horizontal alignment of legend |
| `legendPosition`        | `legendPosition`        | `top\|right\|bottom\|left` | "bottom"      | Define the position of the legend         |
| `options`               |                         | `ApexOptions`              |               |                                           |
| `override`              |                         |                            |               |                                           |
| `type`                  |                         | `string`                   | "pie"         |                                           |
| `width`                 | `width`                 | `string`                   | "100%"        | Width of the chart                        |
| `xaxis`                 |                         | `Object`                   |               | Define axis X and its properties          |
| `yaxis`                 |                         | `Object`                   |               | Define axis X and its properties          |
| `showToolbar`           | `show-toolbar`          | `boolean`                  | true          | Display toolbar from the top right corner |
| `stroke`                | `stroke`                | `Object`                   |               | Define stroke and its properties          |
| `strokeCurve`           | `stroke-curve`          | `string`                   |               | Define curve type                         |
| `tooltip`               | `tooltip`               | `Object`                   |               | Define tooltip and its properties         |

#### Methods

| Method                           | Type                                     |
| -------------------------------- | ---------------------------------------- |
| `createChartEl`                  | `(): HTMLElement`                        |
| `extend`                         | `<T>(target: T, source: Partial<T>): T`  |
| `getColor`                       | `(): any`                                |
| `getDataLabelColor`              | `(): string[]`                           |
| `getStrokeColor`                 | `(): { stroke: { colors: string[]; }; }` |
| `init`                           | `(): Promise<void> \| undefined`         |
| `initWatchers`                   | `(): void`                               |
| `isObject`                       | `(item: any): boolean`                   |
| `loadChartThemeFromCssVariables` | `(): void`                               |
| `refresh`                        | `(): Promise<void> \| undefined`         |

#### CSS Custom Properties

| Property              | Default                  | Description |
| --------------------- | ------------------------ | ----------- |
| `--fds-radial-label ` | " var(--fds-body-3)"     | Label size  |
| `--fds-radial-value ` | " var(--fds-headline-2)" | Label size  |

<!-- /DOC -->
