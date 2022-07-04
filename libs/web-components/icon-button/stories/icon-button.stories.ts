const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/icon-button';
import type { IconButton } from '@finastra/icon-button';

export default {
  title: 'Components/IconButton',
  component: 'fds-icon-button',
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

const Template: Story<IconButton> = ({ name = 'World' }) => {
  return html`<fds-icon-button  .name=${name}></fsd-icon-button>`;
};

export const Default: Story<IconButton> = Template.bind({});
