const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/badge';
import type { Badge } from '@finastra/badge';

export default {
  title: 'Components/Badge',
  component: 'fds-badge',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<Badge> = ({ name = 'World' }) => {
  return html`<fds-badge  .name=${name}></fsd-badge>`;
};

export const Default: Story<Badge> = Template.bind({});
