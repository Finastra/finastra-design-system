# Formfield

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/formfield?style=for-the-badge)](https://www.npmjs.com/package/@finastra/formfield)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/formfield?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/formfield')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-formfield--default)

## Usage

A form field is a text caption for FDS input elements including [fds-checkbox](https://finastra.github.io/finastra-design-system/?path=/docs/forms-checkbox--default), [fds-radio](https://finastra.github.io/finastra-design-system/?path=/docs/forms-radio--default), and [fds-switch](https://finastra.github.io/finastra-design-system/?path=/docs/forms-switch--default).

It is equivalent to the native <label> element in that it forwards user interaction events to the input element. For example, tapping on the label causes the associated input element to toggle and focus.

`fds-formfield` extends [Material web's mwc-formfield-base](https://github.com/material-components/material-web/tree/mwc/components/formfield).

### Import

```
npm i @finastra/formfield
```

```ts
import '@finastra/formfield';
import '@finastra/checkbox';
...
<fds-formfield label="Accept terms and conditions">
    <fds-checkbox checked></fds-checkbox>
</fds-formfield>
```

### API

<!-- DOC -->

#### Properties

| Property       | Attribute      | Type      | Default | Description                                                                                            |
| -------------- | -------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `alignEnd`     | `alignEnd`     | `boolean` | false   | Align the component at the end of the label..                                                          |
| `label`        | `label`        | `string`  | ""      | The text to display for the label and sets a11y label on input. (visually overriden by slotted label). |
| `nowrap`       | `nowrap`       | `boolean` | false   | Prevents the label from wrapping and overflow text is ellipsed.                                        |
| `spaceBetween` | `spaceBetween` | `boolean` | false   | Add space between the component and the label as the formfield grows.                                  |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `click` | `(): void` |

#### CSS Custom Properties

| Property           | Default   | Description  |
| ------------------ | --------- | ------------ |
| `--fds-label-font` | "#694ED6" | Switch color |

<!-- /DOC -->
