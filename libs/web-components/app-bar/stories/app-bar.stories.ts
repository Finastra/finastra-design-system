const README = require('../README.md');
import {cssprops, argTypes} from './custom-element.json';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/app-bar';
import { AppBar } from '@finastra/app-bar';

export default {
  title: 'Components/App bar',
  component: 'fds-app-bar',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops 
  },
  decorators: [(story) => html`<style>
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
  </style>${story()}`],
} as Meta;

const Template: Story<AppBar> = ({ appName = '', logoRedirectUri = '', prominent = false, transparent = false}) => {
  return html`<fds-app-bar 
  appName=${appName} 
  logoRedirectUri=${logoRedirectUri}
  ?prominent=${prominent}
  ?transparent=${transparent}
>
  <mwc-icon-button icon="menu" slot="menu"></mwc-icon-button>

  <mwc-icon-button icon="notifications" slot="actions"></mwc-icon-button>
  <mwc-icon-button icon="info" slot="actions"></mwc-icon-button>
  <fds-avatar dense slot="actions"></fds-avatar>
  <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
</fds-app-bar>`;
};

export const Default: Story<AppBar> = Template.bind({});

export const Name: Story<AppBar> = Template.bind({});
Name.args = {
  appName: 'Finastra'
};

export const Transparent: Story<AppBar> = Template.bind({});
Transparent.args = {
  transparent: true,
  appName: 'Finastra'
};

const NavigationalTemplate: Story<AppBar> = ({ appName = 'Finastra', logoRedirectUri = '', prominent = false, transparent = false}) => {
  return html`<fds-app-bar  
  appName=${appName} 
  logoRedirectUri=${logoRedirectUri}
  ?prominent=${prominent}
  ?transparent=${transparent}
>
    <mwc-icon-button icon="menu" slot="menu"></mwc-icon-button>

    <fds-button text label="Tab 1" slot="navigation"></fds-button>
    <fds-button text label="Tab 2" slot="navigation"></fds-button>

    <mwc-icon-button icon="notifications" slot="actions"></mwc-icon-button>
    <mwc-icon-button icon="info" slot="actions"></mwc-icon-button>
    <fds-avatar dense slot="actions"></fds-avatar>
    <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
</fds-app-bar>`;
};

export const WithNavigation: Story<AppBar> = NavigationalTemplate.bind({});
WithNavigation.args = {
  appName: 'Finastra'
};

export const Prominent: Story<AppBar> = NavigationalTemplate.bind({});
Prominent.args = {
  prominent: true,
  appName: 'Finastra'
};

const ButtonTemplate: Story<AppBar> = ({ appName = 'Finastra', logoRedirectUri = '', prominent = false, transparent = false}) => {
  return html`<fds-app-bar   
  appName=${appName}
  logoRedirectUri=${logoRedirectUri}
  ?prominent=${prominent}
  ?transparent=${transparent}
>
    <mwc-icon-button icon="menu" slot="menu"></mwc-icon-button>

    <mwc-icon-button icon="notifications" slot="actions"></mwc-icon-button>
    <mwc-icon-button icon="info" slot="actions"></mwc-icon-button>
    <fds-avatar dense slot="actions"></fds-avatar>
    <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
    <fds-button secondary label="Sign in" slot="actions"></fds-button>
    <fds-button outlined label="Sign up" slot="actions"></fds-button>
</fds-app-bar>`;
};

export const WithButtons: Story<AppBar> = ButtonTemplate.bind({});
WithButtons.args = {
  appName: 'Finastra'
};
