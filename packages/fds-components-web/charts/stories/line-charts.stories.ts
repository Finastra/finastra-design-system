const README = require('../README.md');
import type { LineChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-line-chart.json';

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
  },
  tickPlacement: 'between'
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

export default {
  title: 'DATA DISPLAY/Charts/Line Chart',
  component: 'fds-line-chart',
  argTypes: {
    legendPosition: argTypes.legendPosition,
    showToolbar: argTypes['show-toolbar'],
    legendHorizontalAlign: argTypes.legendHorizontalAlign,
    hideDataLabel: argTypes['hide-data-label'],
    color: argTypes.color,
    width: argTypes.width,
    height: argTypes.height,
    strokeCurve: {
      description: 'In line charts, whether to draw smooth, straight or step lines',
      type: 'select',
      table: {
        defaultValue: {
          summary: 'straight'
        }
      },
      options: ['straight', 'smooth', 'stepline']
    }
  },
  args: {
    hideDataLabel: true,
    color: 'categorical',
    width: '450px',
    height: '300px',
    series: demoSeries,
    xaxis: demoXaxis,
    yaxis: demoYaxis
  },
  parameters: {
    chromatic: { delay: 1000 },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: ''
    },
    cssprops
  }
};

const Template: Story<LineChart> = (args) => {
  return html`<fds-line-chart
    stroke-curve=${args.strokeCurve}
    ?hide-data-label=${args.hideDataLabel}
    .legendHorizontalAlign=${args.legendHorizontalAlign}
    .legendPosition=${args.legendPosition}
    ?show-toolbar=${args.showToolbar}
    color=${args.color}
    width=${args.width}
    height=${args.height}
    .series=${args.series}
    .xaxis=${args.xaxis}
    .yaxis=${args.yaxis}
  >
  </fds-line-chart>`;
};

export const Default: Story<LineChart> = Template.bind({});
export const Customized: Story<LineChart> = Template.bind({});
Customized.args = {
  showToolbar: true,
  legendPosition: 'top',
  strokeCurve: 'smooth',
  color: 'focus-2-angular',
  hideDataLabel: false
};
