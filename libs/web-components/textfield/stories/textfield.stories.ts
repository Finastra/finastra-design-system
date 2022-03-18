const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/textfield';
import type { Textfield } from '@finastra/textfield';

export default {
  title: 'Components/Textfield',
  component: 'fds-textfield',
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

const Template: Story<Textfield> = ({ name = 'World' }) => {
  return html`<fds-textfield  .name=${name}></fsd-textfield>`;
};

export const Default: Story<Textfield> = Template.bind({});
