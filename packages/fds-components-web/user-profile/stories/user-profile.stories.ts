const README = require('../README.md');
import '@finastra/icon';
import '@finastra/user-profile';
import type { UserProfile } from '@finastra/user-profile';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-user-profile.json';

export default {
  title: 'NAVIGATION/User Profile',
  argTypes,
  args: {
    dense: false,
    userName: 'Raya Hristova',
    shortName: ''
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=827%3A5864'
    },
    cssprops
  }
} as Meta;

const Template: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', dense = false }) => {
  return html` <style>
      fds-user-profile {
        height: 300px;
      }
      fds-user-profile fds-button {
        line-height: 0px;
      }
      fds-user-profile fds-button + fds-button,
      fds-user-profile fds-button + fds-text-button {
        margin-top: var(--fds-spacing-2);
      }
    </style>

    <fds-user-profile userName=${userName} shortName=${shortName} ?dense=${dense}>
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-text-button text fullwidth label="View profile"></fds-text-button>
      </div>
    </fds-user-profile>`;
};

export const Default: Story<UserProfile> = Template.bind({});

const ComplexTemplate: Story<UserProfile> = ({ userName = 'Raya Hristova', shortName = '', dense = true }) => {
  return html` <style>
  fds-user-profile {
   height: 300px;
  }
  fds-user-profile p {
    font: var(--fds-body-1);
    color: var(--fds-on-background);
  }
  fds-user-profile fds-list-item {
    color: var(--fds-on-background);
    margin-top: calc(var(--fds-spacing-3) * -1);
  }
  fds-user-profile fds-list-item + fds-list-item{
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

    <fds-user-profile userName=${userName} shortName=${shortName} ?dense=${dense}>
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
      <div slot="actions">
        <div class="item-list">
          <fds-list-item graphic="icon">
            <span>item one</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>item two</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
        </div>
        <fds-divider></fds-divider>
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
    </fds-user-profile>`;
};

export const Dense: Story<UserProfile> = ComplexTemplate.bind({});
Dense.args = {
  dense: true
};
