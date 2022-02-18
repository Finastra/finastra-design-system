const README = require('../README.md');
import '@finastra/logo';
import '@finastra/sidenav';
import { DRAWER_TYPES, Sidenav } from '@finastra/sidenav';
import '@material/mwc-icon';
import '@material/mwc-list';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './custom-element.json';

export default {
  title: 'Components/Sidenav',
  argTypes,
  args: {
    type: DRAWER_TYPES.NONE
  },
  parameters: {
    docs: {
      description: { component: README }
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
        .fds-sidenav-list, .navigation {
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
  return html`<fds-sidenav  .type=${type}>
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
  <div slot="navigation" class="navigation">
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
    <div class="main-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
    </div>
  </div>
</fsd-sidenav>`;
};

export const Default: Story<Sidenav> = Template.bind({});
