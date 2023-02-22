const README = require('../README.md');
import '@finastra/button';
import '@finastra/dialog';
import '@finastra/list';
import '@finastra/select';
import type { Select } from '@finastra/select';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-select.json';

export default {
  title: 'FORMS/Select',
  component: 'fds-select',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=165%3A6010'
    },
    cssprops
  }
} as Meta;

const Template: Story<Select> = ({
  value,
  label,
  icon,
  disabled = false,
  dense = false,
  helper,
  required = false,
  validationMessage,
  selected,
  items,
  index,
  labelInside = false,
  fixedMenuPosition
}) => {
  return html`<fds-select
    .value=${value}
    .label=${label}
    .icon=${icon}
    ?disabled=${disabled}
    ?dense=${dense}
    ?labelInside=${labelInside}
    .helper=${helper}
    ?required=${required}
    ?validationMessage=${validationMessage}
    ?selected=${selected}
    ?items=${items}
    ?index=${index}
    ?fixedMenuPosition=${fixedMenuPosition}
  >
    <fds-list-item value="0">HR Manager</fds-list-item>
    <fds-list-item value="1">IT Manager</fds-list-item>
    <fds-list-item value="2">CEO</fds-list-item>
    <fds-list-item value="3">Sales Manager</fds-list-item>
    <fds-list-item value="4">Support Manager</fds-list-item>
  </fds-select>`;
};

export const Default: Story<Select> = Template.bind({});
Default.args = {
  label: 'Position'
};

export const Dense: Story<Select> = Template.bind({});
Dense.args = {
  label: 'Position',
  dense: true
};

export const LabelInside: Story<Select> = Template.bind({});
LabelInside.args = {
  label: 'Position',
  labelInside: true
};

const GraphicTemplate: Story<Select> = ({
  value,
  label,
  icon,
  disabled = false,
  dense = false,
  helper,
  required = false,
  validationMessage,
  selected,
  items,
  index,
  labelInside = false
}) => {
  return html`<fds-select
    .value=${value}
    .label=${label}
    .icon=${icon}
    ?disabled=${disabled}
    ?dense=${dense}
    ?labelInside=${labelInside}
    .helper=${helper}
    ?required=${required}
    ?validationMessage=${validationMessage}
    ?selected=${selected}
    ?items=${items}
    ?index=${index}
  >
    <fds-list-item graphic="icon" value="0">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      HR Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="1">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      IT Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="2">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      CEO
    </fds-list-item>
    <fds-list-item graphic="icon" value="3">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      Sales Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="4">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      Support Manager
    </fds-list-item>
  </fds-select>`;
};

export const Icon: Story<Select> = GraphicTemplate.bind({});
Icon.args = {
  label: 'Position',
  icon: 'apps'
};

export const Disabled: Story<Select> = GraphicTemplate.bind({});
Disabled.args = {
  label: 'Position',
  icon: 'apps',
  disabled: true
};

const ValidationTemplate: Story<Select> = ({
  value,
  label,
  icon,
  disabled = false,
  dense = false,
  helper,
  required = false,
  validationMessage,
  selected,
  items,
  index,
  labelInside = false
}) => {
  return html`<fds-select
    .value=${value}
    .label=${label}
    .icon=${icon}
    ?disabled=${disabled}
    ?dense=${dense}
    ?labelInside=${labelInside}
    .helper=${helper}
    ?required=${required}
    ?validationMessage=${validationMessage}
    ?selected=${selected}
    ?items=${items}
    ?index=${index}
  >
    <fds-list-item selected></fds-list-item>
    <fds-list-item graphic="icon" value="0">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      HR Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="1">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      IT Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="2">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      CEO
    </fds-list-item>
    <fds-list-item graphic="icon" value="3">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      Sales Manager
    </fds-list-item>
    <fds-list-item graphic="icon" value="4">
      <fds-icon slot="graphic">exit_to_app</fds-icon>
      Support Manager
    </fds-list-item>
  </fds-select>`;
};

export const Required: Story<Select> = ValidationTemplate.bind({});
Required.args = {
  label: 'required',
  icon: 'apps',
  required: true,
  validationMessage: 'This Field is Required'
};

const DialogTemplate: Story<Select> = ({
  value,
  label,
  icon,
  disabled = false,
  dense = false,
  helper,
  required = false,
  validationMessage,
  selected,
  items,
  index,
  labelInside = false,
  fixedMenuPosition,
}) => {
  return html`<fds-button label="Open dialog" onclick="openDialog()"></fds-button>
  <fds-dialog id="dialog" heading="Example for select">
    <fds-select
      .value=${value}
      .label=${label}
      .icon=${icon}
      ?disabled=${disabled}
      ?dense=${dense}
      ?labelInside=${labelInside}
      .helper=${helper}
      ?required=${required}
      ?validationMessage=${validationMessage}
      ?selected=${selected}
      ?items=${items}
      ?index=${index}
      ?fixedMenuPosition=${fixedMenuPosition}
    >
      <fds-list-item value="0">HR Manager</fds-list-item>
      <fds-list-item value="1">IT Manager</fds-list-item>
      <fds-list-item value="2">CEO</fds-list-item>
      <fds-list-item value="3">Sales Manager</fds-list-item>
      <fds-list-item value="4">Support Manager</fds-list-item>
    </fds-select>
  </fds-dialog>
  <script>
    openDialog = () => {
      let dialog = document.querySelector('#dialog');
      dialog.open = true;
    }
  </script>`;
};

export const SelectInsideDialog: Story<Select> = DialogTemplate.bind({});
SelectInsideDialog.args = {
  label: 'Select inside dialog',
  fixedMenuPosition: true
};
