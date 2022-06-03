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
    stepperPositon: POSITION.left
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
        fds-wizard {
          height: 500px;
        }
        .css-10skpf4 {
          width: 100%;
          height:100%
        }
        .page-content {
          display:flex;
          justify-content: space-between;
        }
        img{
          padding-left: 16px;
          max-height: 350px;
        }
        .textfields fds-textfield {
          margin-bottom: 24px;
        }
        p{
          font: var(--fds-body-1);
        }
      </style>`
  ]
} as Meta;

const Template: Story<Wizard> = ({ stepperPositon = 'right', stepperOnDark="false" }) => {
  return html`<fds-wizard .stepperPositon=${stepperPositon} ?stepperOnDark=${stepperOnDark}>
  <fds-button slot='next' label="Next" outlined secondary>
  </fds-button>
  <fds-button slot='cancel' label="Cancel" text secondary>
  </fds-button>
  <fds-button slot='back' label="back" icon="chevron_left" text secondary>
  </fds-button>
  <fds-button slot='save' label="save" secondary>
  </fds-button>
  <fds-wizard-page slot="page" title="Welcome" description="Welcome page">
    <div class="page-content">
      <div class="textfields">
        <fds-textfield required label="Username" icon="person" helper="Please enter your username"></fds-textfield>
        <fds-textfield label="Password" iconTrailing="lock" helper="Please enter your password"></fds-textfield>
        <fds-textfield label="Birth date" iconTrailing="date_range"></fds-textfield>
      </div>
      <img class="image" src="https://i.imgur.com/otY5WR9.png" />
    </div>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Preferences" description="Preferences description" disabled>
    <p>Replace with your content</p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Confirmation" description="Confirmation description">
    <p>Replace with your content</p>
  </fds-wizard-page>
  
</fds-wizard>`;
};

export const Default: Story<Wizard> = Template.bind({});




