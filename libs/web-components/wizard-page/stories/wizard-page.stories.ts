const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/wizard-page';
import type { WizardPage } from '@finastra/wizard-page';

export default {
  title: 'Components/WizardPage',
  component: 'fds-wizard-page',
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

const Template: Story<WizardPage> = ({ name = 'World' }) => {
  return html`<fds-wizard-page  .name=${name}></fsd-wizard-page>`;
};

export const Default: Story<WizardPage> = Template.bind({});
