const README = require('../README.md');
import '@finastra/icon-button';
import type { IconButton } from '@finastra/icon-button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'ACTIONS/Icon Button',
  component: 'fds-icon-button',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story<IconButton> = ({ icon = 'code', dense, disabled }) => {
  return html`<fds-icon-button  .icon=${icon} ?dense=${dense} ?disabled=${disabled}></fds-icon-button>`;
};

export const Default: Story<IconButton> = Template.bind({});
Default.args = {
  disabled: false,
  dense: false
}

export const Dense: Story<IconButton> = Template.bind({});
Dense.args = {
  disabled: false,
  dense: true
}

export const Disabled: Story<IconButton> = Template.bind({});
Disabled.args = {
  disabled: true,
  dense: false
}