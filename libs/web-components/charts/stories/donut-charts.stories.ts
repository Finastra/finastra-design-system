const README = require('../README.md');
import '@finastra/charts';
import type { DonutChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './sb-generated/fds-donut-chart.json';
const demoData = [44, 55, 13, 43, 22]
const demoLabels = ['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki']

export default {
  title: 'DATA DISPLAY/Charts/Donut Chart',
  component: 'fds-donut-chart',
  argTypes,
  args: {
    width: '300px',
    height: '300px',
    data: demoData,
    labels: demoLabels,
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

const Template: Story<DonutChart> = ({legendHorizontalAlign = "center",legendPosition="bottom", hideDataLabel=false, width="300px", color="categorical", height="300px", data = demoData, labels = demoLabels }) => {
  return html`<fds-donut-chart  .legendHorizontalAlign=${legendHorizontalAlign}  .legendPosition=${legendPosition} ?hide-data-label=${hideDataLabel} color=${color} width=${width} height=${height}  .data=${data} .labels=${labels} ></fds-pie-chart>`;
};


export const Default: Story<DonutChart> = Template.bind({});
