# Brand card

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/brand-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/brand-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/brand-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/brand-card)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-card-brand--default)

This component extends [@finastra/card](https://www.npmjs.com/package/@finastra/card).

This card is aimed to be used to display an application branding in an card list.

## Usage

### Import

```
npm i @finastra/brand-card
```

```ts
import '@finastra/brand-card';
...
<fds-brand-card label="App name"></fds-brand-card>
```

### API

<!-- DOC -->

#### Properties

| Property     | Attribute    | Type      | Default | Description                                                   |
| ------------ | ------------ | --------- | ------- | ------------------------------------------------------------- |
| `dense`      | `dense`      | `boolean` | false   | Make the card smaller                                         |
| `disabled`   | `disabled`   | `boolean` | false   | Disabled style of the card.                                   |
| `extraDense` | `extraDense` | `boolean` | false   | Make the card extra small                                     |
| `label`      | `label`      |           |         | App card label                                                |
| `large`      | `large`      | `boolean` | false   | Make the card bigger                                          |
| `outlined`   | `outlined`   | `boolean` | false   | Change the card style to outlined, default style is elevated. |
| `secondary`  | `secondary`  | `boolean` | false   | Color and ribbon type                                         |
| `selectable` | `selectable` | `boolean` | false   | Change the card style to an action card.                      |
| `shortLabel` | `shortLabel` | `string`  | ""      | Optional app card displayed label                             |

#### Methods

| Method           | Type                     |
| ---------------- | ------------------------ |
| `formatItemName` | `(name: string): string` |

#### CSS Custom Properties

| Property          | Type  | Default   | Description                   |
| ----------------- | ----- | --------- | ----------------------------- |
| `--fds-primary`   | color | "#694ED6" | Color of the default ribbon   |
| `--fds-secondary` | color | "#C137A2" | Color of the secondary ribbon |

<!-- /DOC -->
