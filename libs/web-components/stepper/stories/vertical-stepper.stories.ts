const README = require('../README.md');
import '@finastra/stepper';
import type { VerticalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { EVENTS } from '../src/constants';
import { argTypes, cssprops } from './sb-generated/fds-vertical-stepper.json';
const demoData = [
  {
    label: 'Step Success',
    description: 'Example of content for an successfully filled out step'
  },
  {
    label: 'Step Active',
    description: 'Example of content for an active step'
  },
  {
    label: 'Step Disabled',
    description: 'Example of content for a disabled step',
    disabled: true
  },
  { label: 'Step Inactive', description: 'Example of content for an inactive step' },
  {
    label: 'Step Inactive',
    description:
    'Example of content for an inactive step'
  }
];

export default {
  title: 'FORMS/Stepper/Vertical',
  component: 'fds-vertical-stepper',
  argTypes: {
    ...argTypes,
    labelMode: {
      control: {
        type: 'radio'
      },
      description: 'Display labels differently',
      table: {
        defaultValue: {
          summary: 'none'
        }
      },
      defaultValue: 'none',
      options: [
        "none",
        "center",
        "background"
      ]
    },
    steps: {
      description: "An array of step (label + optional description).",
      table: {
        defaultValue: {
          summary: '[]'
        }
      }
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

const VTemplate: Story = ({ currentStepIndex, steps = demoData, secondary = false, labelMode = '' }) => {
  return html`<fds-vertical-stepper .steps=${steps} .currentStepIndex=${currentStepIndex} ?secondary=${secondary} .labelMode=${labelMode}></fsd-vertical-stepper>`;
};

export const Default: Story<VerticalStepper> = VTemplate.bind({});
