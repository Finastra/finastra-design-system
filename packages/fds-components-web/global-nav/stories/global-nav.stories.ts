import '@finastra/app-bar';
import '@finastra/brand-card';
import '@finastra/icon';
import '@finastra/icon-button';
import '@finastra/launchpad';
import '@finastra/list';
import '@finastra/sidenav';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';

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
  title: 'PATTERN/Global Nav',
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
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
        .icon-bar-content {
          display: flex;
          flex-direction: row;
        }
        fds-icon-bar {
          margin-right: 32px;
          margin-left: -16px;
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
        <fds-list activatable>
          <fds-list-item selected activated graphic="icon">
            <span>Home</span>
            <fds-icon slot="graphic">home</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Applications</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Tools</span>
            <fds-icon slot="graphic">extension</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Settings</span>
            <fds-icon slot="graphic">settings</fds-icon>
          </fds-list-item>
        </fds-list>
      </div>
    </div>
    <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

        <fds-launchpad .apps=${apps} slot="actions"> </fds-launchpad>

        <fds-icon-button icon="search" slot="actions"></fds-icon-button>
        <fds-icon-button icon="notifications" slot="actions"></fds-icon-button>
        <fds-icon-button icon="help" slot="actions"></fds-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
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
  </fds-sidenav>`;
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
        <fds-list activatable>
          <fds-list-item selected activated graphic="icon">
            <span>Home</span>
            <fds-icon slot="graphic">home</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Applications</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Tools</span>
            <fds-icon slot="graphic">extension</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Settings</span>
            <fds-icon slot="graphic">settings</fds-icon>
          </fds-list-item>
        </fds-list>
      </div>
    </div>
    <div slot="navigation">
      <fds-button text label="Tab 1"></fds-button>
      <fds-button text label="Tab 2"></fds-button>
    </div>
    <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

        <fds-button text label="Tab 1" slot="navigation"></fds-button>
        <fds-button text label="Tab 2" slot="navigation"></fds-button>

        <fds-launchpad .apps=${apps} slot="actions"> </fds-launchpad>

        <fds-icon-button icon="search" slot="actions"></fds-icon-button>
        <fds-icon-button icon="notifications" slot="actions"></fds-icon-button>
        <fds-icon-button icon="help" slot="actions"></fds-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
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
  </fds-sidenav>`;
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
        <fds-list activatable>
          <fds-list-item selected activated graphic="icon">
            <span>Home</span>
            <fds-icon slot="graphic">home</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Applications</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Tools</span>
            <fds-icon slot="graphic">extension</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Settings</span>
            <fds-icon slot="graphic">settings</fds-icon>
          </fds-list-item>
        </fds-list>
      </div>
    </div>
    <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

        <fds-launchpad .apps=${apps} slot="actions"> </fds-launchpad>

        <fds-icon-button icon="search" slot="actions"></fds-icon-button>
        <fds-icon-button icon="notifications" slot="actions"></fds-icon-button>
        <fds-icon-button icon="help" slot="actions"></fds-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
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
  </fds-sidenav>`;
};

export const WithButtons: Story = WithButtonsTemplate.bind({});
WithButtons.args = {
  appName: 'App with explicit logout'
};

const WithIconBarTemplate: Story = ({ appName = '', logoRedirectUri = '', prominent = false, transparent = false, apps }) => {
  return html`<fds-sidenav type="modal">
    <div slot="sidenavContent">
      <div class="fds-sidenav-header">
        <fds-logo></fds-logo>
      </div>
      <div class="fds-sidenav-list">
        <fds-list activatable>
          <fds-list-item selected activated graphic="icon">
            <span>Home</span>
            <fds-icon slot="graphic">home</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Applications</span>
            <fds-icon slot="graphic">dashboard</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Tools</span>
            <fds-icon slot="graphic">extension</fds-icon>
          </fds-list-item>
          <fds-list-item graphic="icon">
            <span>Settings</span>
            <fds-icon slot="graphic">settings</fds-icon>
          </fds-list-item>
        </fds-list>
      </div>
    </div>
    <div slot="appContent">
      <fds-app-bar appName=${appName} logoRedirectUri=${logoRedirectUri} ?prominent=${prominent} ?transparent=${transparent}>
        <fds-icon-button icon="menu" slot="navigationIcon"></fds-icon-button>

        <fds-launchpad .apps=${apps} slot="actions"> </fds-launchpad>

        <fds-icon-button icon="search" slot="actions"></fds-icon-button>
        <fds-icon-button icon="notifications" slot="actions"></fds-icon-button>
        <fds-icon-button icon="help" slot="actions"></fds-icon-button>
        <fds-user-profile slot="actions" userName="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth label="Logout" icon="logout"></fds-button>
            <fds-button text fullwidth label="View profile"></fds-button>
          </div>
        </fds-user-profile>
        <fds-icon-button icon="more_vert" slot="actions"></fds-icon-button>
        <fds-button label="Logout" icon="logout" slot="actions"></fds-button>
      </fds-app-bar>
      <div class="main-content">
        <div class="icon-bar-content">
          <fds-icon-bar>
            <fds-icon-bar-item data-tippy-content="This is a tooltip" current icon="home" notification="2"></fds-icon-bar-item>
            <fds-icon-bar-item label="Account" data-tippy-content="This is a tooltip" icon="credit_card"></fds-icon-bar-item>
            <fds-icon-bar-item label="Calendar" data-tippy-content="This is a tooltip" icon="event" notification="1"></fds-icon-bar-item>

            <fds-icon-bar-item data-tippy-content="This is a tooltip" slot="footer" icon="add"></fds-icon-bar-item>
          </fds-icon-bar>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </fds-sidenav>`;
};

export const WithIconBar: Story = WithIconBarTemplate.bind({});
WithIconBar.args = {
  appName: 'App with explicit logout'
};
