const README = require('../README.md');
import '@finastra/slider';
import type { Slider } from '@finastra/slider';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-slider.json';

export default {
  title: 'FORMS/Slider',
  component: 'fds-slider',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19616'
    },
    cssprops
  }
} as Meta;

const Template: Story<Slider> = ({ value, min, max, discrete, withTickMarks, step, disabled }) => {
  return html`<fds-slider
    .value=${value}
    .min=${min}
    .max=${max}
    .step=${step}
    ?discrete=${discrete}
    ?withTickMarks=${withTickMarks}
    ?disabled=${disabled}
  ></fds-slider>`;
};

export const Default: Story<Slider> = Template.bind({});
Default.args = {
  discrete: false,
  withTickMarks: false,
  value: 2,
  min: 0,
  max: 8,
  step: 1,
  disabled: false
};

export const Discrete: Story<Slider> = Template.bind({});
Discrete.args = {
  discrete: true,
  withTickMarks: false,
  value: 6,
  min: 0,
  max: 8,
  step: 1,
  disabled: false
};

export const WithTicks: Story<Slider> = Template.bind({});
WithTicks.args = {
  discrete: true,
  withTickMarks: true,
  value: 4,
  min: 0,
  max: 8,
  step: 1,
  disabled: false
};

export const Disabled: Story<Slider> = Template.bind({});
Disabled.args = {
  discrete: false,
  withTickMarks: false,
  value: 2,
  min: 0,
  max: 8,
  step: 1,
  disabled: true
};
