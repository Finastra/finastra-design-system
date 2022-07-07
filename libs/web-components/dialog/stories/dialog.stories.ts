const README = require('../README.md');
import '@finastra/dialog';
import type { Dialog } from '@finastra/dialog';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from "./custom-element.json";

export default {
  title: 'POPOVER/Dialog',
  component: 'fds-dialog',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
<script>
  function showDialog(){
    document.getElementById("dialog").show();
  }
</script>`
  ]
} as Meta;

const Template: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction}) => {
  return html`
<fds-button label="Open" onClick="showDialog()"></fds-button>
<fds-dialog id="dialog" heading=${heading} ?open=${open} ?hideActions=${hideActions} ?stacked=${stacked} ?scrimClickAction=${scrimClickAction} ?escapeKeyAction=${escapeKeyAction}>
  <span class="body">Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span>
  <fds-button
      secondary
      label="Yes"
      slot="primaryAction"
      dialogAction="ok"></fds-button>
  <fds-text-button
      label="No"
      slot="secondaryAction"
      dialogAction="cancel"
  ></fds-text-button>
</fds-dialog>`;
};

export const Default: Story<Dialog> = Template.bind({});
Default.args = {
  heading: "Title"
};
