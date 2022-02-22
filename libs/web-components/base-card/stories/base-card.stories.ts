const README = require('../README.md');
import '@finastra/base-card';
import { BaseCard } from '@finastra/base-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Base card',
  component: 'fds-base-card',
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

const Template: Story<BaseCard> = ({ outlined = false }) => {
  return html` <fds-base-card
    ?outlined=${outlined}
    style="height: 100px;
  width: 200px;"
  >
  </fds-base-card>`;
};

export const Default: Story<BaseCard> = Template.bind({});
Default.args = {};

export const Outlined: Story<BaseCard> = Template.bind({});
Outlined.args = {
  outlined: true
};
