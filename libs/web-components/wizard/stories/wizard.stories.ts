const README = require('../README.md');
import '@finastra/wizard';
import { POSITION, Wizard } from '@finastra/wizard';
import '@finastra/wizard-page';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Patterns/Wizard',
  component: 'fds-wizard',
  argTypes: {
  ...argTypes,
  cancelAction: {
    description: "Callback called after clicking on the cancel button, Example: `<fds-wizard id='wizard'><fds-button slot='cancel' label='cancel'></fds-button></fds-wizard>` `<script> wizard.cancelAction = () => { console.log('this a cancel action button') } </script>`"
  },
  saveAction: {
    description: "Callback called after clicking on the save button, Example: `<fds-wizard id='wizard'><fds-button slot='save' label='Save'></fds-button></fds-wizard>` `<script> wizard.saveAction = () => { console.log('this a save action button') } </script>`"
  }
  },
  args: {
    stepperPositon: POSITION.right
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=827%3A5864'
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
      <style>
        .sb-show-main.sb-main-centered {
          display: block;
        }
        .sb-show-main.sb-main-centered #root {
          padding: 0;
        }
        body.sb-main-centered #root-inner {
          padding: 0;
        }
      </style>`
  ]
} as Meta;

const Template: Story<Wizard> = ({ stepperPositon = 'right'}) => {
  return html`<fds-wizard title="my-wizard" .stepperPositon=${stepperPositon}>
  <fds-button slot='next' label="Next" outlined secondary>
  </fds-button>
  <fds-button slot='cancel' label="Cancel" text secondary>
  </fds-button>
  <fds-button slot='back' label="back" icon="chevron_left" text secondary>
  </fds-button>
  <fds-button slot='save' label="save" secondary>
  </fds-button>
  <fds-wizard-page slot="page" id="page" title="Step 1" description="Step 1 description">
    <fds-tab-bar activeindex="0" seperator>
      <fds-tab label="General" icon="location_on"></fds-tab>
      <fds-tab label="Personal details" icon="location_on"></fds-tab>
      <fds-tab label="Awaiting approvals" icon="location_on"></fds-tab>
    </fds-tab-bar>
    <div class="textfields">
      <fds-textfield required label="First name" icontrailing="" helper="helper text"></fds-textfield>
      <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
      <fds-textfield label="Employer" icontrailing="" helper="helper text"></fds-textfield>
      <fds-textfield label="Occupation" icontrailing="" helper="helper text"></fds-textfield>
    </div>
  </fds-wizard-page>

  <fds-wizard-page slot="page" id="page" title="Step 2" description="Step 2 description" current>
    <p>First one
    </p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" id="page" title="Step 3" description="Step 3 description" disabled>
    <p>First one
    </p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" id="page" title="Step 4" description="Step 4 description">
    <p>First one
    </p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" id="page" title="Step 5" description="Step 4 description">
    <p>First one
    </p>
  </fds-wizard-page>
  <fds-wizard-page slot="page" id="page" title="Step 6" description="Step 4 description">
    <p>First one
    </p>
  </fds-wizard-page>
</fds-wizard>`;
};

export const Default: Story<Wizard> = Template.bind({});




