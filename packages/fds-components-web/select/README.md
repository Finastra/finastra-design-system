# Select

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/select?style=for-the-badge)](https://www.npmjs.com/package/@finastra/select)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/select?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/select')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-select--default)

Selects display a list of choices in a dropdown menu. \
`fds-select` extends [Material web's mwc-select-base](https://github.com/material-components/material-web/tree/main/packages/select).

## Usage

### Import

```
npm i @finastra/select
```

```ts
import '@finastra/select';
...
<fds-select>
    <fds-list-item value="1">Item 1</fds-list-item>
    <fds-list-item value="2">Item 2</fds-list-item>
    <fds-list-item value="3">Item 3</fds-list-item>
</fds-select>
```

### API

<!-- DOC -->

#### Properties

| Property                  | Attribute           | Modifiers | Type                                                                                 | Default    | Description                                                                                                                  |
| ------------------------- | ------------------- | --------- | ------------------------------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `dense`                   | `dense`             |           | `boolean`                                                                            | false      | Smaller select field size.                                                                                                   |
| `disabled`                | `disabled`          |           | `boolean`                                                                            | false      | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission. |
| `fixedMenuPosition`       |                     |           | `boolean`                                                                            |            |                                                                                                                              |
| `helper`                  | `helper`            |           | `string`                                                                             | ""         | Helper text to display below the input. Display default only when focused.                                                   |
| `icon`                    | `icon`              |           | `string`                                                                             | ""         | Leading icon to display in input. See `mwc-icon`.                                                                            |
| `index`                   | `index`             |           | `number`                                                                             | -1         | Index of selected list item.                                                                                                 |
| `items`                   | `items`             |           | `ListItemBase[]`                                                                     | "[]"       | List of selectable items.                                                                                                    |
| `label`                   | `label`             |           | `string`                                                                             | ""         | Sets label value.                                                                                                            |
| `labelInside`             | `labelInside`       |           | `boolean`                                                                            | false      | Keep the label in the input.                                                                                                 |
| `name`                    |                     |           | `string`                                                                             |            |                                                                                                                              |
| `naturalMenuWidth`        |                     |           | `boolean`                                                                            |            |                                                                                                                              |
| `outlined`                | `outlined`          |           | `boolean`                                                                            | true       | Whether or not to show the material outlined variant.                                                                        |
| `override`                |                     |           |                                                                                      |            |                                                                                                                              |
| `required`                | `required`          |           | `boolean`                                                                            | false      | Displays error state if value is empty and input is blurred.                                                                 |
| `ripple`                  |                     | readonly  | `Promise<RippleInterface \| null> \| undefined`                                      |            | Implement ripple getter for Ripple integration with mwc-formfield                                                            |
| `selected`                | `selected`          |           | `ListItemBase \| null`                                                               | null       | Selected list item element type ListItemBase.                                                                                |
| `styles`                  |                     |           | `array`                                                                              | ["styles"] |                                                                                                                              |
| `validateOnInitialRender` |                     |           | `boolean`                                                                            |            |                                                                                                                              |
| `validationMessage`       | `validationMessage` |           | `string`                                                                             | ""         | Message to show in the error color when the textfield is invalid. (Helper text will not be visible).                         |
| `validity`                |                     | readonly  | `ValidityState`                                                                      |            |                                                                                                                              |
| `validityTransform`       |                     |           | `((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) \| null` |            |                                                                                                                              |
| `value`                   | `value`             |           | `string`                                                                             | ""         | The select control's value determined by the value property of the currently selected list item.                             |

#### Methods

| Method              | Type                                                  |
| ------------------- | ----------------------------------------------------- |
| `blur`              | `(): void`                                            |
| `checkValidity`     | `(): boolean`                                         |
| `click`             | `(): void`                                            |
| `focus`             | `(): void`                                            |
| `layout`            | `(updateItems?: boolean \| undefined): Promise<void>` |
| `layoutOptions`     | `(): Promise<void>`                                   |
| `renderOutline`     | `(): TemplateResult<1> \| unique symbol`              |
| `reportValidity`    | `(): boolean`                                         |
| `select`            | `(index: number): void`                               |
| `setCustomValidity` | `(message: string): void`                             |

#### Events

| Event      | Type             |
| ---------- | ---------------- |
| `action`   | `ActionDetail`   |
| `change`   |                  |
| `closed`   |                  |
| `invalid`  |                  |
| `opened`   |                  |
| `selected` | `SelectedDetail` |

#### Slots

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `default` | Content to display in the selects internal <mwc-menu> element. |

#### CSS Custom Properties

| Property        | Type  | Default   | Description    |
| --------------- | ----- | --------- | -------------- |
| `--fds-error`   | color | "#E40046" | Error color.   |
| `--fds-primary` | color | "#694ED6" | Primary color. |

<!-- /DOC -->
