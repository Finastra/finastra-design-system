const README = require('../README.md');
import {cssprops, argTypes} from './custom-element.json';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/logo';

export default {
  title: 'Components/Logo',
  component: 'fds-logo',
  argTypes,
  args: {
    dense: false
  }, 
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ dense = false }) => {
  return html`<fds-logo  ?dense=${dense}></fds-logo>`;
};

export const Default: Story = Template.bind({});

export const Dense: Story = Template.bind({});
Dense.args = {
  dense: true
};
