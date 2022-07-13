const README = require('../README.md');
import '@finastra/account-card';
import type { AccountCard } from '@finastra/account-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'DATA DISPLAY/Cards/Account Card',
  component: 'fds-account-card',
  argTypes,
  args: {
    name: 'France',
    balance: 50000,
    currency: "EUR",
    number: "DE89 3704 0044 0532 0130 00"
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story<AccountCard> = ({ name, balance, currency, number, icon, iconAriaLabel, outlined, selectable, disabled}) => {
  return html`<fds-account-card name=${name} balance=${balance} currency=${currency} number=${number} icon=${icon} iconAriaLabel=${iconAriaLabel} ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}></fsd-account-card>`;
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
