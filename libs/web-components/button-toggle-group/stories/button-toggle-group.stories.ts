const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/button-toggle-group';
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

const Template: Story<ButtonToggleGroup> = ({rounded=false}) => {
  return html`<fds-button-toggle-group ?rounded=${rounded}>
  <fds-button-toggle icon="accessibility"></fds-button-toggle>
  <fds-button-toggle icon="exit_to_app"></fds-button-toggle>
  <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>`;
};

export const Default: Story<ButtonToggleGroup> = Template.bind({});
