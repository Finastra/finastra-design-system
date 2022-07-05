const README = require('../README.md');
import '@finastra/dialog';
import type { Dialog } from '@finastra/dialog';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes } from "./custom-element.json";


export default {
  title: 'Components/Dialog',
  component: 'fds-dialog',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}
      <script>
        function myFunction(){
          document.getElementById("myDropdown").show();
        }
      </script>
      `
  ]
} as Meta;

const Template: Story<Dialog> = (heading,open,hideActions) => {
  return html`
<fds-button label="open" onClick="myFunction()"></fds-button>
<fds-dialog id="myDropdown" heading=${heading} .open=${open} ?hideActions=${hideActions}>
  <span class="body">Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span>
  <fds-button
      secondary
      label="Yes"
      slot="primaryAction"
      dialogAction="ok">
  </fds-button>
  <fds-text-button
      label="No"
      slot="secondaryAction"
      dialogAction="cancel">
  </fds-text-button>
  </fds-dialog>`;
};



export const Default: Story<Dialog> = Template.bind({});
Default.args = {
  heading: "title"
};


