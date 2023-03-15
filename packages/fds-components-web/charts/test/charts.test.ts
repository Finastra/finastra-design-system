import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/line-chart';
import type { LineChart } from '../src/line-chart';
import '../src/pie-chart';
import type { PieChart } from '../src/pie-chart';

const demoData = [44, 55, 13, 43, 22];
const demoLabels = ['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki'];
const demoSeries = [
  {
    name: 'High - 2023',
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: 'Low - 2023',
    data: [12, 11, 14, 18, 17, 13, 13]
  }
];
const demoXaxis = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  title: {
    text: 'Month',
    offsetY: 80
  },
  labels: {
    show: true
  }
};
const demoYaxis = {
  min: 5,
  max: 40,
  title: {
    text: 'Temperature'
  },
  axisTicks: {
    show: true
  },
  axisBorder: {
    show: true
  }
};

describe('Charts', () => {
  // PieChart
  it('loads accessibly - PieChart', async () => {
    const el: PieChart = await fixture(html`<fds-pie-chart .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`);

    await elementUpdated(el);
    await expect(el.data).to.equal(demoData);
    await expect(el.labels).to.equal(demoLabels);
    await expect(el).to.be.accessible();
  });

  it('should disableSelection', async () => {
    const el: PieChart = await fixture(
      html`<fds-pie-chart
        legendPosition="top"
        legendHorizontalAlign="center"
        width="300px"
        height="300px"
        theme="dark"
        color="semantic-1"
        disable-selection
        .data=${demoData}
        .labels=${demoLabels}
      ></fds-pie-chart>`
    );

    await elementUpdated(el);
    await expect(el._defaultOptions.plotOptions.pie.expandOnClick).to.be.false;
    await expect(el.disableSelection).to.be.true;
  });

  it('should enableSelection', async () => {
    const el: PieChart = await fixture(html`<fds-pie-chart disable-selection .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`);
    el.disableSelection = false;
    await elementUpdated(el);
    await expect(el._defaultOptions.plotOptions.pie.expandOnClick).to.be.true;
  });

  it('should toggleSelected', async () => {
    const el: PieChart = await fixture(html`<fds-pie-chart .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`);
    await elementUpdated(el);
    el.toggleSelected();
    await expect(el.classList.contains('selected')).to.be.false;
  });

  it('should hideLabel', async () => {
    const el: PieChart = await fixture(html`<fds-pie-chart hide-data-label .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`);
    await elementUpdated(el);
    await expect(el.hideDataLabel).to.be.true;
  });

  it('should change color', async () => {
    const el: PieChart = await fixture(html`<fds-pie-chart color="semantic-1" .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`);
    await elementUpdated(el);
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'semantic-2';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'semantic-3';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-1';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-2';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-1-angular';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-2-angular';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'sequential-1';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'sequential-2';
    await expect(el.getColor()).to.not.be.empty;
    await expect(el.getStrokeColor()).to.not.be.empty;
  });

  it('should change theme', async () => {
    const el: PieChart = await fixture(
      html`<fds-pie-chart theme="dark" color="categorical" .data=${demoData} .labels=${demoLabels}></fds-pie-chart>`
    );
    await elementUpdated(el);
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'semantic-2';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'semantic-3';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-1';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-2';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-1-angular';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'focus-2-angular';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'sequential-1';
    await expect(el.getColor()).to.not.be.empty;
    el.color = 'sequential-2';
    await expect(el.getColor()).to.not.be.empty;
    await expect(el.getStrokeColor()).to.not.be.empty;
  });

  // Line Chart
  it('loads accessibly - LineChart', async () => {
    const lineChart: LineChart = await fixture(
      html`<fds-line-chart  .series=${demoSeries} .xaxis=${demoXaxis} .yaxis=${demoYaxis} ></fds-pie-chart>`
    );

    await elementUpdated(lineChart);
    await expect(lineChart.series).to.equal(demoSeries);
    await expect(lineChart.xaxis).to.equal(demoXaxis);
    await expect(lineChart.yaxis).to.equal(demoYaxis);
    await expect(lineChart).to.be.accessible();
  });

  it('should disable data labels - LineChart', async () => {
    const lineChart: LineChart = await fixture(
      html`<fds-line-chart hide-data-label .series=${demoSeries} .xaxis=${demoXaxis} .yaxis=${demoYaxis}></fds-line-chart>`
    );
    await elementUpdated(lineChart);
    await expect(lineChart.hideDataLabel).to.be.true;
  });

  it('should display toolbar - LineChart', async () => {
    const lineChart: LineChart = await fixture(
      html`<fds-line-chart show-toolbar .series=${demoSeries} .xaxis=${demoXaxis} .yaxis=${demoYaxis}></fds-line-chart>`
    );
    await elementUpdated(lineChart);
    await expect(lineChart.showToolbar).to.be.true;
  });

  it('should set smooth stroke - LineChart', async () => {
    const lineChart: LineChart = await fixture(
      html`<fds-line-chart stroke-curve="smooth" .series=${demoSeries} .xaxis=${demoXaxis} .yaxis=${demoYaxis}></fds-line-chart>`
    );
    await elementUpdated(lineChart);
    await expect(lineChart.strokeCurve).to.be.string;
  });
});
