const README = require('../README.md');
import '@finastra/textarea';
import type { Textarea } from '@finastra/textarea';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-textarea.json';

export default {
  title: 'FORMS/Textarea',
  component: 'fds-textarea',
  argTypes,
  args: {
    label: 'Textarea',
    helper: 'Helper text'
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=16553%3A22669'
    },
    cssprops
  }
} as Meta;

const Template: Story<Textarea> = ({ label, helper, required, disabled, labelInside, dense }) => {
  return html`<fds-textarea ?required=${required} label=${label} helper=${helper} ?disabled=${disabled} ?labelInside=${labelInside} ?dense=${dense}></fds-textarea>`;
};

const CounterTemplate: Story<Textarea> = ({ label, helper, maxLength, charCounter, required, disabled }) => {
  return html`<fds-textarea
    charCounter=${charCounter}
    maxLength=${maxLength}
    ?required=${required}
    label=${label}
    helper=${helper}
    ?disabled=${disabled}
  ></fds-textarea>`;
};

export const Default: Story<Textarea> = Template.bind({});

export const Required: Story<Textarea> = Template.bind({});
Required.args = {
  required: true
};

export const labelInside: Story<Textarea> = Template.bind({});
labelInside.args = {
  labelInside: true
};

export const dense: Story<Textarea> = Template.bind({});
dense.args = {
  dense: true
};

export const CharacterCounter: Story<Textarea> = CounterTemplate.bind({});
CharacterCounter.args = {
  maxLength: 18,
  charCounter: true
};

export const Disabled: Story<Textarea> = Template.bind({});
Disabled.args = {
  disabled: true
};
