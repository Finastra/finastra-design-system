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

### API

<!-- DOC -->

#### Properties

| Property                       | Attribute          | Type      | Default | Description                                                                                                 |
| ------------------------------ | ------------------ | --------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `actionAttribute`              |                    | `string`  |         |                                                                                                             |
| `defaultAction`                |                    | `string`  |         |                                                                                                             |
| `escapeKeyAction`              | `escapeKeyAction`  | `string`  | ""      | Setting this attribute to an empty string "" will prevent the escape key from closing the dialog            |
| `heading`                      | `heading`          | `string`  | ""      | Heading text of the dialog.                                                                                 |
| `hideActions`                  | `hideActions`      | `boolean` | false   | Hides the actions footer of the dialog                                                                      |
| `initialFocusAttribute`        |                    | `string`  |         |                                                                                                             |
| `open`                         | `open`             | `boolean` | false   | Whether the dialog should open                                                                              |
| `scrimClickAction`             | `scrimClickAction` | `string`  | ""      | Setting this attribute to an empty string "" will prevent clicks outside the dialog from closing the dialog |
| `stacked`                      | `stacked`          | `boolean` | false   | Whether to stack the action buttons                                                                         |
| `suppressDefaultPressSelector` |                    | `string`  |         |                                                                                                             |

#### Methods

| Method        | Type       |
| ------------- | ---------- |
| `blur`        | `(): void` |
| `click`       | `(): void` |
| `close`       | `(): void` |
| `focus`       | `(): void` |
| `forceLayout` | `(): void` |
| `show`        | `(): void` |

#### Slots

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `primaryAction`   | Footer area containing the dialog's primary action button.   |
| `secondaryAction` | Footer area containing the dialog's secondary action button. |

#### CSS Custom Properties

| Property                       | Type  | Default               | Description                              |
| ------------------------------ | ----- | --------------------- | ---------------------------------------- |
| `--fds-dialog-content-padding` |       | "0px 32px 16px 32px"  | Sets the content padding                 |
| `--fds-dialog-max-height`      |       | "calc(100% - 32px)"   | Sets dialog max height                   |
| `--fds-dialog-max-width`       |       | "560px"               | Sets dialog max width                    |
| `--fds-dialog-min-width`       |       | "280px"               | Sets dialog min width                    |
| `--fds-dialog-scrim-color`     | color | "rgba(0, 0, 0, 0.12)" | Color of the scrim                       |
| `--fds-dialog-z-index`         |       | 7                     | Sets the z-index of the dialog and scrim |

<!-- /DOC -->
