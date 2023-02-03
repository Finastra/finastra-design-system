const README = require('../README.md');
import '@finastra/button';
import type { ContainedButton } from '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-button.json';

export default {
  title: 'ACTIONS/Button/Contained',
  component: 'fds-button',
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

const Template: Story = ({ icon, label, dense, large, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html`<fds-button
    label=${label}
    icon=${ifDefined(icon)}
    ?secondary=${secondary}
    ?dense=${dense}
    ?large=${large}
    ?disabled=${disabled}
    ?fullwidth=${fullwidth}
    ?trailingIcon=${trailingIcon}
  ></fds-button>`;
};

const FullWidthTemplate: Story = ({ icon, label, dense, large, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html` <style>
      .demo-container {
        width: 300px;
      }
    </style>
    <div class="demo-container">
      <fds-button
        label=${label}
        icon=${ifDefined(icon)}
        ?secondary=${secondary}
        ?dense=${dense}
        ?large=${large}
        ?disabled=${disabled}
        ?fullwidth=${fullwidth}
        ?trailingIcon=${trailingIcon}
      ></fds-button>
    </div>`;
};

export const Default: Story<ContainedButton> = Template.bind({});
Default.args = {
  label: 'Contained',
  icon: 'done'
};

export const Secondary: Story<ContainedButton> = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  icon: 'bolt',
  secondary: true
};

export const TrailingIcon: Story<ContainedButton> = Template.bind({});
TrailingIcon.args = {
  label: 'Contained',
  icon: 'arrow_forward',
  trailingIcon: true
};

export const Dense: Story<ContainedButton> = Template.bind({});
Dense.args = {
  label: 'Dense',
  icon: 'chat',
  dense: true
};

export const Large: Story<ContainedButton> = Template.bind({});
Large.args = {
  label: 'Large',
  icon: 'lock',
  large: true
};

export const Disabled: Story<ContainedButton> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'edit',
  disabled: true
};

export const Fullwidth: Story<ContainedButton> = FullWidthTemplate.bind({});
Fullwidth.args = {
  label: 'Full width',
  icon: 'account_balance',
  fullwidth: true
};
