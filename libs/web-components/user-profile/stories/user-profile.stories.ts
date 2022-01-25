const README = require('../README.md');
import { html } from 'lit-html';
import { Meta, Story } from '@storybook/web-components';
import type {UserProfile} from '@finastra/user-profile';
import '@finastra/user-profile';

export default {
  title: 'Components/User Profile',
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  argTypes: {
    denseMenu: { control: 'boolean' },
    denseAvatar: { control: 'boolean' },
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
    denseAvatar: false,
    open: false,
    userName: 'Raya Hristova',
    shortName: ''
  }
} as Meta;

const Template: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName='', denseMenu = false, denseAvatar = false, open = true }) => {
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

    <fds-user-profile userName=${userName} shortName=${shortName} ?denseMenu=${denseMenu} ?denseAvatar=${denseAvatar} ?open=${open}>
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

  const ComplexTemplate: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName='', denseMenu = true, denseAvatar=false, open = true }) => {
  return html` <style>
      fds-user-profile {
        height: 300px;
      }
      fds-user-profile p {
        font: var(--fds-body-1);
        color: var(--fds-on-background);
      }
      fds-user-profile .item-list {
        padding-bottom: 16px;
      }
      fds-user-profile mwc-list-item {
        color: var(--fds-on-background);
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

    <fds-user-profile userName=${userName} shortName=${shortName} ?denseMenu=${denseMenu} ?denseAvatar=${denseAvatar} ?open=${open}>
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
  denseAvatar: true,
  open: true
};
