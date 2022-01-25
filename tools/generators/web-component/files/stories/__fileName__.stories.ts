const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/<%= fileName %>';


export default {
  title: 'Components/<%= className %>',
  component: 'fds-<%= fileName %>',
  args: {
    name: 'World'
  }, 
  parameters: {
    docs: {
      description: { component: README }
    },
  }
} as Meta;

const Template: Story = ({ name = 'World' }) => {
  return html`<fds-<%= fileName %>  .name=${name}></fsd-<%= fileName %>>`;
};

export const Default: Story = Template.bind({});
