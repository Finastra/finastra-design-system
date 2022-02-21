const README = require('../README.md');
import {cssprops, argTypes} from './custom-element.json';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: 'fds-autocomplete',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ icon, showClearButton, value, ariaLabel="Choose a number", minLengthToOpenMenu=0, required, disabled, useInnerFilter}) => {
  return html`<fds-autocomplete .value=${ifDefined(value)} .ariaLabel=${ifDefined(ariaLabel)} .required=${ifDefined(required)} .disabled=${ifDefined(disabled)} .minLengthToOpenMenu=${ifDefined(minLengthToOpenMenu)} .icon=${ifDefined(icon)} .showClearButton=${ifDefined(showClearButton)} .useInnerFilter=${useInnerFilter}>
 <mwc-list-item value="One">One</mwc-list-item>
 <mwc-list-item value="Two">Two</mwc-list-item>
 <mwc-list-item value="Three">Three</mwc-list-item>
</fsd-autocomplete>`;
};

export const Default: Story = Template.bind({});

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Required: Story = Template.bind({});
Required.args = {
  required: true,
};

export const Icon: Story = Template.bind({});
Icon.args = {
  icon: 'search',
};

export const ClearButton: Story = Template.bind({});
ClearButton.args = {
  showClearButton: true,
};
