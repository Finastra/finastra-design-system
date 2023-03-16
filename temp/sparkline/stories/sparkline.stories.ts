const README = require('../README.md');
import '@finastra/sparkline';
import type { Sparkline } from '@finastra/sparkline';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-sparkline.json';

export default {
  title: 'DATA DISPLAY/Charts/Sparkline',
  component: 'fds-sparkline',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
  },
  cssprops
} as Meta;

const Template: Story<Sparkline> = ({ data, success = false, error = false }) => {
  return html`<fds-sparkline .data=${data} ?success=${success} ?error=${error}></fds-sparkline>`;
};

export const Default: Story<Sparkline> = Template.bind({});
Default.args = {
  data: [3, 0, 3, 20, 11, 26, 23, 45, 64, 34, 39, 19, 59, 33, 35, 59, 71, 44, 66, 11, 12, 13, 58]
}

export const Success: Story<Sparkline> = Template.bind({});
Success.args = {
  data: [3, 0, 3, 5, 2, 8, 13, 15, 11, 17, 18, 23, 27, 25, 28, 37, 48, 42, 46, 49, 51, 55, 55, 56],
  success: true
}

export const Error: Story<Sparkline> = Template.bind({});
Error.args = {
  data: [72, 77, 79, 69, 68, 67, 67, 59, 53, 56, 53, 52, 40, 38, 36, 37, 37, 34, 32, 30, 30, 30],
  error: true
}