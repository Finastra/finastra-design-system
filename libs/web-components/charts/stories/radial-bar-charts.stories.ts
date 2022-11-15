const README = require('../README.md');
import '@finastra/charts';
import type { RadialBarChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { wcaDocRemover } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-radial-bar-chart.json';

export default {
  title: 'DATA DISPLAY/Charts/Radial Bar Chart',
  component: 'fds-radial-bar-chart',
  argTypes: {
    data: argTypes.data,
    color: argTypes.color,
    height: argTypes.height,
    labels: argTypes.labels,
    width: argTypes.width
  },
  args: {
    width: '300px',
    height: '300px',
    data: [80],
    labels: ['Confidence Score'],
    color: 'categorical',
    hideLabels: false,
    totalLabel: 'Total'
  },
  parameters: {
    docs: {
      description: { component: wcaDocRemover(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=93523%3A25288'
    },
    cssprops
  },
};

const Template: Story<RadialBarChart> = (args) => {
  return html`<fds-radial-bar-chart width=${args.width} height=${args.height} total-label=${args.totalLabel} color=${args.color} .data=${args.data} .labels=${args.labels} ?hide-labels=${args.hideLabels}></fds-radial-bar-chart>`;
};


export const Default: Story<RadialBarChart> = Template.bind({});

export const HideLabel: Story<RadialBarChart> = Template.bind({});
HideLabel.args = {
  color: 'semantic-1',
  hideLabels: true
};

export const Multi: Story<RadialBarChart> = Template.bind({});
Multi.args = {
  data: [84, 60, 90],
  labels: ['Sales', 'Marketing', 'Designer']
};
