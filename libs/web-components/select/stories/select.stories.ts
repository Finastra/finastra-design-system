const README = require('../README.md');
import '@finastra/list';
import '@finastra/select';
import type { Select } from '@finastra/select';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { wcaDocRemover } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-select.json';

export default {
  title: 'FORMS/Select',
  component: 'fds-select',
  argTypes,
  parameters: {
    docs: {
      description: { component: wcaDocRemover(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=165%3A6010'
    },
    cssprops
  }
} as Meta;

const Template: Story<Select> = ({ value, label, icon, disabled = false, dense= false, helper, required = false, validationMessage, selected, items, index }) => {
  return html`<fds-select
  .value=${value}
  .label=${label}
  .icon=${icon}
  ?disabled=${disabled}
  ?dense=${dense}
  .helper=${helper}
  ?required=${required}
  ?validationMessage=${validationMessage}
  ?selected=${selected}
  ?items=${items}
  ?index=${index}>
    <fds-list-item value="0">HR Manager</fds-list-item>
    <fds-list-item value="1">IT Manager</fds-list-item>
    <fds-list-item value="2">CEO</fds-list-item>
    <fds-list-item value="3">Sales Manager</fds-list-item>
    <fds-list-item value="4">Support Manager</fds-list-item>
  </fds-select>`;
};

export const Default: Story<Select> = Template.bind({});
Default.args = {
  label: "Position"
}

const GraphicTemplate: Story<Select> = ({ value, label, icon, disabled = false, dense = false, helper, required = false, validationMessage, selected, items, index }) => {
  return html`<fds-select
  .value=${value}
  .label=${label}
  .icon=${icon}
  ?disabled=${disabled}
  ?dense=${dense}
  .helper=${helper}
  ?required=${required}
  ?validationMessage=${validationMessage}
  ?selected=${selected}
  ?items=${items}
  ?index=${index}>
    <fds-list-item graphic="icon" value="0">HR Manager</fds-list-item>
    <fds-list-item graphic="icon" value="1">IT Manager</fds-list-item>
    <fds-list-item graphic="icon" value="2">CEO</fds-list-item>
    <fds-list-item graphic="icon" value="3">Sales Manager</fds-list-item>
    <fds-list-item graphic="icon" value="4">Support Manager</fds-list-item>
</fds-select>`;
};

export const Graphic: Story<Select> = GraphicTemplate.bind({});
Graphic.args = {
  label: "Position",
  icon: "apps"
};

export const Disabled: Story<Select> = GraphicTemplate.bind({});
Disabled.args = {
  label: "Position",
  icon: "apps",
  disabled: true
};

const ValidationTemplate: Story<Select> = ({ value, label, icon, disabled = false, dense = false, helper, required = false, validationMessage, selected, items, index }) => {
  return html`<fds-select
  .value=${value}
  .label=${label}
  .icon=${icon}
  ?disabled=${disabled}
  ?dense=${dense}
  .helper=${helper}
  ?required=${required}
  ?validationMessage=${validationMessage}
  ?selected=${selected}
  ?items=${items}
  ?index=${index}>
    <fds-list-item selected></fds-list-item>
    <fds-list-item graphic="icon" value="0">HR Manager</fds-list-item>
    <fds-list-item graphic="icon" value="1">IT Manager</fds-list-item>
    <fds-list-item graphic="icon" value="2">CEO</fds-list-item>
    <fds-list-item graphic="icon" value="3">Sales Manager</fds-list-item>
    <fds-list-item graphic="icon" value="4">Support Manager</fds-list-item>
</fds-select>`;
};

export const Validation: Story<Select> = ValidationTemplate.bind({});
Validation.args = {
  label: "required (error)",
  icon: "apps",
  required: true,
  validationMessage: "This Field is Required"
};
