import '@finastra/menu-trigger';
import { MenuTrigger } from '@finastra/menu-trigger';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes } from './sb-generated/fds-menu-trigger.json';

const README = require('../README.md');

export default {
  title: 'ACTIONS/Menu Trigger',
  argTypes,
  args: {
    label: 'Launch',
    outlined: true
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    }
  }
} as Meta;

const Template: Story<MenuTrigger> = ({ label, on, outlined, secondary }) => {
  return html`<fds-menu-trigger label=${label} ?on=${on} ?outlined=${outlined} ?secondary=${secondary}></fds-menu-trigger>`;
};

export const Default: Story<MenuTrigger> = Template.bind({});

export const Custom: Story<MenuTrigger> = Template.bind({});
Custom.args = { label: 'Design', outlined: true, secondary: true };
