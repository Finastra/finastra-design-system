# Chip

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/chip?style=for-the-badge)](https://www.npmjs.com/package/@finastra/chip)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/chip?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/chip')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-chip--default)

Chips allow users to enter information, make selections, filter content, or trigger actions.

## Usage

### Import

```
npm i @finastra/chip
```

```ts
import '@finastra/chip';
...
<fds-chip selected label="Munk"></fds-chip>
```

### API

<!-- DOC -->

#### Properties

| Property             | Attribute      | Type                      | Default | Description                                                                                       |
| -------------------- | -------------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `dense`              | `dense`        | `boolean`                 | false   | Make the chip smaller.                                                                            |
| `disabled`           | `disabled`     | `boolean`                 | false   | Disable a chip.                                                                                   |
| `icon`               | `icon`         | `string`                  | ""      | Material design icon name to display in the left side of the label                                |
| `label`              | `label`        | `string`                  | ""      | Chip label                                                                                        |
| `large`              | `large`        | `boolean`                 | false   | Make the chip bigger.                                                                             |
| `ripple`             |                | `Promise<Ripple \| null>` |         |                                                                                                   |
| `secondary`          | `secondary`    | `boolean`                 | false   | Use Secondary color.                                                                              |
| `selected`           | `selected`     | `boolean`                 | false   | Select a chip                                                                                     |
| `trailingIcon`       | `trailingIcon` | `string`                  | ""      | Material design trailing icon name to display in the right side of the label                      |
| `trailingIconAction` |                |                           |         | Override this callback with what you want to happen whenever there's a click on the trailing icon |

<!-- /DOC -->
