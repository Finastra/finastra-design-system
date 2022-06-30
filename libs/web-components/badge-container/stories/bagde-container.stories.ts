const README = require('../README.md');
import '@finastra/badge-container';
import type { badgeContainer } from '@finastra/badge-container';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/badgeContainer',
  component: 'fds-badge-container',
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

const Template: Story<badgeContainer> = ({ name = 'World' }) => {
  return html`<fds-badge-container  .name=${name}></fds-badge-container>`;
};

export const Default: Story<badgeContainer> = Template.bind({});
