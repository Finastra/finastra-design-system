const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/slider';
import type { Slider } from '@finastra/slider';

export default {
  title: 'Components/Slider',
  component: 'fds-slider',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<Slider> = ({ name = 'World' }) => {
  return html`<fds-slider  .name=${name}></fsd-slider>`;
};

export const Default: Story<Slider> = Template.bind({});
