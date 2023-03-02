const README = require('../README.md');
import '@finastra/switch';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-switch.json';

export default {
  title: 'FORMS/Switch',
  component: 'fds-switch',
  argTypes,
  args: {
    selected: false,
    disabled: false
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

const Template: Story = ({ selected, disabled }) => {
  return html`<fds-switch ?selected=${selected} ?disabled=${disabled}></fds-switch>`;
};

const WithLabelTemplate: Story = ({ selected }) => {
  return html` <fds-formfield label="On">
    <fds-switch selected=${selected}></fds-switch>
  </fds-formfield>`;
};
export const Default: Story = Template.bind({});

export const Selected: Story = Template.bind({});
Selected.args = {
  selected: true
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithLabel: Story = WithLabelTemplate.bind({});
WithLabel.args = {
  selected: true
};
