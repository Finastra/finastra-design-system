const README = require('../README.md');
import '@finastra/wizard';
import { POSITION, Wizard } from '@finastra/wizard';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-wizard.json';

export default {
  title: 'FORMS/Wizard',
  component: 'fds-wizard',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6BBm9XAsO9lQZQ4xBM4cGr/Patterns-%26-apps?node-id=402%3A10987'
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
      <style>
        fds-wizard {
          height: 500px;
        }
        .css-10skpf4 {
          width: 100%;
          height: 100%;
        }
        .page-content {
          display: flex;
          justify-content: space-between;
        }
        img {
          padding-left: 16px;
          max-height: 350px;
        }
        .textfields fds-textfield {
          margin-bottom: 24px;
        }
        p {
          font: var(--fds-body-1);
        }
        fds-alert-message {
          padding-bottom: 32px;
        }
      </style> `
  ]
} as Meta;

const Template: Story<Wizard> = ({ stepperPosition, stepperOnDark, currentStepIndex, stepsCounter }) => {
  return html`<fds-wizard
    stepperPosition=${stepperPosition}
    ?stepperOnDark=${stepperOnDark}
    .currentStepIndex=${currentStepIndex}
    ?stepsCounter=${stepsCounter}
  >
    <fds-outlined-button slot="next" label="Next" secondary> </fds-outlined-button>
    <fds-text-button slot="left-action" label="Cancel" secondary> </fds-text-button>
    <fds-text-button slot="previous" label="Back" icon="chevron_left" secondary> </fds-text-button>
    <fds-button slot="done" label="Save" secondary> </fds-button>

    <fds-wizard-page
      slot="page"
      page-title="Welcome"
      icon="https://i.imgur.com/cEP8lXE.png"
      description="Welcome page"
      next-label="Set up preferences"
      header
    >
      <div class="page-content">
        <div class="textfields">
          <fds-textfield required label="Username" icon="person" helper="Please enter your username"></fds-textfield>
          <fds-textfield label="Password" iconTrailing="lock" helper="Please enter your password"></fds-textfield>
          <fds-textfield label="Birth date" iconTrailing="date_range"></fds-textfield>
        </div>
        <img class="image" src="https://i.imgur.com/otY5WR9.png" />
      </div>
    </fds-wizard-page>

    <fds-wizard-page
      slot="page"
      page-title="Preferences"
      icon="https://i.imgur.com/yHVTpn6.png"
      description="Preferences description"
      disabled
      header
    >
      <p>Replace with your content</p>
    </fds-wizard-page>

    <fds-wizard-page
      slot="page"
      page-title="Confirmation"
      icon="https://i.imgur.com/cEP8lXE.png"
      description="Confirmation description"
      header
    >
      <fds-alert-message
        type="info"
        title="You're almost done"
        description="A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner."
        icon=""
        layout="multiLines"
      ></fds-alert-message>
      <fds-card>
        <fds-card-header>
          <fds-avatar name="raya hristova"></fds-avatar>
          <div class="card-header-text">
            <fds-card-title>Raya Hristova</fds-card-title>
            <fds-card-subtitle>raya.hristova@finastra.com</fds-card-subtitle>
          </div>
        </fds-card-header>
        <fds-card-actions align="end">
          <fds-text-button label="Edit"></fds-text-button>
          <fds-button label="Confirm"></fds-button>
        </fds-card-actions>
      </fds-card>
    </fds-wizard-page>
  </fds-wizard>`;
};

const LinearTemplate: Story<Wizard> = ({ stepperPosition, stepperOnDark, currentStepIndex, linear }) => {
  return html`<fds-wizard
      .stepperPosition=${stepperPosition}
      ?stepperOnDark=${stepperOnDark}
      .currentStepIndex=${currentStepIndex}
      ?linear=${linear}
    >
      <fds-text-button slot="left-action" label="Cancel" secondary> </fds-text-button>
      <fds-outlined-button slot="next" label="Next" secondary> </fds-outlined-button>
      <fds-text-button slot="previous" label="Back" secondary icon="chevron_left"> </fds-text-button>
      <fds-button slot="done" label="Save" secondary> </fds-button>
      <fds-wizard-page slot="page" page-title="Welcome" description="Welcome page" header id="page">
        <div class="page-content">
          <div class="textfields">
            <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
            <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
            <fds-textfield id="hey" label="Last name" icontrailing="" helper="helper text"></fds-textfield>
          </div>
          <div class="image">
            <img src="https://i.imgur.com/otY5WR9.png" />
          </div>
        </div>
        <fds-button id="validate" label="validate"></fds-button>
      </fds-wizard-page>

      <fds-wizard-page slot="page" page-title="Preferences" description="Preferences description" header>
        <p>put your content here</p>
      </fds-wizard-page>

      <fds-wizard-page slot="page" page-title="Confirmation" description="Confirmation page" header>
        <p>put your content here</p>
      </fds-wizard-page>
    </fds-wizard>

    <script>
      const validateBtn = document.getElementById('validate');
      validateBtn.addEventListener('click', function () {
        document.getElementById('page').setAttribute('completed', 'true');
      });
    </script> `;
};
export const Default: Story<Wizard> = Template.bind({});

export const Right: Story<Wizard> = Template.bind({});
Right.args = {
  stepperPosition: POSITION.right
};

export const Linear: Story<Wizard> = LinearTemplate.bind({});
Linear.args = {
  linear: true
};
