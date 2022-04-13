const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle';
import '@finastra/button-toggle-group';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Button Toggle Group',
  component: 'fds-button-toggle-group',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle icon="accessibility" label="Left"></fds-button-toggle>
  <fds-button-toggle icon="favorite" label="Middle" ></fds-button-toggle>
  <fds-button-toggle icon="camera" label="Right"></fds-button-toggle>
</fds-button-toggle-group>`;
};

const LabelTemplate: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle label="Left"></fds-button-toggle>
  <fds-button-toggle label="Middle"></fds-button-toggle>
  <fds-button-toggle label="Right"></fds-button-toggle>
</fds-button-toggle-group>`;
};

const IconsTemplate: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle icon="accessibility"></fds-button-toggle>
  <fds-button-toggle icon="favorite" ></fds-button-toggle>
  <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>`;
};

const FilterTemplate: Story = ({label,icon}) => {
  return html`
  <fds-button-toggle-group>
      <fds-button-toggle-filter label="Left" icon="accessibility"></fds-button-toggle-filter>
      <fds-button-toggle-filter label="Middle" icon="exit_to_app" disabled></fds-button-toggle-filter>
      <fds-button-toggle-filter label="Right" icon="camera"></fds-button-toggle-filter>
  </fds-button-toggle-group>`;
};


export const Default: Story = Template.bind({});

export const Dense: Story = Template.bind({});
Dense.args = {
  dense: true,
};

export const Labels: Story = LabelTemplate.bind({});

export const Icons: Story = IconsTemplate.bind({});

export const Filter: Story = FilterTemplate.bind({});
Filter.args = {
};