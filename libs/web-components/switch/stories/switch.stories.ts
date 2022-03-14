const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/switch';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Switch',
  component: 'fds-switch',
  argTypes,
  args: {
    selected: false,
    disabled: false,
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

const Template: Story = ({ selected, disabled }) => {
  return html`<fds-switch ?selected=${selected} ?disabled=${disabled}></fds-switch>`;
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
