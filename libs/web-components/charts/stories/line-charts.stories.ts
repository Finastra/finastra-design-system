const README = require('../README.md');
import '@finastra/charts';
import type { LineChart } from '@finastra/charts/';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
// import { argTypes, cssprops } from './sb-generated/fds-radial-bar-chart.json';

const demoSeries = [
  {
    name: "High - 2023",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2023",
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
    show: true,
  },
};

export default {
  title: 'DATA DISPLAY/Charts/Line Chart',
  component: 'fds-line-chart',
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
    series: {
      description: "Data of the chart",
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
      // options: ["semantic-1", "semantic-2", "semantic-3", "categorical", "focus-1", "focus-2", "focus-1-angular", "focus-2-angular", "sequential-1", "sequential-2"]
    },
    // hideDataLabel: {
    //   control: "boolean",
    //   type: 'boolean',

    //   description: "Hide data labels",
    //   table: {
    //     defaultValue: {
    //       summary: false
    //     }
    //   },
    // },
    // hideToolbar: {
    //   control: "boolean",
    //   type: 'boolean',

    //   description: "Hide chart's toolbar",
    //   table: {
    //     defaultValue: {
    //       summary: false
    //     }
    //   },
    // },
    strokeCurve: {
      description: "Define the stroke curve type",
      type: "select",
      table: {
        defaultValue: {
          summary: 'straight'
        }
      },
      options: ["straight", "smooth", "stepline"]
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
      options: ['right', 'left', 'center']
    }   
  },
  args: {
    width: '300px',
    height: '300px',
    series: demoSeries,
    xaxis: demoXaxis,
    yaxis: demoYaxis,
    hideToolbar: false,
    color: 'categorical',
    legendHorizontalAlign: 'center',
    legendPosition: 'bottom',
    hideDataLabel: false,
    strokeCurve: 'straight'
  },
  parameters: {
    chromatic: { delay: 1000 },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/F40kn56iadty0uqbctUxuZ/Design-Revamp?node-id=2294%3A15572&t=cIUpvlpQ9nExM3oq-0'
    },
    // cssprops
  },
};

const Template: Story<LineChart> = ({ legendHorizontalAlign = "center", legendPosition = "bottom", hideDataLabel = false, hideToolbar=false, strokeCurve='straight', width = "600px", color = "categorical", height = "600px", series = demoSeries, xaxis = demoXaxis, yaxis = demoYaxis}) => {
  return html`<fds-line-chart .legendHorizontalAlign=${legendHorizontalAlign} .legendPosition=${legendPosition}
  ?hide-data-label=${hideDataLabel} ?hide-toolbar=${hideToolbar} ?stroke-curve=${strokeCurve} color=${color} width=${width} height=${height} .series=${series} .xaxis=${xaxis} .yaxis=${yaxis}>
</fds-line-chart>`;
};

export const Default: Story<LineChart> = Template.bind({}, {color: 'categorical', series: demoSeries, xaxis: demoXaxis, yaxis: demoYaxis});
