# Fab

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/fab?style=for-the-badge)](https://www.npmjs.com/package/@finastra/fab)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/fab?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/fab')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-fab--default)

## Usage

The FAB (aka Floating Action Button) is a button that appears in front of all screen content.

### Import

```
npm i @finastra/fab
```

```ts
import '@finastra/fab';
...
<fds-fab extended gradient label="Edit" icon="edit"></fds-fab>
```

### API

<!-- DOC -->

#### Properties

| Property             | Attribute  | Type                      | Default    | Description                |
| -------------------- | ---------- | ------------------------- | ---------- | -------------------------- |
| `dense`              | `dense`    | `boolean`                 | false      | Make the fab smaller.      |
| `disabled`           |            | `boolean`                 |            |                            |
| `exited`             |            | `boolean`                 |            |                            |
| `extended`           | `extended` | `boolean`                 | false      | Make the fab extended.     |
| `gradient`           | `gradient` | `boolean`                 | false      | Apply gradient color.      |
| `icon`               | `icon`     | `string`                  | "add"      | Fab icon.                  |
| `label`              | `label`    | `string`                  | "Action"   | Label in the extended fab. |
| `mini`               |            | `boolean`                 |            |                            |
| `reducedTouchTarget` |            | `boolean`                 |            |                            |
| `ripple`             |            | `Promise<Ripple \| null>` |            |                            |
| `showIconAtEnd`      |            | `boolean`                 |            |                            |
| `styles`             |            | `CSSResult[]`             | ["styles"] |                            |

#### CSS Custom Properties

| Property          | Type  | Default   | Description      |
| ----------------- | ----- | --------- | ---------------- |
| `--fds-primary`   | color | "#694ED6" | Primary color.   |
| `--fds-secondary` | color | "#C137A2" | Secondary color. |

<!-- /DOC -->
