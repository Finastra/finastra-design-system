const README = require('../README.md');
import '@finastra/icon';
import type { Icon } from '@finastra/icon';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/Icon',
  component: 'fds-icon',
  args: {
    label: 'favorite'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template = (args) => {
  return html`<fds-icon>${args.label}</fsd-icon>`;
};

export const Default: Story<Icon> = Template.bind({});
