const README = require('../README.md');
import '@finastra/alert-message';
import type { AlertMessage } from '@finastra/alert-message';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
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

const Template: Story<AlertMessage> = ({ type, title, description, icon, withoutIcon=false }) => {
  return html`  <fds-alert-message type=${type} title=${title} description=${description} icon=${icon} withoutIcon=${withoutIcon}>
        <fds-button slot="primaryAction" label="Button"></fds-button>
    <fds-text-button slot="secondaryAction" label="hey"></fds-text-button>
  </fds-alert-message>`;
};

export const Default: Story<AlertMessage> = Template.bind({});
