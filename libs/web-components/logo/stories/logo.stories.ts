const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import type {Logo} from '@finastra/logo';
import '@finastra/logo';

export default {
  title: 'Components/Logo',
  component: 'fds-logo',
  args: {
    dense: false
  }, 
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<Logo> = ({ dense = false }) => {
  return html`<fds-logo  ?dense=${dense}></fsd-logo>`;
};

export const Default: Story<Logo> = Template.bind({});

export const Dense: Story<Logo> = Template.bind({});
Dense.args = {
  dense: true
};
