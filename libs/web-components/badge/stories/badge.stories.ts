const README = require('../README.md');
import '@finastra/badge';
import { Badge } from '@finastra/badge';
import '@finastra/badge-container';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  argTypes: {
    color: {
      description: "Badge color",
      type: "select",
      table: {
        defaultValue: {
          summary: 'outlined'
        }
      },
      options: ["primary","secondary","success","error","white","outlined"]
    },
    position: {
      description: "Badge position",
      type: "select",
      table: {
        defaultValue: {
          summary: 'center'
        }
      },
      options: ["topLeft","topRight","center"]
    },
    type: {
      description: "Badge type",
      type: "select",
      table: {
        defaultValue: {
          summary: ''
        }
      },
      options: ["", "indicator"]
    },
    value: {
      control: "text",
      type: 'string',

      description: "Badge value",
      table: {
        defaultValue: {
          summary: ''
        }
      },
    },
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<Badge> = ({value, color, position,type }) => {
  return html`
    <fds-badge value=${value} color=${color} position=${position} type=${type}></fds-badge>
    `;
};


export const Default: Story<Badge> = Template.bind({});
Default.args = {
  value: "123",
  color: "success"
};


export const Indicator: Story<Badge> = Template.bind({});
Indicator.args = {
  type: 'indicator',
  color: "success"
};
