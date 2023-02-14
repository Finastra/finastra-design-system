const README = require('../README.md');
import '@finastra/formfield';
import type { Formfield } from '@finastra/formfield';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-formfield.json';

export default {
  title: 'FORMS/Formfield',
  component: 'fds-formfield',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  cssprops
} as Meta;

const Checkbox: Story<Formfield> = ({ label, alignEnd, spaceBetween, nowrap }) => {
  return html`<fds-formfield label=${label} ?alignEnd=${alignEnd} ?spaceBetween=${spaceBetween} ?nowrap=${nowrap}>
    <fds-checkbox></fds-checkbox>
  </fds-formfield>`;
};

const Radio: Story<Formfield> = ({ label, alignEnd, spaceBetween, nowrap }) => {
  return html`<fds-formfield label=${label} ?alignEnd=${alignEnd} ?spaceBetween=${spaceBetween} ?nowrap=${nowrap}>
    <fds-radio checked></fds-radio>
  </fds-formfield>`;
};

const Switch: Story<Formfield> = ({ label, alignEnd, spaceBetween, nowrap }) => {
  return html`<fds-formfield label=${label} ?alignEnd=${alignEnd} ?spaceBetween=${spaceBetween} ?nowrap=${nowrap}>
    <fds-switch selected></fds-switch>
  </fds-formfield>`;
};

export const CheckboxTemplate: Story<Formfield> = Checkbox.bind({});
CheckboxTemplate.args = {
  label: 'Accept terms and conditions'
};

export const AlignEnd: Story = CheckboxTemplate.bind({});
AlignEnd.args = {
  label: 'Accept terms and conditions',
  alignEnd: true
};

export const RadioTemplate: Story<Formfield> = Radio.bind({});
RadioTemplate.args = {
  label: 'Option'
};
export const SwitchTemplate: Story<Formfield> = Switch.bind({});
SwitchTemplate.args = {
  label: 'On'
};
