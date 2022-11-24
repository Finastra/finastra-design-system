const README = require('../README.md');
import '@finastra/avatar';
import { Avatar } from '@finastra/avatar';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-avatar.json';

export default {
  title: 'GRAPHIC ELEMENTS/Avatar',
  component: 'fds-avatar',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48601%3A19597'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story<Avatar> = ({ name, shortName = '', dense = false, large = false, primary = false, secondary = false }) => {
  return html` <fds-avatar name=${name} shortName=${shortName} ?dense=${dense} ?large=${large} ?primary=${primary} ?secondary=${secondary}>
  </fds-avatar>`;
};

export const Default: Story<Avatar> = Template.bind({});
Default.args = {};

export const Large: Story<Avatar> = Template.bind({});
Large.args = {
  large: true
};

export const Dense: Story<Avatar> = Template.bind({});
Dense.args = {
  dense: true
};

export const Primary: Story<Avatar> = Template.bind({});
Primary.args = {
  primary: true
};

export const Secondary: Story<Avatar> = Template.bind({});
Secondary.args = {
  secondary: true
};

export const Letters: Story<Avatar> = Template.bind({});
Letters.args = {
  name: 'John Doe'
};

export const ShortName: Story<Avatar> = Template.bind({});
ShortName.args = {
  name: 'John Doe',
  shortName: 'J'
};
