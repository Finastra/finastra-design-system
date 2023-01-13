const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/form';
import type { Form } from '@finastra/form';
import { argTypes, cssprops } from './sb-generated/fds-form.json';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';

export default {
  title: 'Components/Form',
  component: 'fds-form',
  argTypes,
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ],
  cssprops
} as Meta;

const Template: Story<Form> = ({ name = 'World' }) => {
  return html`<fds-form .name=${name}></fds-form>`;
};

export const Default: Story<Form> = Template.bind({});
