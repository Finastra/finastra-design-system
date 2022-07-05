const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/dialog';
import type { Dialog } from '@finastra/dialog';

export default {
  title: 'Components/Dialog',
  component: 'fds-dialog',
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

const Template: Story<Dialog> = ({ name = 'World' }) => {
  return html`<fds-dialog  .name=${name}></fsd-dialog>`;
};

export const Default: Story<Dialog> = Template.bind({});
