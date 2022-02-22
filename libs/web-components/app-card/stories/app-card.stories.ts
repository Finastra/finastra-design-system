const README = require('../README.md');
import '@finastra/app-card';
import { AppCard } from '@finastra/app-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/App card',
  component: 'fds-app-card',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story<AppCard> = ({ label, shortLabel = '', dense = false, extraDense = false, large = false, secondary = false }) => {
  return html` <fds-app-card
    label=${label}
    shortLabel=${shortLabel}
    ?dense=${dense}
    ?extraDense=${extraDense}
    ?large=${large}
    ?secondary=${secondary}
  >
  </fds-app-card>`;
};

export const Default: Story<AppCard> = Template.bind({});
Default.args = {
  label: 'Application'
};

export const Dense: Story<AppCard> = Template.bind({});
Dense.args = {
  label: 'Application',
  dense: true
};

export const ExtraDense: Story<AppCard> = Template.bind({});
ExtraDense.args = {
  label: 'Application',
  extraDense: true
};

export const Large: Story<AppCard> = Template.bind({});
Large.args = {
  label: 'Application',
  large: true
};

export const Secondary: Story<AppCard> = Template.bind({});
Secondary.args = {
  label: 'Application',
  secondary: true
};

export const ShortLabel: Story<AppCard> = Template.bind({});
ShortLabel.args = {
  label: 'Application',
  shortLabel: 'APP'
};
