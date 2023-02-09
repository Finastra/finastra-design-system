# Textarea

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/textarea?style=for-the-badge)](https://www.npmjs.com/package/@finastra/textarea)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/textarea?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/textarea')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-textarea--default)

Text areas let users enter and edit text.

It extends [Material web's mwc-textarea-base](https://github.com/material-components/material-web/tree/main/packages/textarea).

## Usage

### Import

```
npm i @finastra/textarea
```

```ts
import '@finastra/textarea';
...
<fds-textarea label="description"></fds-textarea>
```

### API

<!-- DOC -->

#### Properties

| Property                  | Attribute     | Modifiers | Type                                                                                 | Default    | Description                                                                                                                                                                                                       |
| ------------------------- | ------------- | --------- | ------------------------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoValidate`            |               |           | `boolean`                                                                            |            |                                                                                                                                                                                                                   |
| `autocapitalize`          |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `charCounter`             | `charCounter` |           | `boolean \| "external" \| "internal"`                                                | false      | Requires `maxLength`to be set. Display character counter with max length. Textareas may display an "external" or "internal" charCounter. When `true`, textareas display an external character counter by default. |
| `cols`                    |               |           | `number`                                                                             |            |                                                                                                                                                                                                                   |
| `disabled`                | `disabled`    |           | `boolean`                                                                            | false      | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission.                                                                                      |
| `endAligned`              |               |           | `boolean`                                                                            |            |                                                                                                                                                                                                                   |
| `helper`                  | `helper`      |           | `string`                                                                             | "helper"   | Helper text to display below the input. Display default only when focused.                                                                                                                                        |
| `helperPersistent`        |               |           | `boolean`                                                                            |            |                                                                                                                                                                                                                   |
| `icon`                    |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `iconTrailing`            |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `inputMode`               |               |           | `TextFieldInputMode`                                                                 |            |                                                                                                                                                                                                                   |
| `label`                   | `label`       |           | `string`                                                                             | "textarea" | Sets floating label value.                                                                                                                                                                                        |
| `max`                     |               |           | `string \| number`                                                                   |            |                                                                                                                                                                                                                   |
| `maxLength`               | `maxLength`   |           | `number`                                                                             | 0          | Maximum length input to accept.                                                                                                                                                                                   |
| `min`                     |               |           | `string \| number`                                                                   |            |                                                                                                                                                                                                                   |
| `minLength`               |               |           | `number`                                                                             |            |                                                                                                                                                                                                                   |
| `name`                    |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `outlined`                |               |           | `boolean`                                                                            | true       |                                                                                                                                                                                                                   |
| `pattern`                 |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `placeholder`             |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `prefix`                  |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `readOnly`                |               |           | `boolean`                                                                            |            |                                                                                                                                                                                                                   |
| `required`                | `required`    |           | `boolean`                                                                            | false      | Displays error state if value is empty and input is blurred.                                                                                                                                                      |
| `ripple`                  |               | readonly  | `Promise<RippleInterface \| null> \| undefined`                                      |            | Implement ripple getter for Ripple integration with mwc-formfield                                                                                                                                                 |
| `rows`                    |               |           | `number`                                                                             |            |                                                                                                                                                                                                                   |
| `selectionEnd`            |               | readonly  | `number \| null`                                                                     |            |                                                                                                                                                                                                                   |
| `selectionStart`          |               | readonly  | `number \| null`                                                                     |            |                                                                                                                                                                                                                   |
| `size`                    |               |           | `number \| null`                                                                     |            |                                                                                                                                                                                                                   |
| `step`                    |               |           | `number \| "any" \| null`                                                            |            | step can be a number or the keyword "any".<br /><br />Use `String` typing to pass down the value as a string and let the native<br />input cast internally as needed.                                             |
| `suffix`                  |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `type`                    |               |           | `TextFieldType`                                                                      |            |                                                                                                                                                                                                                   |
| `validateOnInitialRender` |               |           | `boolean`                                                                            |            |                                                                                                                                                                                                                   |
| `validationMessage`       |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `validity`                |               | readonly  | `ValidityState`                                                                      |            |                                                                                                                                                                                                                   |
| `validityTransform`       |               |           | `((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) \| null` |            |                                                                                                                                                                                                                   |
| `value`                   |               |           | `string`                                                                             |            |                                                                                                                                                                                                                   |
| `willValidate`            |               | readonly  | `boolean`                                                                            |            |                                                                                                                                                                                                                   |

#### Methods

| Method              | Type                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `blur`              | `(): void`                                                                                                                  |
| `checkValidity`     | `(): boolean`                                                                                                               |
| `click`             | `(): void`                                                                                                                  |
| `focus`             | `(): void`                                                                                                                  |
| `layout`            | `(): Promise<void>`                                                                                                         |
| `reportValidity`    | `(): boolean`                                                                                                               |
| `select`            | `(): void`                                                                                                                  |
| `setCustomValidity` | `(message: string): void`                                                                                                   |
| `setSelectionRange` | `(selectionStart: number, selectionEnd: number, selectionDirection?: "forward" \| "backward" \| "none" \| undefined): void` |

#### CSS Custom Properties

| Property        | Type  | Default   | Description     |
| --------------- | ----- | --------- | --------------- |
| `--fds-primary` | color | "#694ED6" | Textarea color. |

<!-- /DOC -->
