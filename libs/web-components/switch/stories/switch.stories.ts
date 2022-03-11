const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/switch';
import type { Switch } from '@finastra/switch';

export default {
  title: 'Components/Switch',
  component: 'fds-switch',
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

const Template: Story<Switch> = ({ name = 'World' }) => {
  return html`<fds-switch  .name=${name}></fsd-switch>`;
};

export const Default: Story<Switch> = Template.bind({});
