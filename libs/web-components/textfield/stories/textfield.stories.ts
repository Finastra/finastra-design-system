const README = require('../README.md');
import '@finastra/textfield';
import type { Textfield } from '@finastra/textfield';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'FORMS/Textfield',
  component: 'fds-textfield',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  },
} as Meta;

const Template: Story<Textfield> = ({ label, icon, disabled, required, iconTrailing,helper}) => {
  return html`<fds-textfield label=${label} icon=${icon} ?disabled=${disabled} ?required=${required} iconTrailing=${iconTrailing} helper=${helper}></fds-textfield>`;
};

const ValidationTemplate: Story<Textfield> = ({ label, icon, helper, type, validationMessage,pattern}) => {
  return html`<fds-textfield label=${label} icon=${icon} type=${type} validationMessage=${validationMessage} ?helper=${helper} pattern=${pattern}></fds-textfield>`;
};

const ActionButtonTemplate: Story<Textfield> = ({ label, icon, type, helper, showActionButton}) => {
  return html`
    <fds-textfield showActionButton=${showActionButton} label=${label} type=${type} helper=${helper}>
  <mwc-icon-button slot="actionButton" icon=${icon}></mwc-icon-button>
</fds-textfield>
   `;
};

export const Default: Story<Textfield> = Template.bind({});
Default.args = {
  label: 'Default',
  icon: 'event',
  helper: "helper text"
};

export const Password: Story<Textfield> = ActionButtonTemplate.bind({});
Password.args = {
  label: 'Enter your password',
  type: 'password',
  helper: "helper text",
  showActionButton: true,
  icon: 'visibility_off'
};

export const IconTrailing: Story<Textfield> = Template.bind({});
IconTrailing.args = {
  label: 'Icon trailing',
  helper: "helper text",
  icon: 'event',
  iconTrailing: "favorite"
};

export const Required: Story<Textfield> = Template.bind({});
Required.args = {
  label: 'Required',
  icon: 'event',
  helper: "helper text",
  required: true
};


export const ErrorMessage: Story<Textfield> = ValidationTemplate.bind({});
ErrorMessage.args = {
  type: 'email',
  validationMessage: 'Not a valid email',
  label: 'Enter your email',
  icon: 'event'
};

export const Regex: Story<Textfield> = ValidationTemplate.bind({});
Regex.args = {
  label: 'Enter a number',
  icon: 'event',
  validationMessage: 'Should only be numbers',
  pattern:"[0-9]+"
};

export const Disabled: Story<Textfield> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'event',
  disabled: true
};
