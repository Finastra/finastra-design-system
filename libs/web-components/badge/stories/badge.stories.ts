const README = require('../README.md');
import '@finastra/badge';
import { Badge, COLOR, POSITION, TYPE } from '@finastra/badge';
import '@finastra/badge-container';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from './custom-element.json';

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  argTypes,
  args: {
    position: POSITION.center,
    color: COLOR.outlined,
    type: TYPE.none
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  }
} as Meta;

const Template: Story<Badge> = ({value, color, position,type }) => {
  return html`
    <fds-badge value=${value} color=${color} position=${position} type=${type}></fds-badge>
    `;
};


export const Default: Story<Badge> = Template.bind({});
Default.args = {
  value: "123",
  color: "success"
};


export const Indicator: Story<Badge> = Template.bind({});
Indicator.args = {
  type: 'indicator',
  color: "success"
};
