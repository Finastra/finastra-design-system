const README = require('../README.md');
import '@finastra/wizard-page';
import type { WizardPage } from '@finastra/wizard-page';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/WizardPage',
  component: 'fds-wizard-page',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<WizardPage> = ({ title }) => {
  return html`<fds-wizard-page  title=${title}></fsd-wizard-page>`;
};

export const Default: Story<WizardPage> = Template.bind({});
Default.args = {
  title: "title"
};
