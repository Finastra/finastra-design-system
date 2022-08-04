const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/list';
import type { List } from '@finastra/list';
import { argTypes, cssprops } from './sb-generated/fds-list.json';

export default {
  title: 'Components/List',
  component: 'fds-list',
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

const Template: Story<List> = ({ name = 'World' }) => {
  return html`<fds-list .name=${name}></fds-list>`;
};

export const Default: Story<List> = Template.bind({});
