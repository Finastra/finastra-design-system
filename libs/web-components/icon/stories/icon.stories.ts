const README = require('../README.md');
import '@finastra/icon';
import type { Icon } from '@finastra/icon';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-icon.json';

export default {
  title: 'GRAPHIC ELEMENTS/Icon',
  component: 'fds-icon',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=422%3A6085'
    },
    cssprops
  }
} as Meta;

const Template: Story<Icon> = ({ dense, large, extra_large, primary, secondary, success, error, gradient }) => {
  return html`<fds-icon
    ?dense=${dense}
    ?large=${large}
    ?extra_large=${extra_large}
    ?primary=${primary}
    ?secondary=${secondary}
    ?success=${success}
    ?error=${error}
    ?gradient=${gradient}
    >home</fds-icon
  >`;
};

export const Default: Story<Icon> = Template.bind({});

export const Dense: Story<Icon> = Template.bind({});
Dense.args = {
  dense: true
};

export const Large: Story<Icon> = Template.bind({});
Large.args = {
  large: true
};

export const ExtraLarge: Story<Icon> = Template.bind({});
ExtraLarge.args = {
  extra_large: true
};

export const Primary: Story<Icon> = Template.bind({});
Primary.args = {
  primary: true
};

export const Secondary: Story<Icon> = Template.bind({});
Secondary.args = {
  secondary: true
};

export const success: Story<Icon> = Template.bind({});
success.args = {
  success: true
};

export const error: Story<Icon> = Template.bind({});
error.args = {
  error: true
};

export const gradient: Story<Icon> = Template.bind({});
gradient.args = {
  gradient: true
};
