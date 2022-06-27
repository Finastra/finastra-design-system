const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/expansion-panel';
import type { ExpansionPanel } from '@finastra/expansion-panel';

export default {
  title: 'Components/ExpansionPanel',
  component: 'fds-expansion-panel',
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

const Template: Story<ExpansionPanel> = ({ name = 'World' }) => {
  return html`<fds-expansion-panel  .name=${name}></fsd-expansion-panel>`;
};

export const Default: Story<ExpansionPanel> = Template.bind({});
