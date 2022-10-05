const README = require('../README.md');
import '@finastra/autocomplete';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-autocomplete.json';

export default {
  title: 'FORMS/Autocomplete',
  component: 'fds-autocomplete',
  argTypes,
  args: {
    placeholder: 'Choose a number',
    minLengthToOpenMenu: 0
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story = ({
  icon,
  showClearButton,
  value,
  ariaLabel,
  minLengthToOpenMenu,
  required,
  disabled,
  useInnerFilter,
  placeholder
}) => {
  return html`<fds-autocomplete .value=${ifDefined(value)} ?ariaLabel=${ifDefined(ariaLabel)} ?required=${ifDefined(
    required
  )} ?disabled=${ifDefined(disabled)} ?minLengthToOpenMenu=${ifDefined(minLengthToOpenMenu)} icon=${ifDefined(
    icon
  )} ?showClearButton=${ifDefined(showClearButton)} .useInnerFilter=${useInnerFilter} .placeholder=${ifDefined(placeholder)}>
 <mwc-list-item value="One">One</mwc-list-item>
 <mwc-list-item value="Two">Two</mwc-list-item>
 <mwc-list-item value="Three">Three</mwc-list-item>
</fds-autocomplete>`;
};

export const Default: Story = Template.bind({});

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Required: Story = Template.bind({});
Required.args = {
  required: true
};

export const Icon: Story = Template.bind({});
Icon.args = {
  icon: 'search'
};

export const ClearButton: Story = Template.bind({});
ClearButton.args = {
  showClearButton: true
};
