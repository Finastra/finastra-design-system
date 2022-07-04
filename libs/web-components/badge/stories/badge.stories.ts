const README = require('../README.md');
import '@finastra/badge';
import { Badge } from '@finastra/badge';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from "./custom-element.json";

export default {
  title: 'DATA DISPLAY/Badge',
  component: 'fds-badge',
  argTypes,
  args: {
    value: "12",
    color: "success",
    position: "center",
    type: ""
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}
<style>
  fds-badge span {
    font: var(--fds-body-1);
    color: var(--fds-on-background);
  }
  fds-badge mwc-icon-button {
    color: var(--fds-primary);
  }
</style>`
  ]
} as Meta;

const Template: Story<Badge> = ({value, color, position,type }) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
  <span> Success </span>
</fds-badge>
    `;
};

export const Default: Story<Badge> = Template.bind({});

const ButtonTemplate: Story<Badge> = ({value, color, position,type}) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
  <fds-button label="button" icon="notifications"></fds-button>
</fds-badge>`;
};

const LeftIndicatorTemplate: Story<Badge> = ({value, color, position,type}) => {
  return html`<fds-badge value=${value} color=${color} position=${position} type=${type}>
  <mwc-icon-button icon="bookmark_border"></mwc-icon-button>
</fds-badge>`;
};

const RightIndicatorTemplate: Story<Badge> = ({value, color, position,type}) => {
  return html` <fds-badge value=${value} color=${color} position=${position} type=${type}>
  <mwc-icon-button icon="bookmark_border"></mwc-icon-button>
</fds-badge>`;
};

export const WithButton: Story = ButtonTemplate.bind({});

export const LeftIndicator: Story = LeftIndicatorTemplate.bind({});
LeftIndicator.args = {
  type: "indicator",
  position: "topLeft"
};
export const RightIndicator: Story = RightIndicatorTemplate.bind({})
RightIndicator.args = {
  type: "indicator",
  position: "topRight"
};