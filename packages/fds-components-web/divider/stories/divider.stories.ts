const README = require('../README.md');
import '@finastra/button';
import { Divider } from '@finastra/divider';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-divider.json';

export default {
  title: 'DATA DISPLAY/Divider',
  component: 'fds-divider',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=56471%3A19066'
    }
  },
  decorators: []
} as Meta;

const Template: Story = ({ inset = undefined, vertical = false }) => {
  return html`<fds-divider style="flex: 1; height: 50px; width: 700px" inset=${ifDefined(inset)} ?vertical=${vertical}></fds-divider>`;
};

export const Default: Story<Divider> = Template.bind({});
Default.args = {};

export const InsetLeft: Story<Divider> = Template.bind({});
InsetLeft.args = {
  inset: 'left'
};

export const InsetRight: Story<Divider> = Template.bind({});
InsetRight.args = {
  inset: 'right'
};

export const InsetBoth: Story<Divider> = Template.bind({});
InsetBoth.args = {
  inset: 'both'
};

export const Vertical: Story<Divider> = Template.bind({});
Vertical.args = {
  vertical: true
};
