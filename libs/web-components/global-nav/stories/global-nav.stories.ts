const README = require('../README.md');
import '@finastra/app-bar';
import { AppBar } from '@finastra/app-bar';
import '@material/mwc-drawer';
import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/Global Nav',
  component: 'fds-app-bar',
  //argTypes,
  parameters: {
    docs: {
      description: { component: README }
    }
    //cssprops
  },
  decorators: [
    (story) => html` <style>
        .sb-show-main.sb-main-centered {
          display: block;
        }
        .sb-show-main.sb-main-centered #root {
          padding: 0;
        }
        body.sb-main-centered #root-inner {
          padding: 0;
        }
        fds-app-bar {
          min-width: calc(100vw - 180px);
        }
        mwc-icon-button {
          color: var(--fds-primary);
        }
        p {
          color: var(--fds-on-background);
          font: var(--fds-body-1);
        }
        fds-button {
          padding-left: 16px;
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
          margin: -40px -15px;
        }
        .fds-sidenav-list {
          --mdc-theme-text-primary-on-background: var(--fds-on-background);
          width: 100%;
        }
      </style>
      <script>
        const drawer = document.getElementsByTagName('mwc-drawer')[0];
        if (drawer) {
          const container = drawer.parentNode;
          container.addEventListener('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
          });
        }
      </script>
      ${story()}`
  ]
} as Meta;

const Template: Story<AppBar> = ({ appName = '', logoRedirectUri = '', prominent = false, transparent = false }) => {
  return html` <mwc-drawer hasHeader type="modal">
    <div class="fds-sidenav-header" slot="title">
      <fds-logo></fds-logo>
    </div>
    <div class="fds-sidenav">
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

        <fds-button text label="Tab 1" slot="navigation"></fds-button>
        <fds-button text label="Tab 2" slot="navigation"></fds-button>

        <mwc-icon-button icon="notifications" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="info" slot="actions"></mwc-icon-button>
        <fds-avatar dense slot="actions"></fds-avatar>
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
  </mwc-drawer>`;
};

export const Default: Story<AppBar> = Template.bind({});
/* <fds-app-bar 
        appName=${appName} 
        logoRedirectUri=${logoRedirectUri}
        ?prominent=${prominent}
        ?transparent=${transparent}
      >
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>

        <mwc-icon-button icon="notifications" slot="actions"></mwc-icon-button>
        <mwc-icon-button icon="info" slot="actions"></mwc-icon-button>
        <fds-avatar dense slot="actions"></fds-avatar>
        <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
      </fds-app-bar> */
