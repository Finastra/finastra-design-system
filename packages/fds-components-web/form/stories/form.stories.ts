const README = require('../README.md');
import '@finastra/form';
import type { Form } from '@finastra/form';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-form.json';

export default {
  title: 'Components/Form',
  component: 'fds-form',
  argTypes,
  args: {
    name: 'World'
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-textfield,
        fds-select,
        fds-formfield {
          padding-bottom: 16px;
        }
      </style>
      <script>
        const form = document.getElementById('myForm');
        form.addEventListener('formSubmit', (e) => {
          console.log("hey");
          e.preventDefault();
          for (var pair of e.detail.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
          }
        });
      </script> `
  ],
  cssprops
} as Meta;

const Template: Story<Form> = ({}) => {
  return html`
  <fds-form id="myForm">
    <fds-textfield required validationMessage="required" name="first name" label="First name" placeholder="First name"
        icon="person_outline" helper="fill it like this" dense>
    </fds-textfield>

    <fds-textfield name="last name" label="Last name" placeholder="Last name" labelInside dense>
    </fds-textfield>

    <fds-textarea required name="Bio" label="Bio"></fds-textarea>

    <fds-textfield name="email" label="Email" placeholder="Email" icon="mail_outline" required (blur)="checkField()"
        validationmessage="Invalid email adress"
        ></fds-textfield>

    <p>Gender: </p>
     <div style="display:flex;">
        <fds-formfield name="gender" required label="Female" icon="schedule">
            <fds-radio checked name="gender" value="Female"></fds-radio>
        </fds-formfield>

        <fds-formfield name="gender" required label="Male" icon="schedule">
            <fds-radio name="gender" value="Male"></fds-radio>
        </fds-formfield>
    </div>

     <fds-select name="position" required validationMessage="required field" (change)="checkField()" label="Position"
        icon="work_outline">
        <fds-list-item></fds-list-item>
        <fds-list-item value="0">Frontend developer</fds-list-item>
        <fds-list-item value="1">Backend developer</fds-list-item>
        <fds-list-item value="2">IT Manager</fds-list-item>
    </fds-select>

    <fds-select name="country" required validationMessage="required field" (change)="checkField()" label="Country"
        icon="work_outline">
        <fds-list-item></fds-list-item>
        <fds-list-item value="0"> France</fds-list-item>
        <fds-list-item value="1">USA </fds-list-item>
        <fds-list-item value="2"> UK</fds-list-item>
    </fds-select> 

    <fds-formfield required label="Accept terms and conditions" icon="schedule">
        <fds-checkbox name="terms and conditions" (change)="checkField()"></fds-checkbox>
    </fds-formfield><br>

    <fds-autocomplete required label="number" name="Number">
        <fds-list-item value="One">One</fds-list-item>
        <fds-list-item value="Two">Two</fds-list-item>
        <fds-list-item value="Three">Three</fds-list-item>
    </fds-autocomplete>

    <p>Age :</p>
    <fds-slider discrete withtickmarks name="age" value="25" min="0" max="150"></fds-slider>

    <fds-formfield required label="Receive adds" icon="schedule">
        <fds-switch name="adds" selected></fds-switch>
    </fds-formfield><br>

    <fds-button type="submit" label="submit"></fds-button>
    <fds-button type="reset" label="reset"></fds-button>
</fds-form>
  
  `;
};

export const Default: Story<Form> = Template.bind({});
