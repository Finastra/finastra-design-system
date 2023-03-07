const README = require('../README.md');
import '@finastra/stepper';
import type { VerticalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { events } from '../src/constants';
import { argTypes, cssprops } from './sb-generated/fds-vertical-stepper.json';

const demoData = [
  {
    label: 'Step Success',
    description: 'Example of content for a successfully filled out step'
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
  {
    label: 'Step Error',
    description: 'Example of content for an error step',
    error: true
  },
  {
    label: 'Step Custom Active Icon',
    description: 'Example of content for an active step custom icon',
    activeStepIcon: 'sync'
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
      options: ['none', 'center', 'background']
    },
    steps: {
      description: 'An array of step (label + optional description).',
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
      handles: [events.STEPCLICK]
    },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48611%3A19619'
    }
  },
  cssprops
} as Meta;

const VTemplate: Story = ({
  currentStepIndex,
  steps = demoData,
  secondary = false,
  readonly = false,
  hideIndex = false,
  labelMode = ''
}) => {
  return html`<fds-vertical-stepper
    .steps=${steps}
    .currentStepIndex=${currentStepIndex}
    ?secondary=${secondary}
    ?readonly=${readonly}
    ?hideIndex=${hideIndex}
    .labelMode=${labelMode}
  ></fds-vertical-stepper>`;
};

export const Default: Story<VerticalStepper> = VTemplate.bind({});

export const Readonly: Story<VerticalStepper> = VTemplate.bind({});
Readonly.args = {
  readonly: true
};

export const HideIndex: Story<VerticalStepper> = VTemplate.bind({});
HideIndex.args = {
  hideIndex: true
};
