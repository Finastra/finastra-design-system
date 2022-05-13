# Charts

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/charts?style=for-the-badge)](https://www.npmjs.com/package/@finastra/charts)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/charts?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/charts')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-charts-default)

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

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/charts@latest/dist/src/charts.js?module"></script>

<fds-pie-chart id="pieChart" width="380"></fds-pie-chart>
<script>
    const pieCharts = document.querySelectorAll('#pieChart');
    pieCharts.forEach((pieChart) => {
        pieChart.data = [44, 55, 13, 43, 22];
        pieChart.labels = ['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki'];
    })
</script>
```