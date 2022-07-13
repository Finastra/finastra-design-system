const README = require('../README.md');
import '@finastra/dialog';
import type { Dialog } from '@finastra/dialog';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from "./sb-generated/fds-dialog.json";

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
<style>
  .message {
    font: var(--fds-body-1);
    color: var(--fds-on-background);
  }
</style>
<script>
  const dialog = document.querySelector('#dialog');
  const textField = document.querySelector('#text-field');
  const primaryButton = document.querySelector('#primary-action-button');

  primaryButton.addEventListener('click', () => {
    const isValid = textField.checkValidity();
      if (isValid) {
        dialog.close();
        return;
      }
    textField.reportValidity();
  });
</script>
  `
  ]
} as Meta;

const Template: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction}) => {
  return html`
<span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
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
    dialogAction="cancel"></fds-text-button>
</fds-dialog>`;
};

const ScrollableTemplate: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction}) => {
  return html`
<span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
<fds-dialog heading=${heading} ?open=${open} ?hideActions=${hideActions} ?stacked=${stacked} ?scrimClickAction=${scrimClickAction} ?escapeKeyAction=${escapeKeyAction}>
  <p>Lorem ipsum dolor sit amet. Qui harum dolorem et vero asperiores vel nulla ullam aut quisquam omnis ea aspernatur odio. Sed delectus itaque sed recusandae alias ab fuga ullam et suscipit nisi. Non odio ducimus et nisi odio ut recusandae animi. Sed inventore minima est praesentium eveniet id accusamus esse sit eveniet tenetur eos corrupti dignissimos sed vitae omnis qui consequatur vitae! </p><p>Aut maxime placeat sed maiores porro et rerum internos 33 dolorum error cum repudiandae repellat ut nesciunt dolor non voluptatem nihil. Non aliquid aliquam sed nihil odio et laudantium doloribus aut natus vitae sit molestiae suscipit sed asperiores velit ea internos enim. Et eaque quae aut autem placeat ea odio galisum et facilis corporis hic assumenda maxime. </p><p>Ut quae maiores a officiis blanditiis in numquam ducimus ut quasi repudiandae quo excepturi accusantium qui perspiciatis omnis. Ut incidunt modi et voluptates autem et velit maxime id fugit omnis sit voluptas voluptatem et natus fugiat. Hic amet maxime et iusto voluptas qui tenetur deserunt At magni Quis et dolor sunt et dolores delectus. Et error delectus aut dolor porro sed saepe tempora. </p><p>Ea  dolorem sed rerum deserunt a rerum cupiditate? Qui voluptatem ipsum vel nulla eius a reprehenderit totam. </p><p>Est rerum similique ut perspiciatis quisquam ut tenetur libero. Aut repudiandae quia a voluptatem adipisci et autem sunt eos odio illum qui nulla natus est quas quia. </p>
  <fds-button
    label="Accept"
    slot="primaryAction"
    dialogAction="accept"></fds-button>
  <fds-button
    label="Decline"
    slot="secondaryAction"
    dialogAction="decline"
    disabled></fds-button>
</fds-dialog>
`;
};

const Form: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction}) => {
  return html`
<span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
<fds-dialog heading=${heading} ?open=${open} ?hideActions=${hideActions} ?stacked=${stacked} ?scrimClickAction=${scrimClickAction} ?escapeKeyAction=${escapeKeyAction}>
  <p>This dialog can validate user input before closing.</p>
  <fds-textfield
    id="text-field"
    minlength="3"
    maxlength="64"
    placeholder="First name"
    required></fds-textfield>
  <fds-button
    label="Confirm"
    id="primary-action-button"
    slot="primaryAction"></fds-button>
  <fds-outlined-button
    label="Cancel"
    slot="secondaryAction"
    dialogAction="close"></fds-outlined-button>
</fds-dialog>
`;
};

export const Default: Story<Dialog> = Template.bind({});
Default.args = {
  heading: "Title"
};

export const Scrollable: Story<Dialog> = ScrollableTemplate.bind({});
Scrollable.args = {
  heading: "Policies"
};

export const FormValidation: Story<Dialog> = Form.bind({});
FormValidation.args = {
  heading: "Form Validation"
};