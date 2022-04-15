const README = require('../README.md');
import '@finastra/slider';
import type { Slider } from '@finastra/slider';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Slider',
  component: 'fds-slider',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19616'
    },
    cssprops
  }
} as Meta;

const Template: Story<Slider> = ({value, min, max}) => {
  return html`<fds-slider value=${value} min=${min} max=${max}></fds-slider>`;
};

export const Default: Story<Slider> = Template.bind({});
Default.args = {
  value: 25,
  min: 10,
  max: 50
}
