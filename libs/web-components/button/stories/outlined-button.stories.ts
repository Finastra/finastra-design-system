const README = require('../README.md');
import '@finastra/button';
import { OutlinedButton } from '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Button/Outlined',
  component: 'fds-button',
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

const Template = ({ icon, label, dense, disabled, secondary = false, fullwidth = false }) => {
  return html`<fds-outlined-button
    .label=${label}
    .icon=${ifDefined(icon)}
    ?secondary=${secondary}
    ?dense=${dense}
    ?disabled=${disabled}
    ?fullwidth=${fullwidth}
  ></fds-outlined-button>`;
};

export const Default: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Outlined',
  icon: 'forum'
};

export const Secondary: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Secondary',
  icon: 'forum',
  secondary: true
};

export const Dense: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Outlined',
  icon: 'forum',
  dense: true
};

export const Disabled: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Outlined',
  icon: 'forum',
  disabled: true
};

export const FullWidth: Story<OutlinedButton> = Template.bind({});
Default.args = {
  label: 'Full width',
  icon: 'forum',
  fullwidth: true
};