const README = require('../README.md');
import '@finastra/app-bar';
import { AppBar } from '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { actions, argTypes, cssprops } from './sb-generated/fds-app-bar.json';

export default {
  title: 'NAVIGATION/App Bar',
  component: 'fds-app-bar',
  argTypes,
  args: {
    appName: 'Finastra'
  },
  parameters: {
    actions,
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=64310%3A31492'
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-app-bar {
          min-width: calc(68vw - 100px);
        }
        p {
          color: var(--fds-on-background);
          font: var(--fds-body-1);
        }
        fds-button {
          padding-left: 16px;
        }
        fds-user-profile fds-button {
          padding-right: 16px;
        }
        fds-user-profile fds-button + fds-button {
          margin-top: var(--fds-spacing-2);
        }
      </style>`
  ]
} as Meta;

const Template: Story<AppBar> = ({ appName, logoRedirectUri = '', prominent = false, transparent = false }) => {
  return html` <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
    <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

    <fds-icon-button icon="notifications_none" slot="actions"></fds-icon-button>
    <fds-icon-button icon="help_outline" slot="actions"></fds-icon-button>
    <fds-user-profile slot="actions" userName="Raya Hristova" shortName="R">
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-button text fullwidth label="View profile"></fds-button>
      </div>
    </fds-user-profile>
    <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
  </fds-app-bar>`;
};

export const Default: Story<AppBar> = Template.bind({});
Default.args = {
  appName: ''
};

export const Name: Story<AppBar> = Template.bind({});

export const Transparent: Story<AppBar> = Template.bind({});
Transparent.args = {
  transparent: true
};

const NavigationalTemplate: Story<AppBar> = ({ appName, logoRedirectUri = '', prominent = false, transparent = false }) => {
  return html`<fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
    <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

    <fds-button text label="Tab 1" slot="navigation"></fds-button>
    <fds-button text label="Tab 2" slot="navigation"></fds-button>

    <fds-icon-button icon="notifications_none" slot="actions"></fds-icon-button>
    <fds-icon-button icon="help_outline" slot="actions"></fds-icon-button>
    <fds-user-profile slot="actions" userName="Raya Hristova" shortName="R">
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-button text fullwidth label="View profile"></fds-button>
      </div>
    </fds-user-profile>
    <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
  </fds-app-bar>`;
};

export const WithNavigation: Story<AppBar> = NavigationalTemplate.bind({});

export const Prominent: Story<AppBar> = NavigationalTemplate.bind({});
Prominent.args = {
  prominent: true
};

const ButtonTemplate: Story<AppBar> = ({ appName = 'Finastra', logoRedirectUri = '', prominent = false, transparent = false }) => {
  return html`<fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
    <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

    <fds-icon-button icon="notifications_none" slot="actions"></fds-icon-button>
    <fds-icon-button icon="help_outline" slot="actions"></fds-icon-button>
    <fds-user-profile slot="actions" userName="Raya Hristova" shortName="R">
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-button text fullwidth label="View profile"></fds-button>
      </div>
    </fds-user-profile>
    <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
    <fds-button secondary label="Sign in" slot="actions"></fds-button>
    <fds-button outlined label="Sign up" slot="actions"></fds-button>
  </fds-app-bar>`;
};

export const WithButtons: Story<AppBar> = ButtonTemplate.bind({});
