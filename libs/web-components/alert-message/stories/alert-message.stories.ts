const README = require('../README.md');
import '@finastra/alert-message';
import { AlertMessage, ALERT_LAYOUT } from '@finastra/alert-message';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-alert-message.json';

export default {
  title: 'FORMS/Alert Message',
  component: 'fds-alert-message',
  argTypes,
  args: {
    layout: ALERT_LAYOUT.multiLines
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  cssprops
} as Meta;

const Template: Story<AlertMessage> = ({ type, title, description, icon, withoutIcon, layout, showCloseButton, dense }) => {
  return html` <fds-alert-message
    type=${type}
    title=${title}
    description=${description}
    icon=${icon}
    ?withoutIcon=${withoutIcon}
    layout=${layout}
    ?showCloseButton=${showCloseButton}
    ?dense=${dense}
  >
  </fds-alert-message>`;
};

const TemplateWithActions: Story<AlertMessage> = ({ type, title, description, icon, withoutIcon, layout, showCloseButton, dense }) => {
  return html` <fds-alert-message
    type=${type}
    title=${title}
    description=${description}
    icon=${icon}
    ?withoutIcon=${withoutIcon}
    layout=${layout}
    ?showCloseButton=${showCloseButton}
    ?dense=${dense}
  >
    <fds-button slot="primaryAction" label="Try"></fds-button>
    <fds-text-button slot="secondaryAction" label="Ignore"></fds-text-button>
  </fds-alert-message>`;
};

export const Default: Story<AlertMessage> = Template.bind({});
Default.args = {
  type: 'info',
  title: 'Info',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};

export const Success: Story = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Success',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};

export const Error: Story = Template.bind({});
Error.args = {
  type: 'error',
  title: 'Error',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};

export const Warning: Story = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Warning',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.',
  showCloseButton: true
};

export const Info: Story = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Info',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};

export const singleLine: Story = Template.bind({});
singleLine.args = {
  type: 'success',
  title: 'Success',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.',
  layout: ALERT_LAYOUT.singleLine
};

export const dense: Story = Template.bind({});
dense.args = {
  type: 'success',
  title: 'Success',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.',
  dense: true
};

export const WithActions: Story<AlertMessage> = TemplateWithActions.bind({});
WithActions.args = {
  type: 'info',
  title: 'Info',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};

export const CustomIcon: Story = Template.bind({});
CustomIcon.args = {
  type: 'info',
  title: 'Custom',
  icon: 'code',
  description: 'A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.'
};
