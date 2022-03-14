const README = require('../README.md');
import '@finastra/radio';
import type { Radio } from '@finastra/radio';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { cssprops } from './custom-element.json';

export default {
  title: 'Components/Radio',
  component: 'fds-radio',
  argTypes: {
    checked: {
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      },
      control: 'boolean',
      defaultValue: false,
      type: 'boolean',
      description: 'Whether this radio button is the currently-selected one in its group.'
    },
    disabled: {
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      },
      control: 'boolean',
      defaultValue: false,
      type: 'boolean',
      description: 'If true, this radio button cannot be selected or de-selected.'
    },
    name: {
      table: {
        category: 'attributes',
        defaultValue: { summary: '' }
      },
      control: 'text',
      defaultValue: '',
      type: 'string',
      description: 'Name of the input for form submission, and identifier for the selection group. Only one radio button can be checked for a given selection group.'
    },
    value: {
      table: {
        category: 'attributes',
        defaultValue: { summary: '' }
      },
      control: 'text',
      defaultValue: '',
      type: 'string',
      description: 'Value of the input for form submission.'
    },
    global: {
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      },
      control: 'boolean',
      defaultValue: false,
      type: 'boolean',
      description: 'If true, this radio button will use a global, document-level scope for its selection group rather than its local shadow root.'
    },
    reducedTouchTarget: {
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      },
      control: 'boolean',
      defaultValue: false,
      type: 'boolean',
      description: 'When true, the radio removes touch target that extends beyond visual boundary of the component.'
    },
  },
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
