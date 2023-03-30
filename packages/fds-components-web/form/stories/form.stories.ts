const README = require('../README.md');
import '@finastra/form';
import type { Form } from '@finastra/form';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { FORM_EVENTS } from '../src/constants';
import { argTypes, cssprops } from './sb-generated/fds-form.json';

export default {
  title: 'FORMS/Form',
  component: 'fds-form',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    actions: {
      handles: [FORM_EVENTS.FORM_SUBMIT]
    }
  },
  decorators: [
    (story) => html`${story()}
  <style>
    fds-card {
      width: 500px;
    }
    
    fds-textfield,
    fds-textarea,
    fds-select,
    fds-formfield {
      padding-bottom: 16px;
    }
    
    img {
      width: 200px;
      align-self: center;
      margin-top: var(--fds-spacing-4, 24px);
    }
    .actions {
      display: flex;
      flex-direction: row-reverse;
    }
    .actions fds-outlined-button {
      margin-right: 8px;
    }

    fds-icon {
      color: var(--fds-success);
    }

    .message-icon-container {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .message-icon-container.success {
      background: #26d07c1a;
    }

    .message {
      text-align: center;
    }
    .message-body {
      font: var(--fds-body-1);
      margin-top: 8px;
    }
  </style>

  <script>
    const form = document.getElementById('myForm');
    form.addEventListener('formSubmit', (e) => {
      e.preventDefault();
      for (var pair of e.detail.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
        document.getElementById("confirmation").show();
      }
    });
  </script> `
  ],
  cssprops
} as Meta;

const Template: Story<Form> = ({}) => {
  return html`
  <fds-form id="myForm">
    <fds-card outlined>
      <img src="https://i.imgur.com/3Uki2C5.png" />
      <fds-textfield required label="Name" placeholder="Name" validationMessage="required field"></fds-textfield>
      <fds-textarea
        required
        label="Bio"
        helper="You can @mention other users and organizations to link to them."
        charcounter="true"
        maxlength="18"
        validationMessage="required field"
        helperPersistent
      ></fds-textarea>

      <fds-textfield required placeholder="Company" icon="apartment" label="Company" validationMessage="required field"></fds-textfield>
      <fds-textfield required placeholder="Location" icon="location_on" label="Location" validationMessage="required field"></fds-textfield>

      <div class="checkbox">
        <fds-formfield required label="Display current local time" icon="schedule">
          <fds-checkbox name="time"></fds-checkbox>
        </fds-formfield>
      </div>

      <fds-select required validationMessage="required field" label="Position" icon="work_outline" labelInside>
        <fds-list-item></fds-list-item>
        <fds-list-item value="0">Frontend developer</fds-list-item>
        <fds-list-item value="1">Backend developer</fds-list-item>
        <fds-list-item value="1">IT Manager</fds-list-item>
      </fds-select>

      <fds-textfield
        label="Email"
        placeholder="Email"
        icon="mail_outline"
        validationmessage="Invalid email adress"
        type="email"
      ></fds-textfield>

      <fds-textfield required label="Website" placeholder="Website" icon="link" validationMessage="required field"></fds-textfield>
      <fds-textfield
        required
        label="Twitter Username"
        placeholder="Twitter username"
        icon="share"
        validationMessage="required field"
      ></fds-textfield>

      <div class="actions">
        <fds-button type="submit" label="Save"></fds-button>
        <fds-outlined-button type="reset" label="Reset"></fds-outlined-button>
      </div>
    </fds-card>
  </fds-form>

  <fds-dialog id="confirmation" heading="Profile saved">
    <div class="message">
      <div class="message-icon-container success">
        <fds-icon large class="message-icon success">done</fds-icon>
      </div>
      <div class="message-body">Your profile has been saved.</div>
    </div>
    <fds-button secondary label="Close" slot="primaryAction" dialogaction="ok"></fds-button>
  </fds-dialog>
 `;
};

export const Default: Story<Form> = Template.bind({});
