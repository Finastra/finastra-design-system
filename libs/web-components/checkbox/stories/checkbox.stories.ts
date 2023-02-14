const README = require('../README.md');
import '@finastra/checkbox';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-checkbox.json';

export default {
  title: 'FORMS/Checkbox',
  component: 'fds-checkbox',
  argTypes,
  args: {
    checked: false,
    disabled: false,
    indeterminate: false
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1046'
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ checked, indeterminate, disabled }) => {
  return html`<fds-checkbox ?checked=${checked} ?indeterminate=${indeterminate} ?disabled=${disabled}></fds-checkbox>`;
};

const WithLabelTemplate: Story = ({ checked }) => {
  return html` <fds-formfield label="Accept terms and conditions">
    <fds-checkbox ?checked=${checked}></fds-checkbox>
  </fds-formfield>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  checked: true
};

export const WithLabel: Story = WithLabelTemplate.bind({});
WithLabel.args = {
  checked: true
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Indeterminate: Story = Template.bind({});
Indeterminate.args = {
  indeterminate: true
};
