# Wizard

A wizard is a setup process where the user is guided through a series of steps to achieve a goal. The purpose of the pattern is to simplify tasks by cutting them into smaller ones.It is easy to navigate between the steps which helps the user to complete lengthy forms in less time. Also the user can save it and revisit the wizard when he/she has the relevant required information available.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/wizard?style=for-the-badge)](https://www.npmjs.com/package/@finastra/wizard)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/wizard?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/wizard')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-wizard--default)

## Usage

### Import

```
npm i @finastra/wizard @finastra/button @finastra/textfield
```

```ts
import '@finastra/wizard';
import '@finastra/textfield';
import '@finastra/button';
...
<fds-wizard id="wizard">
  <fds-text-button slot='left-action' label="Cancel" secondary>
  </fds-text-button>
  <fds-outlined-button slot='next' label="Next" secondary>
  </fds-outlined-button>
  <fds-text-button slot='previous' label="Back" secondary icon="chevron_left">
  </fds-text-button>
  <fds-button slot='done' label="Save" secondary>
  </fds-button>
  <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header>
    <div class="page-content">
      <div class="textfields">
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
      </div>
      <div class="image">
        <img src="https://i.imgur.com/otY5WR9.png" />
      </div>
    </div>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Preferences" description="Preferences page" disabled header>
    <p>put your content here</p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Confirmation" description="Confirmation page" header>
    <p>put your content here</p>
  </fds-wizard-page>
</fds-wizard>
```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/wizard/dist/fds-wizard.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@finastra/button/dist/fds-button.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@finastra/textfield/dist/fds-textfield.js"></script>

<fds-wizard id="wizard">
  <fds-text-button slot='left-action' label="Cancel" secondary>
  </fds-text-button>
  <fds-outlined-button slot='next' label="Next" secondary>
  </fds-outlined-button>
  <fds-text-button slot='previous' label="Back" secondary icon="chevron_left">
  </fds-text-button>
  <fds-button slot='done' label="Save" secondary>
  </fds-button>
  <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header>
    <div class="page-content">
      <div class="textfields">
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
      </div>
      <div class="image">
        <img src="https://i.imgur.com/otY5WR9.png" />
      </div>
    </div>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Preferences" description="Preferences page" disabled header>
    <p>put your content here</p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Confirmation" description="Confirmation page" header>
    <p>put your content here</p>
  </fds-wizard-page>
</fds-wizard>
```
