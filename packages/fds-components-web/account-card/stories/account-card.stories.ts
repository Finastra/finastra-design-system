const README = require('../README.md');
import '@finastra/account-card';
import type { AccountCard } from '@finastra/account-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-account-card.json';

export default {
  title: 'DATA DISPLAY/Cards/Account Card',
  component: 'fds-account-card',
  argTypes,
  args: {
    name: 'France',
    balance: 50000,
    currency: 'EUR',
    number: 'DE89 3704 0044 0532 0130 00'
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6BBm9XAsO9lQZQ4xBM4cGr/Patterns-%26-apps?node-id=407%3A17290'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story<AccountCard> = ({ name, balance, currency, number, icon, iconAriaLabel, outlined, selectable, disabled }) => {
  return html`<fds-account-card
    name=${name}
    balance=${balance}
    currency=${currency}
    number=${number}
    icon=${icon}
    iconAriaLabel=${iconAriaLabel}
    ?outlined=${outlined}
    ?selectable=${selectable}
    ?disabled=${disabled}
  ></fds-account-card>`;
};

export const Default: Story<AccountCard> = Template.bind({});

export const Selectable: Story<AccountCard> = Template.bind({});
Selectable.args = {
  selectable: true
};

export const Outlined: Story<AccountCard> = Template.bind({});
Outlined.args = {
  outlined: true
};

export const Disabled: Story<AccountCard> = Template.bind({});
Disabled.args = {
  disabled: true
};
