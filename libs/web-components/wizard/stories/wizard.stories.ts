import '@finastra/wizard';
import type { Wizard } from '@finastra/wizard';
import '@finastra/wizard-page';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/Wizard',
  component: 'fds-wizard',
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
    }
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

const Template: Story<Wizard> = () => {
  return html`<fds-wizard title="my-wizard" reverseStepper>
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
        <fds-textfield
          required
          label="First name"
          icontrailing=""
          helper="helper text"
        ></fds-textfield>
        <fds-textfield
          label="Last name"
          icontrailing=""
          helper="helper text"
        ></fds-textfield>
        <fds-textfield
          label="Employer"
          icontrailing=""
          helper="helper text"
        ></fds-textfield>
        <fds-textfield
          label="Occupation"
          icontrailing=""
          helper="helper text"
        ></fds-textfield>
        <fds-textfield
        label="Occupation"
        icontrailing=""
        helper="helper text"
      ></fds-textfield>
      <fds-textfield
      label="Occupation"
      icontrailing=""
      helper="helper text"
    ></fds-textfield>
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
