const README = require('../README.md');
import '@finastra/stepper';
import type { HorizontalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { EVENTS } from '../src/constants';
import { argTypes, cssprops } from './sb-generated/fds-horizontal-stepper.json';

const demoData = [
  {
    label: 'Step Success'
  },
  {
    label: 'Step Active'
  },
  {
    label: 'Step Disabled',
    disabled: true
  },
  { label: 'Step Inactive' },
  {
    label: 'Step Inactive'
  }
];

export default {
  title: 'FORMS/Stepper/Horizontal',
  component: 'fds-horizontal-stepper',
  argTypes: {
    ...argTypes,
    steps: {
      description: "An array of step (label + optional description).",
      table: {
        defaultValue: {
          summary: '[]'
        }
      },
    }
  },
  args: {
    steps: demoData,
    currentStepIndex: 1
  },
  parameters: {
    actions: {
      handles: [EVENTS.STEPCLICK]
    },
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48611%3A19619'
    }
  },
  cssprops
} as Meta;

const HTemplate: Story = ({ currentStepIndex, steps = demoData, secondary = false }) => {
  return html`<fds-horizontal-stepper .steps=${steps} .currentStepIndex=${currentStepIndex} ?secondary=${secondary}></fds-horizontal-stepper>`;
};

export const Default: Story<HorizontalStepper> = HTemplate.bind({});
