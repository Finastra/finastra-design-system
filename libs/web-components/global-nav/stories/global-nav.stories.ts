const README = require('../README.md');
import '@finastra/app-bar';
import '@finastra/sidenav';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Patterns/Global Nav',
  parameters: {
    docs: {
      description: { component: README }
    }
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
        .main-content {
          padding: var(--fds-spacing-4);
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
      ${story()}`
  ]
} as Meta;

const Template: Story = ({ appName = '', logoRedirectUri = '', prominent = false, transparent = false }) => {
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
    <mwc-list activatable>
      <mwc-list-item graphic="icon">
        <span>Tab 1</span>
      </mwc-list-item>
      <mwc-list-item graphic="icon">
        <span>Tab 2</span>
      </mwc-list-item>
    </mwc-list>
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
</fsd-sidenav>`;
};

export const Default: Story = Template.bind({});
