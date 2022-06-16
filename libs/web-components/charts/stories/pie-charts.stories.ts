const README = require('../README.md');
import '@finastra/charts';
import type { PieChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
const demoData = [44, 55, 13, 43, 22]
const demoLabels = ['Apple', 'Mango', 'Orange', 'Watermelon', 'Wiki']

export default {
  title: 'DATA DISPLAY/Charts/Pie Chart',
  component: 'fds-pie-chart',
  argTypes: {
    width: {
      control: "text",
      type: 'string',

      description: "Width of the chart",
      table: {
        defaultValue: {
          summary: '100%'
        }
      },
    },
    height: {
      control: "text",
      type: 'string',

      description: "Height of the chart",
      table: {
        defaultValue: {
          summary: '100%'
        }
      },
    },
    data: {
      description: "Data of the chart",
      table: {
        defaultValue: {
          summary: '[]'
        }
      },
    },
    labels: {
      description: "Labels correspond to value in data array",
      table: {
        defaultValue: {
          summary: '[]'
        }
      },
    },
    color: {
      description: "Define type color of the chart",
      type: "select",
      table: {
        defaultValue: {
          summary: 'categorical'
        }
      },
      options: ["semantic-1", "semantic-2", "semantic-3", "categorical", "focus-1", "focus-2", "focus-1-angular", "focus-2-angular", "sequential-1", "sequential-2"]
    },
    hideDataLabel: {
      control: "boolean",
      type: 'boolean',

      description: "Height of the chart",
      table: {
        defaultValue: {
          summary: false
        }
      },
    },
    legendPosition: {
      description: "Define the position of legend",
      type: "select",
      table: {
        defaultValue: {
          summary: 'bottom'
        }
      },
      options: ["top", "right", "bottom", "left"]
    },
    legendHorizontalAlign: {
      description: "Define the horizontal alignment of legend",
      type: "select",
      table: {
        defaultValue: {
          summary: 'center'
        }
      },
      options: ["right", "left", "center"]
    },
  },
  args: {
    width: '300px',
    height: '300px',
    data: demoData,
    labels: demoLabels,
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=91884%3A21858'
    }
  },
};

const Template: Story<PieChart> = ({legendHorizontalAlign = "center",legendPosition="bottom", hideDataLabel=false, width="300px", color="categorical", height="300px", data = demoData, labels = demoLabels }) => {
  return html`<fds-pie-chart  .legendHorizontalAlign=${legendHorizontalAlign}  .legendPosition=${legendPosition} ?hide-data-label=${hideDataLabel} color=${color} width=${width} height=${height}  .data=${data} .labels=${labels} ></fds-pie-chart>`;
};


export const Default: Story<PieChart> = Template.bind({});
