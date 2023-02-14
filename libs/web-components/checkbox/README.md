# Checkbox

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/checkbox?style=for-the-badge)](https://www.npmjs.com/package/@finastra/checkbox)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/checkbox?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/checkbox')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-checkbox--default)

Checkboxes allow the user to select one or more items from a set.

## Usage

### Import

```
npm i @finastra/checkbox
```

```ts
import '@finastra/checkbox';
...
<fds-checkbox checked></fds-checkbox>
```

### API

<!-- DOC -->

#### Properties

| Property             | Attribute       | Modifiers | Type                      | Default    | Description                                                                                                                              |
| -------------------- | --------------- | --------- | ------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `ariaDescribedBy`    |                 |           | `string`                  |            |                                                                                                                                          |
| `ariaLabel`          |                 |           | `string`                  |            |                                                                                                                                          |
| `ariaLabelledBy`     |                 |           | `string`                  |            |                                                                                                                                          |
| `checked`            | `checked`       |           | `boolean`                 | true       | Whether the checkbox is checked.                                                                                                         |
| `disabled`           | `disabled`      |           | `boolean`                 | false      | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission.             |
| `indeterminate`      | `indeterminate` |           | `boolean`                 | false      | It is used on the parent to indicate that some but not all of its children are checked.                                                  |
| `isRippleActive`     |                 | readonly  |                           |            |                                                                                                                                          |
| `name`               |                 |           | `string`                  |            |                                                                                                                                          |
| `reducedTouchTarget` |                 |           | `boolean`                 |            | Touch target extends beyond visual boundary of a component by default.<br />Set to `true` to remove touch target added to the component. |
| `ripple`             |                 |           | `Promise<Ripple \| null>` |            | Implement ripple getter for Ripple integration with mwc-formfield                                                                        |
| `styles`             |                 |           | `CSSResult[]`             | ["styles"] |                                                                                                                                          |
| `value`              |                 |           | `string`                  |            |                                                                                                                                          |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `click` | `(): void` |

#### CSS Custom Properties

| Property        | Type  | Default   | Description    |
| --------------- | ----- | --------- | -------------- |
| `--fds-primary` | color | "#694ED6" | Checkbox color |

<!-- /DOC -->
