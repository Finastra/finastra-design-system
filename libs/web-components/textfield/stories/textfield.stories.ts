const README = require('../README.md');
import '@finastra/textfield';
import type { Textfield } from '@finastra/textfield';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-textfield.json';

export default {
  title: 'FORMS/Textfield',
  component: 'fds-textfield',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=105319%3A31992'
    },
    cssprops
  }
} as Meta;

const Template: Story<Textfield> = ({ label, placeholder, icon, disabled, dense, required, iconTrailing, helper, labelInside}) => {
  return html`<fds-textfield label=${label} placeholder=${placeholder} icon=${icon} ?disabled=${disabled} ?dense=${dense} ?required=${required} iconTrailing=${iconTrailing} helper=${helper} ?labelInside=${labelInside}></fds-textfield>`;
};

const ValidationTemplate: Story<Textfield> = ({ label, icon, helper, type, validationMessage, pattern}) => {
  return html`<fds-textfield label=${label} icon=${icon} type=${type} validationMessage=${validationMessage} ?helper=${helper} pattern=${pattern}></fds-textfield>`;
};

const ActionButtonTemplate: Story<Textfield> = ({ label, icon, type, helper, showActionButton}) => {
  return html`
    <fds-textfield icon="lock_outline" showActionButton=${showActionButton} label=${label} type=${type} helper=${helper}>
  <mwc-icon-button slot="actionButton" icon=${icon}></mwc-icon-button>
</fds-textfield>
   `;
};

const NativeDatePickerTemplate: Story<Textfield> = ({ value, label, placeholder, icon, type, disabled, dense, required, iconTrailing, helper, labelInside}) => {
  return html`<fds-textfield value=${value} label=${label} placeholder=${placeholder} icon=${icon} type=${type} ?disabled=${disabled} ?dense=${dense} ?required=${required} iconTrailing=${iconTrailing} helper=${helper} ?labelInside=${labelInside}></fds-textfield>`;
};

export const Default: Story<Textfield> = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  icon: 'person_outline',
  helper: "Helper text"
};

export const Dense: Story<Textfield> = Default.bind({});
Dense.args = {
  dense: true,
  icon: 'person_outline'
};

export const Password: Story<Textfield> = ActionButtonTemplate.bind({});
Password.args = {
  label: 'Enter your password',
  type: 'password',
  helper: "Helper text",
  showActionButton: true,
  icon: 'visibility_off'
};

export const IconTrailing: Story<Textfield> = Template.bind({});
IconTrailing.args = {
  label: 'Icon trailing',
  helper: "helper text",
  icon: 'event',
  iconTrailing: "favorite_outline"
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
  icon: 'mail_outline'
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

export const LabelInside: Story<Textfield> = Template.bind({});
LabelInside.args = {
  label: 'Label',
  labelInside: true,
  placeholder: 'Placeholder',
  icon: 'person_outline',
  helper: "Helper text"
}

export const NativeDatePicker: Story<Textfield> = NativeDatePickerTemplate.bind({});
NativeDatePicker.args = {
  dense: true,
  type: 'date',
  icon: 'calendar_today',
  label: 'Datepicker',
  value: '2017-05-24'
};

export const NativeTimePicker: Story<Textfield> = NativeDatePickerTemplate.bind({});
NativeTimePicker.args = {
  dense: true,
  type: 'time',
  icon: 'schedule',
  label: 'Timepicker',
  value: '07:30'
};

export const NativeDateTimePicker: Story<Textfield> = NativeDatePickerTemplate.bind({});
NativeDateTimePicker.args = {
  dense: true,
  type: 'datetime-local',
  icon: 'calendar_today',
  label: 'Datepicker',
  value: '2017-05-24T10:30'
};

export const NativeDatePickerDisabled: Story<Textfield> = NativeDatePickerTemplate.bind({});
NativeDatePickerDisabled.args = {
  dense: true,
  type: 'date',
  icon: 'calendar_today',
  label: 'Datepicker',
  disabled: true,
  value: '2017-05-24'
};
