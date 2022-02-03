const README = require('../README.md');
import { html } from 'lit-html';
import { Meta, Story } from '@storybook/web-components';
import type { UserProfile } from '@finastra/user-profile';
import '@finastra/user-profile';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/User Profile',
  argTypes,
  args: {
    dense: false,
    open: false,
    userName: 'Raya Hristova',
    shortName: ''
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', dense = false, open = true }) => {
  return html` <style>
      fds-user-profile {
        height: 300px;
      }
      fds-user-profile fds-button {
        line-height: 0px;
        padding: var(--fds-spacing-0) var(--fds-spacing-3) var(--fds-spacing-2) var(--fds-spacing-3);
      }
      fds-user-profile fds-button + fds-button {
        margin-top: var(--fds-spacing-2);
      }
    </style>

    <fds-user-profile userName=${userName} shortName=${shortName} ?open=${open} ?dense=${dense}>
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-button text fullwidth label="View profile"></fds-button>
      </div>
    </fds-user-profile>`;
};

export const Default: Story<UserProfile> = Template.bind({});
Default.args = {
  open: true
};

const ComplexTemplate: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', dense = true, open = true }) => {
  return html` <style>
  fds-user-profile {
   height: 300px;
  }
  fds-user-profile p {
    font: var(--fds-body-1);
    color: var(--fds-on-background);
  }
  fds-user-profile mwc-list-item {
    color: var(--fds-on-background);
    margin-top: calc(var(--fds-spacing-3) * -1);
  }
  fds-user-profile mwc-list-item + mwc-list-item{
    margin-top: var(--fds-spacing-0);
  }
  fds-user-profile fds-divider {
    position: relative;
    padding-top: var(--fds-spacing-3);
    margin: var(--fds-spacing-0) calc(var(--fds-spacing-3) * -1) var(--fds-spacing-0) calc(var(--fds-spacing-3) * -1);
  }
  fds-user-profile fds-button {
    line-height: var(--fds-spacing-0);
    padding:  var(--fds-spacing-0) var(--fds-spacing-3) var(--fds-spacing-2) var(--fds-spacing-3);
  }
  fds-user-profile fds-button + fds-button {
    margin-top: var(--fds-spacing-2);
  }
</style>

    <fds-user-profile userName=${userName} shortName=${shortName} ?dense=${dense} ?open=${open}>
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
      <div slot="actions">
        <div class="item-list">
          <mwc-list-item graphic="icon">
            <span>item one</span>
            <mwc-icon slot="graphic">dashboard</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>item two</span>
            <mwc-icon slot="graphic">dashboard</mwc-icon>
          </mwc-list-item>
        </div>
        <fds-divider></fds-divider>
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
    </fds-user-profile>`;
};

export const Dense: Story<UserProfile> = ComplexTemplate.bind({});
Dense.args = {
  dense: true,
  open: true
};
