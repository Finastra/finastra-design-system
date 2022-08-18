const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/filter-tree';
import type { FilterTree } from '@finastra/filter-tree';
import { argTypes, cssprops } from './sb-generated/fds-filter-tree.json';

export default {
  title: 'Components/FilterTree',
  component: 'fds-filter-tree',
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

const Template: Story<FilterTree> = ({ name = 'World' }) => {
  return html`<fds-filter-tree .name=${name}></fds-filter-tree>`;
};

export const Default: Story<FilterTree> = Template.bind({});
