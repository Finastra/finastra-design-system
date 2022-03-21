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
    },
    cssprops
  },
} as Meta;

const Template: Story<Textfield> = ({ label, icon, disabled, outlined, required, iconTrailing,helper }) => {
  return html`<fds-textfield label=${label} icon=${icon} ?disabled=${disabled} ?outlined=${outlined} ?required=${required} iconTrailing=${iconTrailing} helper=${helper}></fsd-textfield>`;
};

const ValidationTemplate: Story<Textfield> = ({ label, icon, type, validationMessage, disabled, outlined, helper}) => {
  return html`<fds-textfield label=${label} icon=${icon} type=${type} validationMessage=${validationMessage} ?disabled=${disabled} ?outlined=${outlined} ?helper=${helper}></fds-textfield>`;
};

const IconButtonTemplate: Story = ({ label, icon, showActionButton, type, disabled, outlined, helper}) => {
  return html`
    <fds-textfield showActionButton=${showActionButton} label=${label} ?icon=${icon} type=${type} ?disabled=${disabled} ?outlined=${outlined} helper=${helper} id="my-textfield">
  <mwc-icon-button slot="i" icon='${icon}' onclick="myFunction(this.icon)"></mwc-icon-button>
</fds-textfield>
   `;
};

IconButtonTemplate.decorators = [
  (story) => html`${story()} <script>
  function myFunction(e) {
  const textfield = document.querySelector('#my-textfield');
  const actionButton = document.querySelector('#my-textfield mwc-icon-button');
  if (actionButton.getAttribute('icon') == 'visibility_off') {
    actionButton.setAttribute('icon', 'visibility_on');
    textfield.setAttribute('type', 'text');
  } else {
    actionButton.setAttribute('icon', 'visibility_off');
    textfield.setAttribute('type', 'password');
  }
}
</script>`
];

export const Default: Story<Textfield> = Template.bind({});
Default.args = {
  label: 'Default',
  icon: 'event',
  helper: "helper text"
};

export const Password: Story = IconButtonTemplate.bind({});
Password.args = {
  label: 'Default',
  helper: "helper text",
  type: "password",
  showActionButton: true,
  icon: 'visibility_off'
};
export const IconTrailing: Story<Textfield> = Template.bind({});
IconTrailing.args = {
  label: 'Enter your password',
  type: 'password',
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
  helper: "helper text",
  icon: 'event',
  outlined: true
};

export const Disabled: Story<Textfield> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'event',
  disabled: true
};
