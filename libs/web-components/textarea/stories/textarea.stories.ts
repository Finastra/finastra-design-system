const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/textarea';
import type { Textarea } from '@finastra/textarea';

export default {
  title: 'Components/Textarea',
  component: 'fds-textarea',
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

const Template: Story<Textarea> = ({ name = 'World' }) => {
  return html`<fds-textarea  .name=${name}></fsd-textarea>`;
};

export const Default: Story<Textarea> = Template.bind({});
