const README = require('../README.md');
import { html } from 'lit-html';
import { Meta, Story } from '@storybook/web-components';
import type { UserProfile } from '@finastra/user-profile';
import '@finastra/user-profile';
import { cssprops } from './custom-element.json';

export default {
  title: 'Components/User Profile',
  argTypes: {
    denseMenu: { control: 'boolean' },
    open: { control: 'boolean' },
    userName: { control: 'text' },
    shortName: { control: 'text' },
    userInfo: {
      table: {
        category: 'slot'
      },
      control: null
    },
    actions: {
      table: {
        category: 'slot'
      },
      control: null
    }
  },
  args: {
    denseMenu: false,
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

const Template: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', denseMenu = false, open = true }) => {
  return html` <style>
fds-user-profile {
  height: 300px;
}
fds-user-profile fds-button {
  line-height: 0px;
}
fds-user-profile fds-button + fds-button {
  margin-top: 8px;
}
</style>

<fds-user-profile userName=${userName} shortName=${shortName} ?open=${open} ?denseMenu= ${denseMenu}>
<div slot="userInfo">raya.hristova@finastra.com</div>
<div slot="actions">
  <fds-button dense fullwidth label="Logout" icon="logout"></fds-button>
  <fds-button text fullwidth label="View profile"></fds-button>
</div>
</fds-user-profile>`;
};

export const Default: Story<UserProfile> = Template.bind({});
Default.args = {
  open: true
};

const ComplexTemplate: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', denseMenu = true, open = true }) => {
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
        margin-top: -10px;
      }

      fds-user-profile mwc-list-item + mwc-list-item{
        margin-top: 0px;
      }
      fds-user-profile fds-divider {
        position: relative;
        padding-top: 16px;
        margin-right: -16px;
        margin-left: -16px;
      }
      fds-user-profile fds-button {
        line-height: 0px;
      }
      fds-user-profile fds-button + fds-button {
        margin-top: 8px;
      }
    </style>

    <fds-user-profile userName=${userName} shortName=${shortName} ?denseMenu=${denseMenu} ?open=${open}>
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
        <fds-button dense fullwidth label="Logout" icon="logout"></fds-button>
    </fds-user-profile>`;
};

export const Dense: Story<UserProfile> = ComplexTemplate.bind({});
Dense.args = {
  denseMenu: true,
  open: true
};
