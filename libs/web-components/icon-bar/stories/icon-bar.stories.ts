const README = require('../README.md');
import '@finastra/icon-bar';
import type { IconBar } from '@finastra/icon-bar';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-icon-bar.json';

export default {
  title: 'Components/IconBar',
  component: 'fds-icon-bar',
  argTypes,
  args: {
    name: 'World'
  },
  parameters: {
    actions: {
      handles: ['selected']
    },
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=70409%3A24480'
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ],
  cssprops
} as Meta;

const Template: Story<IconBar> = ({ large, }) => {
  return html`
    <fds-icon-bar ?large=${large}>
      <fds-icon-bar-item data-tippy-content="This is a tooltip" current icon="home" notification="2"></fds-icon-bar-item>
      <fds-icon-bar-item label="Account" data-tippy-content="This is a tooltip" icon="credit_card"></fds-icon-bar-item>
      <fds-icon-bar-item label="Calendar" data-tippy-content="This is a tooltip" icon="event" notification="1"></fds-icon-bar-item>
      <fds-icon-bar-item data-tippy-content="This is a tooltip" slot="footer" icon="add"></fds-icon-bar-item>
    </fds-icon-bar>`;
};

export const Default: Story<IconBar> = Template.bind({});
