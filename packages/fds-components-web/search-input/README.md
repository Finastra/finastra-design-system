# Search Input

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/search-input?style=for-the-badge)](https://www.npmjs.com/package/@finastra/search-input)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/search-input?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/search-input)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-search-input--default-story)

`<fds-search-input>` delivers a single input field with a "reset" button as well as a loader and a mangifying glass icon with which to power search interactions.

Search Input Component extends `fds-base-textfield` component, so it inherits all capacity of [fds-textfield](https://github.com/Finastra/finastra-design-system/blob/main/packages/fds-components-web/textfield/README.md)

## Usage

### Import

```
npm i @finastra/search-input
```

```ts
import '@finastra/search-input';
...
<fds-search-input showClearButton label="Search"></fds-search-input>
```

### API

<!-- DOC -->

#### Properties

| Property                  | Attribute           | Modifiers | Type                                                                                 | Default      | Description                                                                                                                                                           |
| ------------------------- | ------------------- | --------- | ------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoValidate`            |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `autocapitalize`          |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `charCounter`             |                     |           | `boolean \| "external" \| "internal"`                                                |              |                                                                                                                                                                       |
| `dense`                   | `dense`             |           | `boolean`                                                                            | false        | Smaller text field size.                                                                                                                                              |
| `disabled`                | `disabled`          |           | `boolean`                                                                            | false        | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission.                                          |
| `endAligned`              |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `helper`                  | `helper`            |           | `string`                                                                             | ""           | Helper text to display below the input.                                                                                                                               |
| `helperPersistent`        |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `icon`                    | `icon`              |           | `string`                                                                             | "search"     | Leading icon to display in input. See `fds-icon`.                                                                                                                     |
| `iconTrailing`            |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `inputMode`               |                     |           | `TextFieldInputMode`                                                                 |              |                                                                                                                                                                       |
| `label`                   | `label`             |           | `string`                                                                             | ""           | Sets floating label value.                                                                                                                                            |
| `labelInside`             | `labelInside`       |           | `boolean`                                                                            | false        | Is the label included in the text field.                                                                                                                              |
| `loading`                 | `loading`           |           | `boolean`                                                                            | false        | Display searchInput loader.                                                                                                                                           |
| `max`                     |                     |           | `string \| number`                                                                   |              |                                                                                                                                                                       |
| `maxLength`               |                     |           | `number`                                                                             |              |                                                                                                                                                                       |
| `min`                     |                     |           | `string \| number`                                                                   |              |                                                                                                                                                                       |
| `minLength`               |                     |           | `number`                                                                             |              |                                                                                                                                                                       |
| `name`                    |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `outlined`                |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `pattern`                 |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `placeholder`             | `placeholder`       |           | `string`                                                                             | "Search ..." | Sets placeholder value displayed when input is empty.                                                                                                                 |
| `prefix`                  |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `readOnly`                |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `required`                | `required`          |           | `boolean`                                                                            | false        | Displays error state if value is empty and input is blurred.                                                                                                          |
| `ripple`                  |                     | readonly  | `Promise<RippleInterface \| null> \| undefined`                                      |              | Implement ripple getter for Ripple integration with mwc-formfield                                                                                                     |
| `selectionEnd`            |                     | readonly  | `number \| null`                                                                     |              |                                                                                                                                                                       |
| `selectionStart`          |                     | readonly  | `number \| null`                                                                     |              |                                                                                                                                                                       |
| `showActionButton`        |                     |           | `boolean`                                                                            | false        |                                                                                                                                                                       |
| `showClearButton`         | `showClearButton`   |           | `boolean`                                                                            | false        | Show clear button.                                                                                                                                                    |
| `size`                    |                     |           | `number \| null`                                                                     |              |                                                                                                                                                                       |
| `step`                    |                     |           | `number \| "any" \| null`                                                            |              | step can be a number or the keyword "any".<br /><br />Use `String` typing to pass down the value as a string and let the native<br />input cast internally as needed. |
| `suffix`                  |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `type`                    | `type`              |           | `TextFieldType`                                                                      | ""           | A string specifying the type of control to render.                                                                                                                    |
| `validateOnInitialRender` |                     |           | `boolean`                                                                            |              |                                                                                                                                                                       |
| `validationMessage`       | `validationMessage` |           | `string`                                                                             | ""           | Message to show in the error color when the textfield is invalid. (Helper text will not be visible)                                                                   |
| `validity`                |                     | readonly  | `ValidityState`                                                                      |              |                                                                                                                                                                       |
| `validityTransform`       |                     |           | `((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) \| null` |              |                                                                                                                                                                       |
| `value`                   |                     |           | `string`                                                                             |              |                                                                                                                                                                       |
| `willValidate`            |                     | readonly  | `boolean`                                                                            |              |                                                                                                                                                                       |

#### Methods

| Method               | Type                                                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `blur`               | `(): void`                                                                                                                  |
| `checkValidity`      | `(): boolean`                                                                                                               |
| `click`              | `(): void`                                                                                                                  |
| `focus`              | `(): void`                                                                                                                  |
| `layout`             | `(): Promise<void>`                                                                                                         |
| `renderTrailingIcon` | `(): string \| TemplateResult<ResultType>`                                                                                  |
| `reportValidity`     | `(): boolean`                                                                                                               |
| `select`             | `(): void`                                                                                                                  |
| `setCustomValidity`  | `(message: string): void`                                                                                                   |
| `setSelectionRange`  | `(selectionStart: number, selectionEnd: number, selectionDirection?: "forward" \| "backward" \| "none" \| undefined): void` |

#### Events

| Event   |
| ------- |
| `input` |

#### CSS Custom Properties

| Property                    | Type  | Default   | Description                   |
| --------------------------- | ----- | --------- | ----------------------------- |
| `--fds-icon-color`          | color | "#694ED6" | Icon color.                   |
| `--fds-icon-trailing-color` | color | "#694ED6" | Icon trailing color.          |
| `--fds-primary`             | color | "#694ED6" | TextField color               |
| `--fds-text-field-radius`   | text  | "4px"     | Border radius of the outline. |

<!-- /DOC -->
