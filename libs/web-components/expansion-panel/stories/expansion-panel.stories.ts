const README = require('../README.md');
import '@finastra/expansion-panel';
import type { ExpansionPanel } from '@finastra/expansion-panel';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { cssprops } from './sb-generated/fds-expansion-panel.json';

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
      description: 'The display mode used for all expansion panel items.',
      defaultValue: 'default'
    },
    hideToggleIcon: {
      control: {
          type: "boolean"
      },
      description: 'Whether the expansion indicator should be hidden.',
      defaultValue: false
    },
    multi: {
      control: {
          type: "boolean"
      },
      description: 'Whether the expansion should allow multiple expanded items.',
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
      description: 'The position of toggle indicator for all expansion items.',
      defaultValue: 'after'
    },
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
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