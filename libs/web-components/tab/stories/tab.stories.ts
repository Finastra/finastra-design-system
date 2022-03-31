const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/tab';
import type { Tab } from '@finastra/tab';

export default {
  title: 'Components/Tab',
  component: 'fds-tab',
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

const Template: Story<Tab> = ({ name = 'World' }) => {
  return html`<fds-tab  .name=${name}></fsd-tab>`;
};

export const Default: Story<Tab> = Template.bind({});
