const README = require('../README.md');
import '@finastra/charts';
import type { DonutChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes } from './sb-generated/fds-donut-chart.json';
const demoData = [28, 20, 15, 9, 10, 10, 20];
const demoLabels = ['Housing', 'Daily spending', 'Taxes', 'Other savings', 'Retirement', 'Insurance', 'Debt'];

export default {
  title: 'DATA DISPLAY/Charts/Donut Chart',
  component: 'fds-donut-chart',
  argTypes,
  args: {
    width: '300px',
    height: '300px',
    data: demoData,
    labels: demoLabels,
    color: 'categorical'
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

const Template: Story<DonutChart> = (args) => {
  return html`<fds-donut-chart .legendHorizontalAlign=${args.legendHorizontalAlign}  .legendPosition=${args.legendPosition} ?hide-data-label=${args['hide-data-label']} ?disable-selection=${args['disable-selection']} color=${args.color} width=${args.width} height=${args.height} .data=${args.data} .labels=${args.labels} ></fds-pie-chart>`;
};

export const Default: Story<DonutChart> = Template.bind({});
