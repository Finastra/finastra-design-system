const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/chip';
import type { Chip } from '@finastra/chip';

export default {
  title: 'Components/Chip',
  component: 'fds-chip',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<Chip> = ({ name = 'World' }) => {
  return html`<fds-chip  .name=${name}></fsd-chip>`;
};

export const Default: Story<Chip> = Template.bind({});
