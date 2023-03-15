# IconButton

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/icon-button?style=for-the-badge)](https://www.npmjs.com/package/@finastra/icon-button)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/icon-button?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/icon-button')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-icon-button--default)

## Usage

Icon buttons allow users to take actions, and make choices, with a single tap.

### Import

```
npm i @finastra/icon-button
```

```ts
import '@finastra/icon-button';
...
<fds-icon-button icon="code"></fds-icon-button>
```

### API

<!-- DOC -->

#### Properties

| Property        | Attribute   | Type                      | Default | Description               |
| --------------- | ----------- | ------------------------- | ------- | ------------------------- |
| `ariaHasPopup`  |             | `AriaHasPopup`            |         |                           |
| `ariaLabel`     |             | `string`                  |         |                           |
| `buttonElement` |             | `HTMLElement`             |         |                           |
| `dense`         | `dense`     | `boolean`                 | false   | Make the button smaller.  |
| `disabled`      | `disabled`  | `boolean`                 | false   | Make the button disabled. |
| `icon`          | `icon`      | `string`                  | "code"  | Icon used in the button.  |
| `primary`       | `primary`   | `boolean`                 | false   | Use the primary color.    |
| `ripple`        |             | `Promise<Ripple \| null>` |         |                           |
| `secondary`     | `secondary` | `boolean`                 | false   | Use the secondary color.  |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `blur`  | `(): void` |
| `focus` | `(): void` |

<!-- /DOC -->
