const README = require('../README.md');
import '@finastra/logo';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-logo.json';

export default {
  title: 'GRAPHIC ELEMENTS/Logo',
  component: 'fds-logo',
  argTypes,
  args: {
    dense: false
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=844%3A0'
    },
    cssprops
  }
} as Meta;

const Template: Story = ({ dense = false }) => {
  return html`<fds-logo ?dense=${dense}></fds-logo>`;
};

export const Default: Story = Template.bind({});

export const Dense: Story = Template.bind({});
Dense.args = {
  dense: true
};
