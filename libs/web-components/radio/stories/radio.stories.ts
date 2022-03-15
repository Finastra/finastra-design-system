const README = require('../README.md');
import '@finastra/radio';
import type { Radio } from '@finastra/radio';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Radio',
  component: 'fds-radio',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1046'
    },
    cssprops
  }
} as Meta;

const Template: Story<Radio> = ({ checked = false, disabled = false, global = false, name = '', reducedTouchTarget = false, value = '' }) => {
  return html`<fds-radio .checked=${checked} .disabled=${disabled} .global=${global} .name=${name} .reducedTouchTarget=${reducedTouchTarget} .value=${value}></fsd-radio>`;
};

export const Default: Story<Radio> = Template.bind({});
