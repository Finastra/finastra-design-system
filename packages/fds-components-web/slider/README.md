# Slider

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/slider?style=for-the-badge)](https://www.npmjs.com/package/@finastra/slider)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/slider?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/slider')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-slider--default)

Sliders allow users to make selections from a range of values.

The `fds-slider` extends [Material web's mwc-slider](https://github.com/material-components/material-web/tree/main/packages/slider).

## Usage

### Import

```
npm i @finastra/slider
```

```ts
import '@finastra/slider';
...
<fds-slider value="25" min="10" max="50"></fds-slider>
```

### API

<!-- DOC -->

#### Properties

| Property                         | Attribute       | Modifiers | Type                                            | Default    | Description                                                                                                                  |
| -------------------------------- | --------------- | --------- | ----------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ariaDescribedBy`                |                 |           | `string`                                        |            |                                                                                                                              |
| `ariaLabel`                      |                 |           | `string`                                        |            |                                                                                                                              |
| `ariaLabelledBy`                 |                 |           | `string`                                        |            |                                                                                                                              |
| `disabled`                       | `disabled`      |           | `boolean`                                       | false      | Disabled state for the component. When `disabled` is set to `true`, the<br />component will not be added to form submission. |
| `discrete`                       | `discrete`      |           | `boolean`                                       | false      | display value above the thumb.                                                                                               |
| `max`                            | `max`           |           | `number`                                        | 100        | Maximum selectable value of the slider.                                                                                      |
| `min`                            | `min`           |           | `number`                                        | 0          | Minimum selectable value of the slider.                                                                                      |
| `name`                           |                 |           | `string`                                        |            |                                                                                                                              |
| `ripple`                         |                 | readonly  | `Promise<RippleInterface \| null> \| undefined` |            | Implement ripple getter for Ripple integration with mwc-formfield                                                            |
| `step`                           | `step`          |           | `number`                                        | 1          | The step to increase current value.                                                                                          |
| `styles`                         |                 |           | `CSSResult[]`                                   | ["styles"] |                                                                                                                              |
| `value`                          | `value`         |           | `number`                                        | 0          | Current selected value.                                                                                                      |
| `valueEnd`                       |                 |           | `number`                                        |            |                                                                                                                              |
| `valueToAriaTextTransform`       |                 |           | `((value: number) => string) \| null`           |            |                                                                                                                              |
| `valueToValueIndicatorTransform` |                 |           | `(value: number) => string`                     |            |                                                                                                                              |
| `withTickMarks`                  | `withTickMarks` |           | `boolean`                                       | false      | display tick marks for each step on the track.                                                                               |

#### Methods

| Method   | Type                                                   |
| -------- | ------------------------------------------------------ |
| `click`  | `(): void`                                             |
| `layout` | `(skipUpdateUI?: boolean \| undefined): Promise<void>` |

#### CSS Custom Properties

| Property        | Type  | Default   | Description          |
| --------------- | ----- | --------- | -------------------- |
| `--fds-primary` | color | "#694ED6" | Color of the slider. |

<!-- /DOC -->
