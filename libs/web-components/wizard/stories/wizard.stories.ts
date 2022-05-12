import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/wizard';
import type { Wizard } from '@finastra/wizard';

export default {
  title: 'Components/Wizard',
  component: 'fds-wizard',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<Wizard> = () => {
  return html`<fds-wizard></fsd-wizard>`;
};

export const Default: Story<Wizard> = Template.bind({});
