const README = require('../README.md');
import '@finastra/icon-bar';
import type { IconBar } from '@finastra/icon-bar';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../../../packages/fds-theme-tippy/dist/theme.css';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-icon-bar.json';

export default {
  title: 'Navigation/Icon Bar',
  component: 'fds-icon-bar',
  argTypes,
  parameters: {
    actions: {
      handles: ['selected']
    },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=70409%3A24480'
    }
  },
  decorators: [
    (story) => html`${story()}

      <script src="https://unpkg.com/@popperjs/core@2"></script>
      <script src="https://unpkg.com/tippy.js@6"></script>
      <script>
        tippy('[data-tippy-content]', {
          touch: false,
          theme: 'finastra',
          placement: 'right'
        });
      </script>
      <style>
        fds-icon-bar {
          min-height: 300px;
        }
      </style> `
  ],
  cssprops
} as Meta;

const Template: Story<IconBar> = ({ showLabels, hideNotification }) => {
  return html`<fds-icon-bar ?showLabels=${showLabels} ?hideNotification=${hideNotification}>
    <fds-icon-bar-item label="Home" data-tippy-content="Home" current icon="home" notification="2"></fds-icon-bar-item>
    <fds-icon-bar-item label="Account" data-tippy-content="Account" icon="credit_card"></fds-icon-bar-item>
    <fds-icon-bar-item label="Calendar" data-tippy-content="Calendar" icon="event" notification="1"></fds-icon-bar-item>
    <fds-icon-bar-item data-tippy-content="Settings" slot="footer" icon="settings" dense></fds-icon-bar-item>
  </fds-icon-bar>`;
};

export const Default: Story<IconBar> = Template.bind({});
