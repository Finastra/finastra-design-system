const README = require('../README.md');
import '@finastra/breadcrumb';
import type { Breadcrumb } from '@finastra/breadcrumb';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-breadcrumb.json';

export default {
  title: 'NAVIGATION/Breadcrumb',
  component: 'fds-breadcrumb',
  argTypes,
  args: {
    items: ['Link 1', 'Link 2', 'Link 3']
  },
  parameters: {
    actions: {
      handles: ['selected']
    },
    docs: {
      description: { component: README }
    },
    cssprops
  },
} as Meta;

const Template: Story<Breadcrumb> = ({ items }) => {
  return html`<fds-breadcrumb items=${items}></fds-breadcrumb>`;
};

export const Default: Story<Breadcrumb> = Template.bind({});
