# Radio

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/radio?style=for-the-badge)](https://www.npmjs.com/package/@finastra/radio)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/radio?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/radio')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-radio--default)

`fds-radio` extend [Material web's mwc-radio-base](https://github.com/material-components/material-web/tree/main/packages/radio)

## Usage

### Import

```
npm i @finastra/radio
```

```ts
import '@finastra/radio';
...
<fds-radio checked name="Gaga" value="Freddie"></fds-radio>
<fds-radio checked name="Gaga" value="Mercury"></fds-radio>
```

### API

<!-- DOC -->

#### Properties

| Property              | Attribute            | Modifiers | Type                      | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | -------------------- | --------- | ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`           |                      |           | `string`                  |            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `ariaLabelledBy`      |                      |           | `string`                  |            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `checked`             | `checked`            |           | `boolean`                 | false      | We define our own getter/setter for `checked` because we need to track<br />changes to it synchronously.<br /><br />The order in which the `checked` property is set across radio buttons<br />within the same group is very important. However, we can't rely on<br />UpdatingElement's `updated` callback to observe these changes (which is<br />also what the `@observer` decorator uses), because it batches changes to<br />all properties.<br /><br />Consider:<br /><br /> radio1.disabled = true;<br /> radio2.checked = true;<br /> radio1.checked = true;<br /><br />In this case we'd first see all changes for radio1, and then for radio2,<br />and we couldn't tell that radio1 was the most recently checked. |
| `disabled`            | `disabled`           |           | `boolean`                 | false      | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `formElementTabIndex` |                      |           | `number`                  |            | input's tabindex is updated based on checked status.<br />Tab navigation will be removed from unchecked radios.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `global`              | `global`             |           | `boolean`                 | false      | If true, this radio button will use a global, document-level scope for its selection group rather than its local shadow root.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `isRippleActive`      |                      | readonly  |                           |            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `name`                | `name`               |           | `string`                  | ""         | Name of the input for form submission, and identifier for the selection group. Only one radio button can be checked for a given selection group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `reducedTouchTarget`  | `reducedTouchTarget` |           | `boolean`                 | false      | Touch target extends beyond visual boundary of a component by default.<br />Set to `true` to remove touch target added to the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `ripple`              |                      |           | `Promise<Ripple \| null>` |            | Implement ripple getter for Ripple integration with mwc-formfield                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `styles`              |                      |           | `CSSResult[]`             | ["styles"] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `value`               | `value`              |           | `string`                  | ""         | Value of the input for form submission.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `click` | `(): void` |
| `focus` | `(): void` |

#### Events

| Event     |
| --------- |
| `checked` |

#### CSS Custom Properties

| Property        | Type  | Default   | Description        |
| --------------- | ----- | --------- | ------------------ |
| `--fds-primary` | color | "#694ED6" | FDS Primary color. |

<!-- /DOC -->
