import '@finastra/brand-card';
import '@finastra/launchpad';
import { Launchpad } from '@finastra/launchpad';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes } from './sb-generated/fds-launchpad.json';

const README = require('../README.md');
const demoApps = [
  { name: 'Cash & Liquidity Management', 'sso-initiation-urls': { web: 'https://app1.com' } },
  { name: 'Corporate Payments', 'sso-initiation-urls': { web: 'https://app2.com' } },
  { name: 'Treasury Management', 'sso-initiation-urls': { web: 'https://app3.com' } },
  { name: 'Risk & Compliance', 'sso-initiation-urls': { web: 'https://app4.com' } }
];

export default {
  title: 'NAVIGATION/Launchpad',
  argTypes,
  args: {
    apps: demoApps
  },
  parameters: {
    actions: {
      handles: ['selected', 'launchpage']
    },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    }
  },
  decorators: [
    (story) =>
      html` <style>
          .sb-show-main.sb-main-centered #root {
            padding: 16px;
          }
          body.sb-main-centered #root-inner {
            padding: 64px;
            height: 600px;
          }
        </style>
        ${story()}`
  ]
} as Meta;

const Template: Story<Launchpad> = ({ apps, appNameProperty, shortAppNameProperty, title }) => {
  return html`
    <fds-launchpad .apps=${apps} .appNameProperty=${appNameProperty} .shortAppNameProperty=${shortAppNameProperty} .title=${title}>
      <div slot="tools"></div>
    </fds-launchpad>
  `;
};

const ComplexTemplate: Story<Launchpad> = ({ apps, appNameProperty, shortAppNameProperty, title }) => {
  return html`
    <style>
      .tools-title {
        font: var(--fds-headline-4);
        padding-bottom: var(--fds-spacing-3);
      }
      .tools-list {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-row-gap: 32px;
        grid-column-gap: 56px;
        padding-top: var(--fds-spacing-3);
        padding-bottom: var(--fds-spacing-3);
      }
      .tools-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .tools {
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
    <fds-launchpad .apps=${apps} .appNameProperty=${appNameProperty} .shortAppNameProperty=${shortAppNameProperty} .title=${title}>
      <div slot="tools">
        <div class="tools-title">Tools</div>
        <div class="tools-list">
          <div class="tools-item">
            <fds-brand-card class="tools" label="Designer" extraDense primary></fds-brand-card>
            <div class="tools-name">Designer</div>
          </div>
          <div class="tools-item">
            <fds-brand-card class="tools" label="Link editor" extraDense primary></fds-brand-card>
            <div class="tools-name">Link editor</div>
          </div>
          <div class="tools-item">
            <fds-brand-card class="tools" label="Flow editor" extraDense primary></fds-brand-card>
            <div class="tools-name">Flow editor</div>
          </div>
        </div>
      </div>
    </fds-launchpad>
  `;
};

export const Default: Story<Launchpad> = Template.bind({});

export const WithTools: Story<Launchpad> = ComplexTemplate.bind({});
WithTools.args = {
  apps: demoApps
};
