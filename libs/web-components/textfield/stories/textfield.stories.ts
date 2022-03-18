const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/textfield';
import type { Textfield } from '@finastra/textfield';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Textfield',
  component: 'fds-textfield',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  cssprops
} as Meta;

const Template: Story<Textfield> = ({ label, icon, disabled, outlined }) => {
  return html`<fds-textfield label=${label} icon=${icon} ?disabled=${disabled} ?outlined=${outlined}></fsd-textfield>`;
};

const ValidationTemplate: Story<Textfield> = ({ label, icon, type, validationMessage, disabled, outlined }) => {
  return html`<fds-textfield label=${label} icon=${icon} type=${type} validationMessage=${validationMessage} ?disabled=${disabled} ?outlined=${outlined}></fsd-textfield>`;
};

export const Default: Story<Textfield> = Template.bind({});
Default.args = {
  label: 'Default',
  icon: 'event'
};

export const Password: Story<Textfield> = ValidationTemplate.bind({});
Password.args = {
  label: 'Enter your password',
  type: 'password',
  icon: 'event'
};

export const ErrorMessage: Story = ValidationTemplate.bind({});
ErrorMessage.args = {
  type: 'email',
  validationMessage: 'Not a valid email',
  label: 'Enter your email',
  icon: 'event'
};

export const Outlined: Story<Textfield> = Template.bind({});
Outlined.args = {
  label: 'Outlined textfield',
  icon: 'event',
  outlined: true
};

export const Disabled: Story<Textfield> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'event',
  disabled: true
};
