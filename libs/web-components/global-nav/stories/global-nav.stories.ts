import '@finastra/app-bar';
import '@finastra/app-card';
import '@finastra/launchpad';
import '@finastra/sidenav';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

const README = require('../README.md');
const demoApps = [
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app1.com' } },
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app2.com' } },
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app3.com' } },
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app4.com' } },
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app5.com' } },
  { name: 'App', shortName: 'App', 'sso-initiation-urls': { web: 'https://app6.com' } }
];

export default {
  title: 'Patterns/Global Nav',
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=248%3A5777'
    }
  },
  args: {
    apps: demoApps,
    appName: 'Super App'
  },
  decorators: [
    (story) => html`${story()}
      <style>
        .sb-show-main.sb-main-centered {
          display: block;
        }
        .sb-show-main.sb-main-centered #root {
          padding: 0;
        }
        body.sb-main-centered #root-inner {
          padding: 0;
        }
        #root-inner fds-app-bar {
          min-width: calc(100vw - 180px);
        }
        .main-content {
          padding: var(--fds-spacing-4);
          color: var(--fds-on-background);
          font: var(--fds-body-1);
        }
        fds-button {
          padding-left: var(--fds-spacing-3);
        }
        fds-user-profile fds-button {
          line-height: 0px;
          padding: var(--fds-spacing-0) var(--fds-spacing-3) var(--fds-spacing-2) var(--fds-spacing-3);
        }
        fds-user-profile fds-button + fds-button {
          margin-top: var(--fds-spacing-2);
        }
      </style>
      <style>
        .fds-sidenav {
          --mdc-drawer-width: 300px;
          background-color: var(--fds-surface);
          color: var(--fds-on-surface);
        }
        .fds-sidenav-header {
          background-color: var(--fds-background);
          height: 210px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fds-sidenav-list {
          --mdc-theme-text-primary-on-background: var(--fds-on-background);
          width: 100%;
        }
      </style>`
  ]
} as Meta;

const Template: Story = ({ appName, logoRedirectUri = '', prominent = false, transparent = false, apps }) => {
  return html`<fds-sidenav type="modal">
  <div slot="sidenavContent">
    <div class="fds-sidenav-header">
      <fds-logo></fds-logo>
    </div>
    <div class="fds-sidenav-list">
      <mwc-list activatable>
        <mwc-list-item selected activated graphic="icon">
          <span>Home</span>
          <mwc-icon slot="graphic">home</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Applications</span>
          <mwc-icon slot="graphic">dashboard</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Tools</span>
          <mwc-icon slot="graphic">extension</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Settings</span>
          <mwc-icon slot="graphic">settings</mwc-icon>
        </mwc-list-item>
      </mwc-list>
    </div>
  </div>
  <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>

        <fds-launchpad
          .apps=${apps}
          slot="actions"
        >
        </fds-launchpad>

        <mwc-icon-button icon="search" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="notifications_none" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="help_outline" slot="actions"></mwc-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
      </fds-app-bar>
      <div class="main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
</fsd-sidenav>`;
};

export const Default: Story = Template.bind({});

export const TransparentAppBar: Story = Template.bind({});
TransparentAppBar.args = {
  appName: 'App with transparent app bar',
  transparent: true
};
TransparentAppBar.decorators = [
  (story) => html`${story()}
    <style>
      fds-sidenav {
        background: url('https://res.cloudinary.com/ffdc/image/upload/v1645178291/Storybook/Global%20Nav/Global_nav_transparent_background_oyautp.png')
          no-repeat center center fixed;
        background-size: cover;
      }
    </style>`
];

const WithTabsTemplate: Story = ({ appName, logoRedirectUri = '', prominent = false, transparent = false, apps }) => {
  return html`<fds-sidenav type="modal">
  <div slot="sidenavContent">
    <div class="fds-sidenav-header">
      <fds-logo></fds-logo>
    </div>
    <div class="fds-sidenav-list">
      <mwc-list activatable>
        <mwc-list-item selected activated graphic="icon">
          <span>Home</span>
          <mwc-icon slot="graphic">home</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Applications</span>
          <mwc-icon slot="graphic">dashboard</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Tools</span>
          <mwc-icon slot="graphic">extension</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Settings</span>
          <mwc-icon slot="graphic">settings</mwc-icon>
        </mwc-list-item>
      </mwc-list>
    </div>
  </div>
  <div slot="navigation">
    <fds-button text label="Tab 1"></fds-button>
    <fds-button text label="Tab 2"></fds-button>
  </div>
  <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>

        <fds-button text label="Tab 1" slot="navigation"></fds-button>
        <fds-button text label="Tab 2" slot="navigation"></fds-button>

        <fds-launchpad
          .apps=${apps}
          slot="actions"
        >
        </fds-launchpad>

        <mwc-icon-button icon="search" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="notifications_none" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="help_outline" slot="actions"></mwc-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
      </fds-app-bar>
      <div class="main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
</fsd-sidenav>`;
};

export const WithTabs: Story = WithTabsTemplate.bind({});
WithTabs.args = {
  appName: 'App with tabs'
};

export const ProminentAppBar: Story = WithTabsTemplate.bind({});
ProminentAppBar.args = {
  appName: 'App with tabs on a second row',
  prominent: true
};

const WithButtonsTemplate: Story = ({ appName = '', logoRedirectUri = '', prominent = false, transparent = false, apps }) => {
  return html`<fds-sidenav type="modal">
  <div slot="sidenavContent">
    <div class="fds-sidenav-header">
      <fds-logo></fds-logo>
    </div>
    <div class="fds-sidenav-list">
      <mwc-list activatable>
        <mwc-list-item selected activated graphic="icon">
          <span>Home</span>
          <mwc-icon slot="graphic">home</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Applications</span>
          <mwc-icon slot="graphic">dashboard</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Tools</span>
          <mwc-icon slot="graphic">extension</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="icon">
          <span>Settings</span>
          <mwc-icon slot="graphic">settings</mwc-icon>
        </mwc-list-item>
      </mwc-list>
    </div>
  </div>
  <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>

        <fds-launchpad
          .apps=${apps}
          slot="actions"
        >
        </fds-launchpad>

        <mwc-icon-button icon="search" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="notifications_none" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="help_outline" slot="actions"></mwc-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
        <fds-button label="Logout" icon="logout" slot="actions"></fds-button>
      </fds-app-bar>
      <div class="main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
</fsd-sidenav>`;
};

export const WithButtons: Story = WithButtonsTemplate.bind({});
WithButtons.args = {
  appName: 'App with explicit logout'
};
