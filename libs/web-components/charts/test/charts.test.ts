import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/pie-chart.js';
import { PieChart } from '../src/pie-chart.js';
const demoData = [44, 55, 13, 43, 22];
const demoLabels = ['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki'];
describe('Charts', () => {
  it('loads accessibly', async () => {
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
});
