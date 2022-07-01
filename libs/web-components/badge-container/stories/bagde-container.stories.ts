const README = require('../README.md');
import '@finastra/badge-container';
import type { badgeContainer } from '@finastra/badge-container';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'DATA DISPLAY/BadgeContainer',
  component: 'fds-badge-container',
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}
  <style>
    fds-badge-container span {
      font: var(--fds-body-1);
      color: var(--fds-on-background);
    }
    fds-badge-container mwc-icon-button {
      color: var(--fds-primary);
    }
 </style>`
  ]
} as Meta;

const Template: Story<badgeContainer> = ({ }) => {
  return html`<fds-badge-container>
    <span> Success</span>
    <fds-badge value="1" color="success"></fds-badge>
  </fds-badge-container>`;
};

const IconButtonTemplate: Story<badgeContainer> = ({}) => {
  return html`<fds-badge-container>
    <mwc-icon-button icon="bookmark_border"></mwc-icon-button>
    <fds-badge value="1" color="success" position= "topRight"></fds-badge>
  </fds-badge-container>`;
};


const ButtonTemplate: Story<badgeContainer> = ({}) => {
  return html`<fds-badge-container>
    <fds-button label="button" icon="notifications"></fds-button>
    <fds-badge value="1" color="success" position="topRight"></fds-badge>
  </fds-badge-container>`;
};

const IndicatorTemplate: Story<badgeContainer> = ({}) => {
  return html`<fds-badge-container>
    <mwc-icon-button icon="bookmark_border"></mwc-icon-button>
    <fds-badge type='indicator' color="success" position="topLeft"></fds-badge>
  </fds-badge-container>`;
};


const IndicatorRightTemplate: Story<badgeContainer> = ({}) => {
  return html`<fds-badge-container>
    <mwc-icon-button icon="bookmark_border"></mwc-icon-button>
    <fds-badge type='indicator' color="success" position="topRight"></fds-badge>
  </fds-badge-container>`;
};

export const Default: Story<badgeContainer> = Template.bind({});

export const WithIconButton: Story = IconButtonTemplate.bind({});

export const WithButton: Story = ButtonTemplate.bind({});

export const WithIndicator: Story = IndicatorTemplate.bind({});

export const RightTemplate: Story = IndicatorRightTemplate.bind({});

