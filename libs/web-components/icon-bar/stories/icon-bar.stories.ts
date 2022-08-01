const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/icon-bar';
import type { IconBar } from '@finastra/icon-bar';
import { argTypes, cssprops } from './sb-generated/fds-icon-bar.json';

export default {
  title: 'Components/IconBar',
  component: 'fds-icon-bar',
  argTypes,
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
  ],
  cssprops
} as Meta;

const Template: Story<IconBar> = ({ name = 'World' }) => {
  return html`<fds-icon-bar .name=${name}></fds-icon-bar>`;
};

export const Default: Story<IconBar> = Template.bind({});
