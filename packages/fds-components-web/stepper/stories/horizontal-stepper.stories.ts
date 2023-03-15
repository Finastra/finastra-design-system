const README = require('../README.md');
import '@finastra/stepper';
import type { HorizontalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { events } from '../src/constants';
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
  {
    label: 'Step Error',
    error: true
  },
  {
    label: 'Step Custom Active Icon',
    activeStepIcon: 'sync'
  }
];

export default {
  title: 'FORMS/Stepper/Horizontal',
  component: 'fds-horizontal-stepper',
  argTypes: {
    ...argTypes,
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

const HTemplate: Story = ({ currentStepIndex, steps = demoData, secondary = false, readonly = false, hideIndex = false }) => {
  return html`<fds-horizontal-stepper
    .steps=${steps}
    .currentStepIndex=${currentStepIndex}
    ?secondary=${secondary}
    ?readonly=${readonly}
    ?hideIndex=${hideIndex}
  ></fds-horizontal-stepper>`;
};

export const Default: Story<HorizontalStepper> = HTemplate.bind({});

export const Readonly: Story<HorizontalStepper> = HTemplate.bind({});
Readonly.args = {
  readonly: true
};

export const HideIndex: Story<HorizontalStepper> = HTemplate.bind({});
HideIndex.args = {
  hideIndex: true
};
