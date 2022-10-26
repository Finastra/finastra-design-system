const README = require('../README.md');
import '@finastra/button';
import { OutlinedButton } from '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-outlined-button.json';

export default {
  title: 'ACTIONS/Button/Outlined',
  component: 'fds-outlined-button',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story = ({ icon, label, dense, large, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html`<fds-outlined-button
    .label=${label}
    .icon=${ifDefined(icon)}
    ?secondary=${secondary}
    ?dense=${dense}
    ?large=${large}
    ?disabled=${disabled}
    ?fullwidth=${fullwidth}
    ?trailingIcon=${trailingIcon}
  ></fds-outlined-button>`;
};

const FullWidthTemplate: Story = ({ icon, label, dense, large, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html`
  <style>
    .demo-container {
      width: 300px;
    }
  </style>
  <div class="demo-container">
    <fds-outlined-button
      .label=${label}
      .icon=${ifDefined(icon)}
      ?secondary=${secondary}
      ?dense=${dense}
      ?large=${large}
      ?disabled=${disabled}
      ?fullwidth=${fullwidth}
      ?trailingIcon=${trailingIcon}
    ></fds-outlined-button>
  </div>`;
};

export const Default: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Outlined',
  icon: 'done'
};

export const Secondary: Story<OutlinedButton> = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  icon: 'bolt',
  secondary: true
};

export const TrailingIcon: Story<OutlinedButton> = Template.bind({});
TrailingIcon.args = {
  label: 'Contained',
  icon: 'arrow_forward',
  trailingIcon: true
};

export const Dense: Story<OutlinedButton> = Template.bind({});
Dense.args = {
  label: 'Dense',
  icon: 'chat',
  dense: true
};

export const Large: Story<OutlinedButton> = Template.bind({});
Large.args = {
  label: 'Large',
  icon: 'lock',
  large: true
};

export const Disabled: Story<OutlinedButton> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'edit',
  disabled: true
};

export const FullWidth: Story<OutlinedButton> = FullWidthTemplate.bind({});
FullWidth.args = {
  label: 'Full width',
  icon: 'account_balance',
  fullwidth: true
};
