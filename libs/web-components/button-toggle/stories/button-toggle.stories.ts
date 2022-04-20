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
    cssprops,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=94522%3A28102'
    }
  }
} as Meta;

const Template: Story = ({ label, icon, disabled}) => {
  return html`
  <fds-button-toggle label=${label} icon=${icon} ?disabled=${disabled}></fds-button-toggle>`;
};

const FilterTemplate: Story = ({ label, icon, disabled}) => {
  return html`
  <fds-button-toggle-filter label=${label} icon=${icon} ?disabled=${disabled}></fds-button-toggle-filter>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  label: 'label',
  icon: 'event'
};

export const Filter: Story = FilterTemplate.bind({});
Filter.args = {
  label: 'label',
  icon: 'event'
};
