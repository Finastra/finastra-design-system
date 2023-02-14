const README = require('../README.md');
import '@finastra/dialog';
import type { Dialog } from '@finastra/dialog';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-dialog.json';

export default {
  title: 'POPOVER/Dialog',
  component: 'fds-dialog',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
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
      </script> `
  ]
} as Meta;

const Template: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction }) => {
  return html` <span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
    <fds-dialog
      id="dialog"
      heading=${heading}
      ?open=${open}
      ?hideActions=${hideActions}
      ?stacked=${stacked}
      ?scrimClickAction=${scrimClickAction}
      ?escapeKeyAction=${escapeKeyAction}
    >
      <span class="body"> This will reset your settings to the defaults. </span>
      <fds-text-button label="Cancel" slot="secondaryAction" dialogAction="cancel"></fds-text-button>
      <fds-button secondary label="Accept" slot="primaryAction" dialogAction="ok"></fds-button>
    </fds-dialog>`;
};

const ScrollableTemplate: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction }) => {
  return html`
    <span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
    <fds-dialog
      heading=${heading}
      ?open=${open}
      ?hideActions=${hideActions}
      ?stacked=${stacked}
      ?scrimClickAction=${scrimClickAction}
      ?escapeKeyAction=${escapeKeyAction}
    >
      <p>
        Finastra* (“we”, “us” or “Finastra”) is a leading provider of financial services software that the world's financial institutions
        rely on every day to help them grow and succeed. Our customers, consumers, prospects, registered users, applicants for employment,
        and others with whom we do business entrust us with their personal data and personally identifiable information (“Personal
        Information”) and they expect us to protect that Personal Information with the same level of care we do our own. This is fundamental
        to the way we do business.
      </p>

      <p>
        This Finastra Privacy Policy External (the “Policy”) describes the practices we have adopted with respect to processing Personal
        Information including the collection, use, storage or disclosure of Personal Information, (i) on our websites that link to this
        Policy (collectively the “Sites”); (ii) when you interact with our support centre or other online forums; (ii) when you participate
        in our webinars, events and demonstrations; (iii) when you purchase our products or services (“Services”); or (iv) when you interact
        with us as a vendor, partner or sub-contractor, except where there are specific privacy requirements for a Service and a separate
        policy has been published for that particular Service.
      </p>

      <h3>SCOPE</h3>

      <p>
        Whether acting as a data controller, a data processor or data intermediary, Finastra is required to comply with all applicable laws
        and regulations protecting the privacy of Personal Information in the jurisdictions where Finastra conducts business.
      </p>

      <p>
        We may amend this Policy from time to time, should it become necessary or advisable to do so to comply with regulatory requirements
        or best practices. The most recent modification date of this Policy will appear at the top of this page. If we materially change our
        practices in processing Personal Information, we will post an updated policy in place of this Policy.
      </p>

      <h3>GENERAL DEFINITIONS</h3>

      <p>These definitions may vary slightly according to local data privacy laws.</p>

      <p>
        “Personal Information” is any information relating to an identified or identifiable natural person (which in some jurisdictions may
        include individuals who are recently deceased, and whether or not the information is true) or to a legal entity (to the extent
        protected under applicable data protection law), recorded in any medium including but not limited to electronic, paper, or voice
        recordings. It may include information such as name, address, date of birth, identification numbers, financial information and any
        other identifiable personal information. Personal Information may include non-identifiable information which, when combined with
        other information to which Finastra is likely to have access, can be used to identify an individual.
      </p>

      <p>Individuals or entities that are identified or identifiable by Personal Information are referred to as “data subjects”.</p>
      <fds-button label="Accept" slot="primaryAction" dialogAction="accept"></fds-button>
      <fds-button label="Decline" slot="secondaryAction" dialogAction="decline" disabled></fds-button>
    </fds-dialog>
  `;
};

const Form: Story<Dialog> = ({ open, heading, hideActions, stacked, scrimClickAction, escapeKeyAction }) => {
  return html`
    <span class="message">👇 Use the <strong>open</strong> property in the table below to enable the preview 👇</span>
    <fds-dialog
      heading=${heading}
      ?open=${open}
      ?hideActions=${hideActions}
      ?stacked=${stacked}
      ?scrimClickAction=${scrimClickAction}
      ?escapeKeyAction=${escapeKeyAction}
    >
      <p>This dialog can validate user input before closing.</p>
      <fds-textfield
        id="text-field"
        minlength="3"
        maxlength="64"
        placeholder="Type your first name"
        label="First name"
        required
      ></fds-textfield>
      <fds-button label="Confirm" id="primary-action-button" slot="primaryAction"></fds-button>
      <fds-outlined-button label="Cancel" slot="secondaryAction" dialogAction="close"></fds-outlined-button>
    </fds-dialog>
  `;
};

export const Default: Story<Dialog> = Template.bind({});
Default.args = {
  heading: 'Reset settings ?'
};

export const Scrollable: Story<Dialog> = ScrollableTemplate.bind({});
Scrollable.args = {
  heading: 'Policies'
};

export const FormValidation: Story<Dialog> = Form.bind({});
FormValidation.args = {
  heading: 'Form Validation'
};
