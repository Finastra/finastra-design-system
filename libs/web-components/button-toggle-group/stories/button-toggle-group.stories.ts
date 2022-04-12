const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle-group';
import type { ButtonToggleGroup } from '@finastra/button-toggle-group';

export default {
  title: 'Components/ButtonToggleGroup',
  component: 'fds-button-toggle-group',
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

const Template: Story<ButtonToggleGroup> = ({ name = 'World' }) => {
  return html`<fds-button-toggle-group  .name=${name}></fsd-button-toggle-group>`;
};

export const Default: Story<ButtonToggleGroup> = Template.bind({});
