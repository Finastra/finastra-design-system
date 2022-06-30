const README = require('../README.md');
import '@finastra/badge';
import '@finastra/badge-container';
import type { Badge } from '@finastra/badge';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<Badge> = ({value, color, position }) => {
  return html`<fds-badge-container>
    <span> Success</span>
    <fds-badge value=${value} color=${color} position=${position}></fds-badge>
  </fds-badge-container>`;
};

export const Default: Story<Badge> = Template.bind({});
