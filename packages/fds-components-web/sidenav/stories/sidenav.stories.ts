const README = require('../README.md');
import '@finastra/icon';
import '@finastra/list';
import '@finastra/logo';
import '@finastra/sidenav';
import { DRAWER_TYPES, Sidenav } from '@finastra/sidenav';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes } from './sb-generated/fds-sidenav.json';

export default {
  title: 'NAVIGATION/Sidenav',
  argTypes,
  args: {
    type: DRAWER_TYPES.NONE
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=63401%3A19775'
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        body.sb-main-centered #root-inner {
          padding: 0;
        }

        .fds-sidenav-header {
          background-color: var(--fds-background);
          height: 210px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fds-sidenav-list,
        .navigation {
          --mdc-theme-text-primary-on-background: var(--fds-on-background);
          width: 100%;
        }

        .main-content {
          padding: var(--fds-spacing-4);
          color: var(--fds-on-background);
          font: var(--fds-body-1);
        }
      </style>`
  ]
} as Meta;

const Template: Story<Sidenav> = ({ type }) => {
  return html`<fds-sidenav .type=${type}>
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
    <div slot="navigation" class="navigation">
      <fds-list activatable>
        <fds-list-item graphic="icon">
          <span>Tab 1</span>
        </fds-list-item>
        <fds-list-item graphic="icon">
          <span>Tab 2</span>
        </fds-list-item>
      </fds-list>
    </div>
    <div slot="appContent">
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

export const Default: Story<Sidenav> = Template.bind({});
