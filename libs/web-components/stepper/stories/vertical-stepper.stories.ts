const README = require('../README.md');
import '@finastra/stepper';
import type { VerticalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';
const demoData = [
  {
    label: 'Step Success',
    description: 'Ad in dolore eu anim est excepteur ex. Ullamco irure voluptate laboris cupidatat non excepteur minim nulla dolor. '
  },
  {
    label: 'Step Active',
    description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .'
  },
  {
    label: 'Step Inactive',
    description: 'Sunt mollit quis anim laboris amet laboris irure magna. Fugiat ullamco ea qui consequat laborum. '
  },
  { label: 'Step Inactive', description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. ' },
  {
    label: 'Step Inactive',
    description:
      'Exercitation eiusmod Lorem officia incididunt. Reprehenderit nisi consequat nostrud fugiat esse amet id voluptate elit elit et sit qui deserunt.'
  }
];

export default {
  title: 'Components/Stepper/Vertical',
  component: 'fds-vertical-stepper',
  argTypes: {
    ...argTypes,
    labelMode: {
      control: {
        type: 'radio'
      },
      defaultValue: false,
      options: ['none', 'center', 'background']
    }
  },
  args: {
    steps: demoData,
    currentStepIndex: 1
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48611%3A19619'
    }
  },
  cssprops,
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const VTemplate: Story = ({ currentStepIndex, steps = demoData, secondary = false, labelMode = '' }) => {
  return html`<fds-vertical-stepper .steps=${steps} .currentStepIndex=${currentStepIndex} ?secondary=${secondary} .labelMode=${labelMode}></fsd-vertical-stepper>`;
};

export const Default: Story<VerticalStepper> = VTemplate.bind({});
