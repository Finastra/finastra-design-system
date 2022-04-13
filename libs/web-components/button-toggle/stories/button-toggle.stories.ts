const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle';
import '@finastra/button-toggle-group';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Button Toggle',
  component: 'fds-button-toggle',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ label, icon}) => {
  return html`
    <fds-button-toggle-group>
  <fds-button-toggle label=${label} icon=${icon}></fds-button-toggle>
</fds-button-toggle-group>`;
};

const FilterTemplate: Story = ({ label, icon }) => {
  return html`
    <fds-button-toggle-group>
  <fds-button-toggle-filter label=${label} icon=${icon}></fds-button-toggle-filter>
</fds-button-toggle-group>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  label: 'label',
  icon: "camera"
};

export const Filter: Story = FilterTemplate.bind({});
Filter.args = {
  label: 'label',
  icon:"camera"
};
