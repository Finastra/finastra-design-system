const README = require('../README.md');
import '@finastra/card';
import type { Card } from '@finastra/card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'DATA DISPLAY/Card/Default',
  component: 'fds-card',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=100%3A120'
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
    <style>
      fds-card {
        max-width: 400px;
      }
    </style>`
  ]
} as Meta;

const Template: Story<Card> = ({outlined, selectable, disabled}) => {
  return html`<fds-card ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}></fds-card>`;
};

export const Default: Story<Card> = Template.bind({});
Default.args = {};
