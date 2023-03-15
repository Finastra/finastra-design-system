const README = require('../README.md');
import '@finastra/credit-card';
import type { CreditCard } from '@finastra/credit-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-credit-card.json';

export default {
  title: 'DATA DISPLAY/Credit Card',
  component: 'fds-credit-card',
  argTypes: {
    name: argTypes.name,
    date: argTypes.date,
    lastDigits: argTypes['last-digits'],
    hiddenDigits: argTypes['hidden-digits']
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6BBm9XAsO9lQZQ4xBM4cGr/Patterns-%26-apps?node-id=33364%3A25330&t=oHjPoRuZpC5vEPc7-0'
    }
  },
  cssprops
} as Meta;

const Template: Story<CreditCard> = ({ name, lastDigits, hiddenDigits, date }) => {
  return html`<fds-credit-card
    name=${name}
    last-digits=${lastDigits}
    hidden-digits=${hiddenDigits}
    date=${date}
  ></fds-credit-card>`;
};

export const Default: Story<CreditCard> = Template.bind({});
