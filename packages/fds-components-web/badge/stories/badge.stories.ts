const README = require('../README.md');
import '@finastra/badge';
import { Badge } from '@finastra/badge';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { COLOR, POSITION, TYPE } from '../src/badge.interface';
import { argTypes } from './sb-generated/fds-badge.json';

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  argTypes,
  args: {
    value: '12',
    color: COLOR.success,
    position: POSITION.center,
    type: TYPE.none
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  decorators: [
    (story) => html`${story()}
      <style>
        .fds-body-1 {
          font: var(--fds-body-1);
          color: var(--fds-on-background);
        }
      </style>`
  ]
} as Meta;

const Template: Story<Badge> = ({ value, color, position, type }) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
    <span class="fds-body-1"> Success </span>
  </fds-badge> `;
};

export const Default: Story<Badge> = Template.bind({});

const ButtonTemplate: Story<Badge> = ({ value, color, position, type }) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
    <fds-button primary label="button" icon="notifications"></fds-button>
  </fds-badge>`;
};

const LeftIndicatorTemplate: Story<Badge> = ({ value, color, position, type }) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
    <fds-icon-button primary icon="bookmark_border"></fds-icon-button>
  </fds-badge>`;
};

const RightIndicatorTemplate: Story<Badge> = ({ value, color, position, type }) => {
  return html` <fds-badge value=${value} color=${color} position=${position} type=${type}>
    <fds-icon-button primary icon="bookmark_border"></fds-icon-button>
  </fds-badge>`;
};

export const WithButton: Story = ButtonTemplate.bind({});
WithButton.args = {
  position: POSITION.topRight
};

export const LeftIndicator: Story = LeftIndicatorTemplate.bind({});
LeftIndicator.args = {
  type: TYPE.indicator,
  position: POSITION.topLeft
};

export const RightIndicator: Story = RightIndicatorTemplate.bind({});
RightIndicator.args = {
  type: TYPE.indicator,
  position: POSITION.topRight
};
