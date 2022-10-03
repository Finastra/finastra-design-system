const README = require('../README.md');
import '@finastra/charts';
import type { RadialBarChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './sb-generated/fds-radial-bar-chart.json';

export default {
  title: 'DATA DISPLAY/Charts/Radial Bar Chart',
  component: 'fds-radial-bar-chart',
  argTypes: {
    color: argTypes.color
  },
  args: {
    width: '300px',
    height: '300px',
    data: [80],
    labels: ['Confidence Score (%)'],
    color: 'categorical',
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=93523%3A25288'
    }
  },
};

const Template: Story<RadialBarChart> = (args) => {
  return html`<fds-radial-bar-chart width=${args.width} height=${args.height} color=${args.color} .data=${args.data} .labels=${args.labels} ></fds-radial-bar-chart>`;
};


export const Default: Story<RadialBarChart> = Template.bind({});

export const Sementic1: Story<RadialBarChart> = Template.bind({});
Sementic1.args = {
  color: 'semantic-1'
};
