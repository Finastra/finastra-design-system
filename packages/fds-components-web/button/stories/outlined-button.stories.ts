const README = require('../README.md');
import '@finastra/button';
import { OutlinedButton } from '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-outlined-button.json';

export default {
  title: 'ACTIONS/Button/Outlined',
  component: 'fds-outlined-button',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story = ({ icon, label, dense, large, disabled, secondary = false, gradient = false, success = false, error = false, onDark = false, fullwidth = false, trailingIcon = false }) => {
  return html`<fds-outlined-button
    .label=${label}
    .icon=${ifDefined(icon)}
    ?secondary=${secondary}
    ?gradient=${gradient}
    ?success=${success}
    ?error=${error}
    ?on-dark=${onDark}
    ?dense=${dense}
    ?large=${large}
    ?disabled=${disabled}
    ?fullwidth=${fullwidth}
    ?trailingIcon=${trailingIcon}
  ></fds-outlined-button>`;
};

const FullWidthTemplate: Story = ({ icon, label, dense, large, disabled, secondary = false, gradient = false, success = false, error = false, onDark = false, fullwidth = false, trailingIcon = false }) => {
  return html` <style>
      .demo-container {
        width: 300px;
      }
    </style>
    <div class="demo-container">
      <fds-outlined-button
        .label=${label}
        .icon=${ifDefined(icon)}
        ?secondary=${secondary}
        ?gradient=${gradient}
        ?success=${success}
        ?error=${error}
        ?on-dark=${onDark}
        ?dense=${dense}
        ?large=${large}
        ?disabled=${disabled}
        ?fullwidth=${fullwidth}
        ?trailingIcon=${trailingIcon}
      ></fds-outlined-button>
    </div>`;
};

const DarkTemplate: Story = ({ icon, label, dense, large, disabled, secondary = false, gradient = false, success = false, error = false, onDark = false, fullwidth = false, trailingIcon = false }) => {
  return html` <style>
      .demo-container {
        background: linear-gradient(to right, #0A0014, #4B0254);
        width: 300px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <div class="demo-container">
      <fds-outlined-button
        .label=${label}
        .icon=${ifDefined(icon)}
        ?secondary=${secondary}
        ?gradient=${gradient}
        ?success=${success}
        ?error=${error}
        ?on-dark=${onDark}
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

export const Success: Story<OutlinedButton> = Template.bind({});
Success.args = {
  label: 'Success',
  icon: 'check',
  success: true
};

export const Gradient: Story<OutlinedButton> = Template.bind({});
Gradient.args = {
  label: 'Gradient',
  icon: 'add',
  gradient: true
};

export const Error: Story<OutlinedButton> = Template.bind({});
Error.args = {
  label: 'Error',
  icon: 'close',
  error: true
};

export const OnDark: Story<OutlinedButton> = DarkTemplate.bind({});
OnDark.args = {
  label: 'On dark',
  icon: 'dark_mode',
  onDark: true
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
