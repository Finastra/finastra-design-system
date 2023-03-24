# Form

fds-form is a component used to collect user input from fds interactive controls such as : [fds-textfield](https://finastra.github.io/finastra-design-system/?path=/docs/forms-textfield--default) , [fds-select](https://finastra.github.io/finastra-design-system/?path=/docs/forms-select--default), [fds-checkbox](https://finastra.github.io/finastra-design-system/?path=/docs/forms-checkbox--default) ...

The form fields that have constraints defined will be automatically validated when the fds form is submitted and a default error message will be shown for any invalid form field.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/form?style=for-the-badge)](https://www.npmjs.com/package/@finastra/form)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/form?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/form')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-form--default)

## Usage

### Import

```
npm i @finastra/form
```

```ts
import '@finastra/form';
...
  <fds-form id="myForm">
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

      <div class="actions">
        <fds-button type="submit" label="submit"></fds-button>
        <fds-outlined-button type="reset" label="reset"></fds-outlined-button>
      </div>
  </fds-form>
```

### API

<!-- DOC -->
<!-- /DOC -->
