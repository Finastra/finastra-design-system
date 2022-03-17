const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/textarea';
import type { Textarea } from '@finastra/textarea';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Textarea',
  component: 'fds-textarea',
  argTypes,
  args: {
    label: 'Textarea',
    helper: 'Helper text'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  cssprops
} as Meta;

const Template: Story<Textarea> = ({ label, helper, maxLength, charCounter = false, outlined, required }) => {
  return html`<fds-textarea ?required=${required} label=${label} helper=${helper} ?maxLength=${maxLength} ?charCounter=${charCounter} ?outlined=${outlined}></fsd-textarea>`;
};

const CounterTemplate: Story<Textarea> = ({ label, helper, maxLength, charCounter = false, outlined, required }) => {
  return html`<fds-textarea charCounter=${charCounter} maxLength=${maxLength} ?required=${required} label=${label} helper=${helper} ?outlined=${outlined}></fsd-textarea>`;
};

export const Default: Story<Textarea> = Template.bind({});

export const Required: Story<Textarea> = Template.bind({});
Required.args = {
  required: true
};

export const CharacterCounter: Story<Textarea> = CounterTemplate.bind({});
CharacterCounter.args = {
  maxLength: 18,
  charCounter: true,
  outlined: true
};

export const Outlined: Story<Textarea> = Template.bind({});
Outlined.args = {
  outlined: true
};
