const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/checkbox';
import { argTypes, cssprops } from './custom-element.json';

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
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1046'
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ checked, indeterminate, disabled }) => {
  return html`<fds-checkbox ?checked=${checked} ?indeterminate=${indeterminate} ?disabled=${disabled}></fsd-checkbox>`;
};

export const Default: Story = Template.bind({});
Default.args = {
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
