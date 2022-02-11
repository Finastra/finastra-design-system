import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './custom-element.json';
import { MenuTrigger } from '@finastra/menu-trigger';

import '@finastra/menu-trigger';

const README = require('../README.md');

export default {
  title: 'Components/Menu Trigger',
  argTypes,
  args: {
    label: 'Launch',
    outlined: true
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<MenuTrigger> = ({ label, on, outlined, secondary }) => {
  return html`<fds-menu-trigger label=${label} ?on=${on} ?outlined=${outlined} ?secondary=${secondary}></fds-menu-trigger>`;
};

export const Default: Story<MenuTrigger> = Template.bind({});

export const Custom: Story<MenuTrigger> = Template.bind({});
Custom.args = { label: 'Design', outlined: true, secondary: true };
