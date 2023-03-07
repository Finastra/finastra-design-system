const README = require('../README.md');
import '@finastra/credit-card';
import type { CreditCard } from '@finastra/credit-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-credit-card.json';

export default {
  title: 'DATA DISPLAY/Credit-card',
  component: 'fds-credit-card',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
  },
  cssprops
} as Meta;

const Template: Story<CreditCard> = ({ name = '', lastDigits, hiddenDigits, date }) => {
  return html`<fds-credit-card  .name=${name} .last-digits=${lastDigits} .hidden-digits=${hiddenDigits} .date=${date}></fds-credit-card>`;
};

export const Default: Story<CreditCard> = Template.bind({});