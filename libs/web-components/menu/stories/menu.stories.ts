const README = require('../README.md');
import '@finastra/button';
import '@finastra/menu';
import type { Menu } from '@finastra/menu';
import '@material/mwc-list/mwc-list-item';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/Menu',
  component: 'fds-menu',
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<Menu> = () => {
  return html`
    <div style="position: relative;">
        <fds-button id="basicButton" raised label="Open Basic Menu"></fds-button>
        <fds-menu id="basicMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </fds-menu>
    </div>
  `;
};

export const Default: Story<Menu> = Template.bind({});
