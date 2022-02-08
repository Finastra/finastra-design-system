import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './custom-element.json';
import { Launchpad } from '@finastra/launchpad';

import '@finastra/launchpad';
import '@finastra/app-card';

const README = require('../README.md');
const demoApps = [{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app1.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app2.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app3.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app4.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app5.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app6.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app7.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app8.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app9.com'}},{'name':'App','shortName':'App','sso-initiation-urls':{'web':'https://app10.com'}}];

export default {
  title: 'Components/Launchpad',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<Launchpad> = ({ apps , appNameProperty, shortAppNameProperty, title, baseUrl, tenantId, channelType }) => {
  return html`
    <fds-launchpad
      .apps=${apps}
      .appNameProperty=${appNameProperty}
      .shortAppNameProperty=${shortAppNameProperty}
      .title=${title}
      .baseUrl=${baseUrl}
      .tenantId=${tenantId}
      .channelType=${channelType}
    >
      <div slot='tools'></div>
    </fsd-launchpad>
  `;
};

const ComplexTemplate: Story<Launchpad> = ({ apps , appNameProperty, shortAppNameProperty, title, baseUrl, tenantId, channelType }) => {
  return html`
    <style>
      .tools-title {
        font: var(--fds-headline-4);
        padding-bottom: var(--fds-spacing-3);
      }
      .tools-list {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-row-gap: 32px;
        grid-column-gap: 56px;
        padding-top: var(--fds-spacing-3);
        padding-bottom: var(--fds-spacing-3);
      }
      .tools-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .tools-name {
        font: var(--fds-subtitle-3);
        color: var(--fds-on-surface);
        padding-top: var(--fds-spacing-2);
        text-align: center;
      }
    </style>
    <fds-launchpad
      .apps=${apps}
      .appNameProperty=${appNameProperty}
      .shortAppNameProperty=${shortAppNameProperty}
      .title=${title}
      .baseUrl=${baseUrl}
      .tenantId=${tenantId}
      .channelType=${channelType}
    >
      <div slot='tools'>
        <div class='tools-title'>Tools</div>
        <div class='tools-list'>
          <div>
            <fds-app-card class='tools-item' label='Tool' extraDense primary></fds-app-card>
            <div class='tools-name'>Tool</div>
          </div>
          <div>
            <fds-app-card class='tools-item' label='Tool' extraDense primary></fds-app-card>
            <div class='tools-name'>Tool</div>
          </div>
          <div>
            <fds-app-card class='tools-item' label='Tool' extraDense primary></fds-app-card>
            <div class='tools-name'>Tool</div>
          </div>
          <div>
            <fds-app-card class='tools-item' label='Tool' extraDense primary></fds-app-card>
            <div class='tools-name'>Tool</div>
          </div>
        </div>
      </div>
    </fsd-launchpad>
  `;
};

export const Default: Story<Launchpad> = Template.bind({});
Default.args = {
  apps: demoApps
};

export const WithTools: Story<Launchpad> = ComplexTemplate.bind({});
WithTools.args = {
  apps: demoApps
};
