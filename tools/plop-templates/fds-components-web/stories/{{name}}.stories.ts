const README = require('../README.md');
import '@finastra/{{ name }}';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-{{ name }}.json';

export default {
  title: 'Components/{{ sentenceCase name }}',
  component: 'fds-{{ name }}',
  argTypes,
  args: {
    name: 'World'
  }, 
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
  },
  decorators: [
    (story) => html`${story()}<style>
      /* Add you styles here */ 
    </style>`
  ],
  cssprops
} as Meta;

const Template: Story<{{ sentenceCase name }}> = ({ name = 'World' }) => {
  return html`<fds-{{ name }}  .name=${name}></fds-{{ name }}>`;
};

export const Default: Story<{{ sentenceCase name }}> = Template.bind({});