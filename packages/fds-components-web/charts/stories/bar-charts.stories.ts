const README = require('../README.md');
import '@finastra/charts';
import type { BarChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes } from './sb-generated/fds-bar-chart.json';

export default {
  title: 'DATA DISPLAY/Charts/Bar Chart',
  component: 'fds-bar-chart',
  argTypes,
  args: {
    width: '500px',
    height: '300px',
    chartTitle: 'Number of Calls',
    stacked: false,
    series: [
      {
        name: 'Legend 1',
        data: [2, 1, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0]
      },
      {
        name: 'Legend 2',
        data: [6, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0, 4]
      }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  parameters: {
    chromatic: { delay: 1000 },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=93523%3A25288'
    }
  }
};

const Template: Story<BarChart> = (args) => {
  return html`<fds-bar-chart
    .chartTitle=${args.chartTitle}
    .horizontal=${args.horizontal}
    width=${args.width}
    height=${args.height}
    .xGrid=${args.xGrid}
    .yGrid=${args.yGrid}
    .series=${args.series}
    .stacked=${args.stacked}
    .stroke=${args.stroke}
    .categories=${args.categories}
    color=${args.color}
  ></fds-bar-chart>`;
};

export const Vertical: Story<BarChart> = Template.bind({});
Vertical.args = {
  yGrid:true,
  series: [
    {
      name: 'Legend 1',
      data: [2, 1, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0]
    }
  ]
};
export const Horizontal: Story<BarChart> = Template.bind({});
Horizontal.args = {
  horizontal: true,
  xGrid:true,
  series: [
    {
      name: 'Legend 1',
      data: [2, 1, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0]
    }
  ]
};

export const MultipleVertical: Story<BarChart> = Template.bind({});
MultipleVertical.args = {
  yGrid:true
}
export const MultipleHorizontal: Story<BarChart> = Template.bind({});
  MultipleHorizontal.args = {
    width: '500px',
    height: '500px',
    horizontal: true,
    xGrid:true,
    series: [
      {
        name: 'Legend 1',
        data: [2, 1, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0]
      },
      {
        name: 'Legend 2',
        data: [6, 1, 5, 3, 2, 3, 4, 2, 6, 2, 0, 4]
      }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }


export const Stacked: Story<BarChart> = Template.bind({})
  Stacked.args = {
    width: '500px',
    height: '500px',
    barTitle: 'Number of Calls',
    horizontal: true,
    xGrid: true,
    yGrid: false,
    stacked: true,
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    series: [
      {
        name: 'Legend 1',
        data: [2, 1, 1, 5, 3]
      },
      {
        name: 'Legend 2',
        data: [6, 1, 5, 3, 2]
      },
      {
        name: 'Legend 3',
        data: [6, 1, 5, 3, 2]
      }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  }

