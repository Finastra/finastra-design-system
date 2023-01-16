const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/spark-line';
import type { SparkLine } from '@finastra/spark-line';
import { argTypes, cssprops } from './sb-generated/fds-spark-line.json';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';

export default {
  title: 'Components/SparkLine',
  component: 'fds-spark-line',
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

const Template: Story<SparkLine> = ({ name = 'World' }) => {
  return html`<fds-spark-line .name=${name}></fds-spark-line>`;
};

export const Default: Story<SparkLine> = Template.bind({});
