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

const Template: Story<IconButton> = ({ icon = 'code', dense, disabled, primary, secondary }) => {
  return html`<fds-icon-button  .icon=${icon} ?dense=${dense} ?disabled=${disabled} ?primary=${primary} ?secondary=${secondary}></fds-icon-button>`;
};

export const Default: Story<IconButton> = Template.bind({});
Default.args = {
  disabled: false,
  dense: false,
  primary: false,
  secondary: false
}

export const Primary: Story<IconButton> = Template.bind({});
Primary.args = {
  disabled: false,
  dense: false,
  primary: true,
  secondary: false
}

export const Secondary: Story<IconButton> = Template.bind({});
Secondary.args = {
  disabled: false,
  dense: false,
  primary: false,
  secondary: true
}

export const Disabled: Story<IconButton> = Template.bind({});
Disabled.args = {
  disabled: true,
  dense: false,
  primary: false,
  secondary: false
}

export const Dense: Story<IconButton> = Template.bind({});
Dense.args = {
  disabled: false,
  dense: true,
  primary: false,
  secondary: false
}