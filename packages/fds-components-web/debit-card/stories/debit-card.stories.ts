const README = require('../README.md');
import '@finastra/debit-card';
import type { DebitCard } from '@finastra/debit-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-debit-card.json';

export default {
  title: 'DATA DISPLAY/Debit-card',
  component: 'fds-debit-card',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
  },
  cssprops
} as Meta;

const Template: Story<DebitCard> = ({ name = '', lastDigits, hiddenDigits, date }) => {
  return html`<fds-debit-card  .name=${name} .last-digits=${lastDigits} .hidden-digits=${hiddenDigits} .date=${date}></fds-debit-card>`;
};

export const Default: Story<DebitCard> = Template.bind({});