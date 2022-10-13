const README = require('../README.md');
import '@finastra/list';
import type { List } from '@finastra/list';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-list.json';

export default {
  title: 'DATA DISPLAY/List',
  component: 'fds-list',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-list {
          min-width: 380px;
        }

        .transaction {
          font: var(--fds-subtitle-1);
          color: var(--fds-on-surface);
        }

        .income {
          color: var(--fds-success);
        }
      </style>`
  ],
  cssprops
} as Meta;

const BasicTemplate: Story<List> = ({activatable, multi, noninteractive}) => {
  return html`<fds-list ?activatable=${activatable} ?multi=${multi} ?noninteractive=${noninteractive}>
    <fds-list-item graphic="icon" hasMeta ?noninteractive=${noninteractive}>
      <slot>Application</slot>
      <fds-icon slot="graphic">settings</fds-icon>
      <fds-icon slot="meta">chevron_right</fds-icon>
    </fds-list-item>
    <fds-list-item graphic="icon" hasMeta ?noninteractive=${noninteractive}>
      <slot>Appearance</slot>
      <fds-icon slot="graphic">settings</fds-icon>
      <fds-icon slot="meta">chevron_right</fds-icon>
    </fds-list-item>
    <fds-list-item graphic="icon" hasMeta ?noninteractive=${noninteractive}>
      <slot>Services / Packages</slot>
      <fds-icon slot="graphic">settings</fds-icon>
      <fds-icon slot="meta">chevron_right</fds-icon>
    </fds-list-item>
    <fds-list-item graphic="icon" hasMeta ?noninteractive=${noninteractive}>
      <slot>Data Sources</slot>
      <fds-icon slot="graphic">settings</fds-icon>
      <fds-icon slot="meta">chevron_right</fds-icon>
    </fds-list-item>
    <fds-list-item graphic="icon" hasMeta ?noninteractive=${noninteractive}>
      <slot>Accounts</slot>
      <fds-icon slot="graphic">settings</fds-icon>
      <fds-icon slot="meta">chevron_right</fds-icon>
    </fds-list-item>
  </fds-list>`;
};

const DefaultTemplate: Story<List> = ({activatable, multi, noninteractive}) => {
  return html`<fds-list ?activatable=${activatable} ?multi=${multi} ?noninteractive=${noninteractive}>
    <fds-list-item graphic="avatar" ?noninteractive=${noninteractive}>
      <span>Add more widgets</span>
      <fds-icon slot="graphic">library_add</fds-icon>
    </fds-list-item>
    <fds-list-item graphic="avatar" ?noninteractive=${noninteractive}>
      <span>Watch tutorials</span>
      <fds-icon slot="graphic">movie</fds-icon>
    </fds-list-item>
  </fds-list>`;
};

const TwoLineTemplate: Story<List> = ({activatable, multi, noninteractive}) => {
  return html`<fds-list ?activatable=${activatable} ?multi=${multi} ?noninteractive=${noninteractive}>
    <fds-list-item twoline graphic="icon" hasMeta>
      <fds-icon slot="graphic">credit_card</fds-icon>
      <span>Bank Transfer</span>
      <span slot="secondary">US7893 55669 KO566 778</span>
      <span class="transaction income" slot="meta">+ $ 2,563.45</span>
    </fds-list-item>
    <fds-divider></fds-divider>
    <fds-list-item twoline graphic="icon" hasMeta>
      <fds-icon slot="graphic">credit_card</fds-icon>
      <span>Loan car</span>
      <span slot="secondary">US7893 55669 KO566 778</span>
      <span class="transaction" slot="meta">- $ 643.12</span>
    </fds-list-item>
    <fds-divider></fds-divider>
    <fds-list-item twoline graphic="icon" hasMeta>
      <fds-icon slot="graphic">credit_card</fds-icon>
      <span>Travel agency</span>
      <span slot="secondary">US7893 55669 KO566 778</span>
      <span class="transaction" slot="meta">- $ 1,823.78</span>
    </fds-list-item>
    <fds-divider></fds-divider>
    <fds-list-item twoline graphic="icon" hasMeta>
      <fds-icon slot="graphic">credit_card</fds-icon>
      <span>Refund</span>
      <span slot="secondary">US7893 55669 KO566 778</span>
      <span class="transaction income" slot="meta">+ $ 356.45</span>
    </fds-list-item>
  </fds-list>`;
};

const CheckTemplate: Story<List> = ({activatable, multi, noninteractive}) => {
  return html`<fds-list ?activatable=${activatable} ?multi=${multi} ?noninteractive=${noninteractive}>
    <fds-check-list-item left selected>Customer Experience</fds-check-list-item>
    <fds-divider></fds-divider>
    <fds-check-list-item left>Business Growth</fds-check-list-item>
    <fds-divider></fds-divider>
    <fds-check-list-item left>Operational Efficiency</fds-check-list-item>
    <fds-divider></fds-divider>
    <fds-check-list-item left>Risk and Compliance</fds-check-list-item>
  </fds-list>`;
};

const RadioTemplate: Story<List> = ({activatable, multi, noninteractive}) => {
  return html`<fds-list ?activatable=${activatable} ?multi=${multi} ?noninteractive=${noninteractive}>
    <fds-radio-list-item selected left group="a">All</fds-radio-list-item>
    <fds-radio-list-item left group="a">Live</fds-radio-list-item>
    <fds-radio-list-item left group="a">Featured</fds-radio-list-item>
    <fds-radio-list-item left group="a">Coming Soon</fds-radio-list-item>
    <fds-radio-list-item left group="a">Recommended For You</fds-radio-list-item>
  </fds-list>`;
};

export const Default: Story<List> = DefaultTemplate.bind({});

export const Activatable: Story<List> = BasicTemplate.bind({});
Activatable.args = {
  activatable: true
}

export const ActivatableMulti: Story<List> = BasicTemplate.bind({});
ActivatableMulti.args = {
  activatable: true,
  multi: true
}

export const Noninteractive: Story<List> = BasicTemplate.bind({});
Noninteractive.args = {
  noninteractive: true
}

export const TwoLine: Story<List> = TwoLineTemplate.bind({});

export const Check: Story<List> = CheckTemplate.bind({});
Check.args = {
  multi: true
}

export const Radio: Story<List> = RadioTemplate.bind({});
