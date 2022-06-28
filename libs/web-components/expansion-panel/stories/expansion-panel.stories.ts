const README = require('../README.md');
import '@finastra/expansion-panel';
import type { ExpansionPanel } from '@finastra/expansion-panel';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { cssprops } from './custom-element.json';

export default {
  title: 'DATA DISPLAY/ExpansionPanel',
  component: 'fds-expansion-panel',
  argTypes: {
    displayMode: {
      control: {
          type: "radio"
      },
      options: [
        "default",
        "flat"
      ],
      defaultValue: 'default'
    },
    hideToggleIcon: {
      control: {
          type: "boolean"
      },
      defaultValue: false
    },
    multi: {
      control: {
          type: "boolean"
      },
      defaultValue: false
    },
    toggleIconPosition: {
      control: {
          type: "radio"
      },
      options: [
        "before",
        "after"
      ],
      defaultValue: 'after'
    },
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<ExpansionPanel> = ({ displayMode = 'default', multi = false, hideToggleIcon = false, toggleIconPosition="after" }) => {
  return html`
  <fds-expansion-panel  displayMode=${displayMode} ?multi=${multi} ?hideToggleIcon=${hideToggleIcon} toggleIconPosition=${toggleIconPosition}>
    <fds-expansion-panel-item expanded>
          <div slot="title">Setting</div>
          <div slot="description">Global setting</div>
          <div class="content">
              Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
          </div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item>
        <div slot="title">Security</div>
        <div slot="description">Security parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item disabled>
        <div slot="title">Private</div>
        <div slot="description">Security parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item>
        <div slot="title">Hobbies</div>
        <div slot="description">Hobbies parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>
  </fds-expansion-panel>`;
};

export const Default: Story<ExpansionPanel> = Template.bind({});
export const Flat: Story<ExpansionPanel> = Template.bind({});
Flat.args = {
  displayMode:  'flat'
};
export const Multi: Story<ExpansionPanel> = Template.bind({});
Multi.args = {
  multi:  true
};
export const ToggleIconBefore: Story<ExpansionPanel> = Template.bind({});
ToggleIconBefore.args = {
  toggleIconPosition:  'before'
};

export const HideToggleIcon: Story<ExpansionPanel> = Template.bind({});
HideToggleIcon.args = {
  hideToggleIcon:  true
};