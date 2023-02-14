# Switch

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/switch?style=for-the-badge)](https://www.npmjs.com/package/@finastra/switch)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/switch?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/switch')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-switch--default)

`fds-switch` toggles the state of a single setting on or off.

It extends [Material web's mwc-switch-base](https://github.com/material-components/material-web/tree/main/packages/switch)

## Usage

### Import

```
npm i @finastra/switch
```

```ts
import '@finastra/switch';
...
<fds-switch selected></fds-switch>
```

### API

<!-- DOC -->

#### Properties

| Property         | Attribute  | Modifiers | Type                      | Default    | Description                                                                                                                     |
| ---------------- | ---------- | --------- | ------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`      |            |           | `string`                  |            |                                                                                                                                 |
| `ariaLabelledBy` |            |           | `string`                  |            |                                                                                                                                 |
| `disabled`       | `disabled` |           | `boolean`                 | false      | Indicates whether or not the switch is disabled.                                                                                |
| `name`           |            |           | `string`                  |            |                                                                                                                                 |
| `processing`     |            |           | `boolean`                 |            | Indicates whether or not the switch is processing and showing a loading<br />indicator. A disabled switch cannot be processing. |
| `ripple`         |            | readonly  | `Promise<Ripple \| null>` |            | Implement ripple getter for Ripple integration with mwc-formfield                                                               |
| `selected`       | `selected` |           | `boolean`                 | false      | If true, the switch is on. If false, the switch is off.                                                                         |
| `styles`         |            |           | `CSSResult[]`             | ["styles"] |                                                                                                                                 |
| `value`          |            |           | `string`                  |            |                                                                                                                                 |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `click` | `(): void` |

#### CSS Custom Properties

| Property              | Type  | Default   | Description         |
| --------------------- | ----- | --------- | ------------------- |
| `--fds-primary`       | color | "#694ED6" | Switch color        |
| `--fds-track-opacity` | color | 0.54      | Track color opacity |

<!-- /DOC -->
