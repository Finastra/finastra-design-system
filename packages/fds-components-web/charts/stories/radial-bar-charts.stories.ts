const README = require('../README.md');
import '@finastra/charts';
import type { RadialBarChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-radial-bar-chart.json';

export default {
  title: 'DATA DISPLAY/Charts/Radial Bar Chart',
  component: 'fds-radial-bar-chart',
  argTypes: {
    data: argTypes.data,
    color: argTypes.color,
    labels: argTypes.labels,
    totalLabel: argTypes['total-label'],
    hideLabels: argTypes['hide-labels'],
    dense: argTypes.dense,
    extraDense: argTypes['extra-dense'],
    large: argTypes.large
  },
  args: {
    data: [80],
    labels: ['Confidence Score'],
    color: 'categorical',
    hideLabels: false,
    totalLabel: 'Total',
    dense: false,
    large: false,
    extraDense: false
  },
  parameters: {
    chromatic: { delay: 1000 },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=93523%3A25288'
    },
    cssprops
  }
};

const Template: Story<RadialBarChart> = (args) => {
  return html`<fds-radial-bar-chart
    ?extra-dense=${args.extraDense}
    ?dense=${args.dense}
    ?large=${args.large}
    total-label=${args.totalLabel}
    color=${args.color}
    .data=${args.data}
    .labels=${args.labels}
    ?hide-labels=${args.hideLabels}
  ></fds-radial-bar-chart>`;
};

export const Default: Story<RadialBarChart> = Template.bind({});

export const HideLabel: Story<RadialBarChart> = Template.bind({});
HideLabel.args = {
  color: 'semantic-1',
  hideLabels: true
};

export const ExtraDense: Story<RadialBarChart> = Template.bind({});
ExtraDense.args = {
  extraDense: true,
  hideLabels: true
};

export const Dense: Story<RadialBarChart> = Template.bind({});
Dense.args = {
  dense: true,
  hideLabels: true
};

export const Large: Story<RadialBarChart> = Template.bind({});
Large.args = {
  large: true,
  hideLabels: true
};

export const Multi: Story<RadialBarChart> = Template.bind({});
Multi.args = {
  data: [84, 60, 90],
  labels: ['Sales', 'Marketing', 'Designer']
};
