const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle-group';
import '@finastra/button-toggle';
import type { ButtonToggleGroup } from '@finastra/button-toggle-group';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/ButtonToggleGroup',
  component: 'fds-button-toggle-group',
  argTypes,
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const RoundedTemplate: Story = ({rounded=false, label, icon, dense=false, stacked, filter}) => {
  return html`<fds-button-toggle-group ?rounded=${rounded}>
  <fds-button-toggle icon="accessibility" label="left" ?dense=${dense} ?stacked=${stacked} ?filter=${filter}></fds-button-toggle>
  <fds-button-toggle icon="favorite" label="middle" ?dense=${dense} ?stacked=${stacked} ?filter=${filter}></fds-button-toggle>
  <fds-button-toggle icon="camera" label="right" ?dense=${dense} ?stacked=${stacked} ?filter=${filter}></fds-button-toggle>
</fds-button-toggle-group>`;
};

const FilterTemplate: Story = ({ rounded, dense, stacked, filter}) => {
  return html`<fds-button-toggle-group rounded=${rounded}>
  <fds-button-toggle icon="accessibility" ?dense=${dense} ?stacked=${stacked} ?filter=${filter}></fds-button-toggle>
  <fds-button-toggle icon="favorite" ?dense=${dense} ?stacked=${stacked} ?filter=${filter}></fds-button-toggle>
</fds-button-toggle-group>`;
};


export const Default: Story = RoundedTemplate.bind({});
Default.args = {
  rounded: true
};
export const Dense: Story = RoundedTemplate.bind({});
Dense.args = {
  dense: true,
  rounded: true
};

export const Filter: Story = RoundedTemplate.bind({});
Filter.args = {
  stacked: true,
  filter: true
};


export const IconsDense: Story = FilterTemplate.bind({});
IconsDense.args = {
  dense: true,
  rounded: true
};


export const Icons: Story = FilterTemplate.bind({});
Icons.args = {
  rounded: true
};