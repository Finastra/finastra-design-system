const README = require('../README.md');
import '@finastra/fab';
import type { Fab } from '@finastra/fab';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'ACTIONS/Fab',
  component: 'fds-fab',
  args: {
    icon: 'add',
    gradient: false,
    extended: false,
    dense: true,
    label: 'Action'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48601%3A19614'
  }
} as Meta;

const Template: Story<Fab> = ({icon, gradient, extended, dense, label}) => {
  return html`<fds-fab icon=${icon} ?gradient=${gradient} ?extended=${extended} ?dense=${dense} label=${label}></fds-fab>`;
};

export const Default: Story<Fab> = Template.bind({});
Default.args = {
  icon: 'add',
  gradient: false,
  extended: false,
  dense: false,
  label: 'Action'
}


export const Dense: Story<Fab> = Default.bind({});
Dense.args = {
  dense: true
}

export const GradientExtended: Story<Fab> = Default.bind({});
GradientExtended.args = {
  gradient: true,
  extended: true
}