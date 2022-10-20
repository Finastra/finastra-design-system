const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/alert-message';
import type { AlertMessage } from '@finastra/alert-message';
import { argTypes, cssprops } from './sb-generated/fds-alert-message.json';

export default {
  title: 'Components/AlertMessage',
  component: 'fds-alert-message',
  argTypes,
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

const Template: Story<AlertMessage> = ({  }) => {
  return html`<fds-alert-message ></fds-alert-message>`;
};

export const Default: Story<AlertMessage> = Template.bind({});
