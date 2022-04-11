const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle';
import type { ButtonToggle } from '@finastra/button-toggle';

export default {
  title: 'Components/ButtonToggle',
  component: 'fds-button-toggle',
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

const Template: Story<ButtonToggle> = ({ name = 'World' }) => {
  return html`<fds-button-toggle  .name=${name}></fsd-button-toggle>`;
};

export const Default: Story<ButtonToggle> = Template.bind({});
