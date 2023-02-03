const README = require('../README.md');
import '@finastra/radio';
import type { Radio } from '@finastra/radio';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-radio.json';

export default {
  title: 'FORMS/Radio',
  component: 'fds-radio',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1046'
    },
    cssprops
  }
} as Meta;

const Template: Story<Radio> = ({ checked, disabled, global, name, reducedTouchTarget, value }) => {
  return html`<fds-radio
    ?checked=${checked}
    ?disabled=${disabled}
    ?global=${global}
    ?name=${name}
    ?reducedTouchTarget=${reducedTouchTarget}
    ?value=${value}
  ></fds-radio>`;
};

const WithLabelTemplate: Story = ({ checked }) => {
  return html` <fds-formfield label="Option">
    <fds-radio checked=${checked}></fds-radio>
  </fds-formfield>`;
};

export const Default: Story<Radio> = Template.bind({});
Default.args = {
  checked: false
};

export const Disabled: Story<Radio> = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true
};

export const WithLabel: Story = WithLabelTemplate.bind({});
WithLabel.args = {
  checked: true
};
