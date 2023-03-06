const README = require('../README.md');
import '@finastra/card';
import type { Card } from '@finastra/card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-card.json';

export default {
  title: 'DATA DISPLAY/Cards/Card',
  component: 'fds-card',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
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
        .example-header-image {
          background-image: url('https://cdn2.thecatapi.com/images/zvfTwDY54.jpg');
          background-size: cover;
        }
      </style>`
  ]
} as Meta;

const Template: Story<Card> = ({ outlined, selectable, disabled }) => {
  return html`<fds-card ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}>
    <fds-card-header>
      <div class="example-header-image"></div>
      <div class="card-header-text">
        <fds-card-title>Header</fds-card-title>
        <fds-card-subtitle>Subhead</fds-card-subtitle>
      </div>
    </fds-card-header>
    <img src="https://cdn2.thecatapi.com/images/jb.jpg" />
    <fds-card-content> Add your card content here </fds-card-content>
    <fds-card-actions>
      <fds-text-button label="Button"></fds-text-button>
      <fds-text-button label="Button"></fds-text-button>
    </fds-card-actions>
  </fds-card>`;
};

export const Default: Story<Card> = Template.bind({});
Default.args = {};

const TemplateOutlined: Story<Card> = ({ outlined, selectable, disabled }) => {
  return html`<fds-card ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}>
    <img src="https://res.cloudinary.com/dwhxhykbv/image/upload/v1657130406/Top_npiwin.png" />
    <fds-card-title>Header</fds-card-title>
    <fds-card-content>Add your card content here</fds-card-content>
    <fds-divider></fds-divider>
    <fds-card-actions align="end">
      <fds-text-button label="Button"></fds-text-button>
      <fds-text-button label="Button"></fds-text-button>
    </fds-card-actions>
  </fds-card>`;
};

export const Outlined: Story<Card> = TemplateOutlined.bind({});
Outlined.args = {
  outlined: true
};

const TemplateSelectable: Story<Card> = ({ outlined, selectable, disabled }) => {
  return html`<fds-card ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}>
    <fds-card-header>
      <div class="example-header-image"></div>
      <div class="card-header-text">
        <fds-card-title>Header</fds-card-title>
        <fds-card-subtitle>Subhead</fds-card-subtitle>
      </div>
    </fds-card-header>
    <fds-card-content>Add your card content here</fds-card-content>
  </fds-card>`;
};

export const Selectable: Story<Card> = TemplateSelectable.bind({});
Selectable.args = {
  selectable: true
};

const TemplateDisabled: Story<Card> = ({ outlined, selectable, disabled }) => {
  return html`<fds-card ?outlined=${outlined} ?selectable=${selectable} ?disabled=${disabled}>
    <fds-card-title>Header</fds-card-title>
    <fds-card-subtitle>Subhead</fds-card-subtitle>
    <fds-card-content>Add your card content here</fds-card-content>
    <fds-card-actions>
      <fds-text-button label="Button"></fds-text-button>
      <fds-text-button label="Button"></fds-text-button>
    </fds-card-actions>
  </fds-card>`;
};

export const Disabled: Story<Card> = TemplateDisabled.bind({});
Disabled.args = {
  disabled: true
};
