const README = require('../README.md');
import '@finastra/expansion-panel';
import type { ExpansionPanel } from '@finastra/expansion-panel';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-expansion-panel.json';

export default {
  title: 'DATA DISPLAY/ExpansionPanel',
  component: 'fds-expansion-panel',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-expansion-panel {
          width: 80vw;
          max-width: 700px;
        }
        fds-divider {
          margin-left: -24px;
          margin-right: -24px;
        }
        .actions {
          display: flex;
          justify-content: end;
          margin-top: 8px;
        }
      </style>`
  ]
} as Meta;

const Template: Story<ExpansionPanel> = ({
  displayMode = 'default',
  multi = false,
  hideToggleIcon = false,
  toggleIconPosition = 'after'
}) => {
  return html` <fds-expansion-panel
    displayMode=${displayMode}
    ?multi=${multi}
    ?hideToggleIcon=${hideToggleIcon}
    toggleIconPosition=${toggleIconPosition}
  >
    <fds-expansion-panel-item>
      <div slot="title">Trip name</div>
      <div slot="description">Caribbean cruise</div>
      <div class="content">Add a form to input the trip name</div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item expanded>
      <div slot="title">Location</div>
      <div slot="description">Select trip destination</div>
      <div class="content">
        Add a form to input the location
        <fds-divider></fds-divider>
        <div class="actions">
          <fds-text-button dense label="Cancel" secondary></fds-text-button>
          <fds-button dense label="Save"></fds-button>
        </div>
      </div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item disabled>
      <div slot="title">Start and end dates</div>
      <div slot="description">
        <span>Start date: Feb 29, 2016</span>
        <span>End date: Not set</span>
      </div>
      <div class="content"></div>
    </fds-expansion-panel-item>
  </fds-expansion-panel>`;
};

export const Default: Story<ExpansionPanel> = Template.bind({});
export const Flat: Story<ExpansionPanel> = Template.bind({});
Flat.args = {
  displayMode: 'flat'
};
export const Multi: Story<ExpansionPanel> = Template.bind({});
Multi.args = {
  multi: true
};
export const ToggleIconBefore: Story<ExpansionPanel> = Template.bind({});
ToggleIconBefore.args = {
  toggleIconPosition: 'before'
};

export const HideToggleIcon: Story<ExpansionPanel> = Template.bind({});
HideToggleIcon.args = {
  hideToggleIcon: true
};
