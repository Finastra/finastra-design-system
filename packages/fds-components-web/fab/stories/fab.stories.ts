const README = require('../README.md');
import '@finastra/fab';
import type { Fab } from '@finastra/fab';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-fab.json';

export default {
  title: 'ACTIONS/Fab',
  component: 'fds-fab',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1974'
    },
    cssprops
  }
} as Meta;

const Template: Story<Fab> = ({ icon, gradient, extended, dense, label }) => {
  return html`<fds-fab icon=${icon} ?gradient=${gradient} ?extended=${extended} ?dense=${dense} label=${label}></fds-fab>`;
};

export const Default: Story<Fab> = Template.bind({});
Default.args = {
  gradient: false,
  extended: false,
  dense: false
};

export const Dense: Story<Fab> = Default.bind({});
Dense.args = {
  dense: true
};

export const GradientExtended: Story<Fab> = Default.bind({});
GradientExtended.args = {
  gradient: true,
  extended: true
};
