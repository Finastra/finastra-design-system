# Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/dialog?style=for-the-badge)](https://www.npmjs.com/package/@finastra/dialog)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/dialog?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/dialog')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-dialog--default)

## Usage

### Import

```
npm i @finastra/dialog
```

```ts
import '@finastra/dialog';
...
<fds-button label="open" onclick="openDialog()"></fds-button>
<fds-dialog id="myDropdown" heading="Title">
  <span>Content</span>
  <fds-button
      secondary
      label="Yes"
      slot="primaryAction"
      dialogAction="ok">
  </fds-button>
  <fds-text-button
      label="No"
      slot="secondaryAction"
      dialogAction="cancel">
  </fds-text-button>
</fds-dialog>


<script>
  function openDialog() {
    document.getElementById("myDropdown").show();
  }
</script>
```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/button/dist/fds-button.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@finastra/dialog/dist/fds-dialog.js"></script>

<fds-button label="open" onclick="myFunction()"></fds-button>
<fds-dialog id="myDropdown" heading="Title">
  <span>Content</span>
  <fds-button
      secondary
      label="Yes"
      slot="primaryAction"
      dialogAction="ok">
  </fds-button>
  <fds-text-button
      label="No"
      slot="secondaryAction"
      dialogAction="cancel">
  </fds-text-button>
</fds-dialog>


<script>
  function myFunction() {
    document.getElementById("myDropdown").show();
  }
</script>
```
