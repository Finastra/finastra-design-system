const README = require('../README.md');
import '@finastra/select';
import type { Select } from '@finastra/select';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-select.json';

export default {
  title: 'FORMS/Select',
  component: 'fds-select',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=165%3A6010'
    },
    cssprops
  }
} as Meta;

const Template: Story<Select> = ({ value, label, icon, disabled = false, outlined = false, helper, required = false, validationMessage, selected, items, index }) => {
  return html`<fds-select
  .value=${value}
  .label=${label}
  .icon=${icon}
  ?disabled=${disabled}
  ?outlined=${outlined}
  .helper=${helper}
  ?required=${required}
  ?validationMessage=${validationMessage}
  ?selected=${selected}
  ?items=${items}
  ?index=${index}>
    <mwc-list-item value="0">HR Manager</mwc-list-item>
    <mwc-list-item value="1">IT Manager</mwc-list-item>
    <mwc-list-item value="2">CEO</mwc-list-item>
    <mwc-list-item value="3">Sales Manager</mwc-list-item>
    <mwc-list-item value="4">Support Manager</mwc-list-item>
  </fsd-select>`;
};

export const Default: Story<Select> = Template.bind({});
Default.args = {
  label: "Position"
}

const GraphicTemplate: Story<Select> = ({ value, label, icon, disabled = false, outlined = false, helper, required = false, validationMessage, selected, items, index }) => {
  return html`<fds-select
  .value=${value}
  .label=${label}
  .icon=${icon}
  ?disabled=${disabled}
  ?outlined=${outlined}
  .helper=${helper}
  ?required=${required}
  ?validationMessage=${validationMessage}
  ?selected=${selected}
  ?items=${items}
  ?index=${index}>
    <mwc-list-item graphic="icon" value="0">HR Manager</mwc-list-item>
    <mwc-list-item graphic="icon" value="1">IT Manager</mwc-list-item>
    <mwc-list-item graphic="icon" value="2">CEO</mwc-list-item>
    <mwc-list-item graphic="icon" value="3">Sales Manager</mwc-list-item>
    <mwc-list-item graphic="icon" value="4">Support Manager</mwc-list-item>
</fsd-select>`;
};

export const Graphic: Story<Select> = GraphicTemplate.bind({});
Graphic.args = {
  label: "Position",
  icon: "apps"
};

export const Outlined: Story<Select> = Default.bind({});
Outlined.args = {
  label: "Position",
  outlined: true
};

export const Validation: Story<Select> = Default.bind({});
Validation.args = {
  label: "required (error)",
  required: true,
  validationMessage: "This Field is Required"
};
