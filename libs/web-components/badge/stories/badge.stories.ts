const README = require('../README.md');
import '@finastra/badge';
import type { Badge } from '@finastra/badge';
import '@finastra/badge-container';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
      </style>`
  ]
} as Meta;

const Template: Story<Badge> = ({value, color, position }) => {
  return html`
    <fds-badge value=${value} color=${color} position=${position}></fds-badge>
    `;
};


export const Default: Story<Badge> = Template.bind({});
Default.args = {
value: "1",
color: "success"
};
