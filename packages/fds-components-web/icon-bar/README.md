# Icon Bar

The icon bar comprises a series of tabs that each link to a different content area or view.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/icon-bar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/icon-bar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/icon-bar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/icon-bar')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-icon-bar--default)

## Usage

### Import

```
npm i @finastra/icon-bar
```

```ts
import '@finastra/icon-bar';
...
<fds-icon-bar>
  <fds-icon-bar-item data-tippy-content="Home" current icon="home" notification="2"></fds-icon-bar-item>
  <fds-icon-bar-item label="Account" data-tippy-content="Account" icon="credit_card"></fds-icon-bar-item>
  <fds-icon-bar-item label="Calendar" data-tippy-content="Calendar" icon="event" notification="1"></fds-icon-bar-item>
  <fds-icon-bar-item data-tippy-content="Settings" slot="footer" icon="settings"></fds-icon-bar-item>
</fds-icon-bar>
```

### API

<!-- DOC -->

#### Properties

| Property        | Attribute      | Type                      | Default | Description               |
| --------------- | -------------- | ------------------------- | ------- | ------------------------- |
| `ariaHasPopup`  |                | `AriaHasPopup`            |         |                           |
| `ariaLabel`     |                | `string`                  |         |                           |
| `buttonElement` |                | `HTMLElement`             |         |                           |
| `current`       | `current`      | `boolean`                 | false   |                           |
| `dense`         | `dense`        | `boolean`                 | false   | Make the button smaller.  |
| `disabled`      | `disabled`     | `boolean`                 | false   | Make the button disabled. |
| `icon`          | `icon`         | `string`                  | "apps"  | Icon used in the button.  |
| `label`         | `label`        | `string`                  | ""      |                           |
| `notification`  | `notification` | `string`                  | ""      |                           |
| `primary`       | `primary`      | `boolean`                 | false   | Use the primary color.    |
| `ripple`        |                | `Promise<Ripple \| null>` |         |                           |
| `secondary`     | `secondary`    | `boolean`                 | false   | Use the secondary color.  |

#### Methods

| Method              | Type                    |
| ------------------- | ----------------------- |
| `blur`              | `(): void`              |
| `focus`             | `(): void`              |
| `getParent`         | `(): IconBar`           |
| `handleIconClick`   | `(): void`              |
| `renderIconButtons` | `(): TemplateResult<1>` |
| `renderLabel`       | `(): TemplateResult<1>` |
| `showLabels`        | `(): boolean`           |

# fds-icon-bar

#### Properties

| Property           | Attribute          | Type      | Default | Description                             |
| ------------------ | ------------------ | --------- | ------- | --------------------------------------- |
| `hideNotification` | `hideNotification` | `boolean` | false   | Removes the notification on item click. |
| `showLabels`       | `showLabels`       | `boolean` | false   | Show or hide the items labels.          |

#### Methods

| Method                  | Type                    |
| ----------------------- | ----------------------- |
| `deselectOthers`        | `(current: Node): void` |
| `dispatchSelectedEvent` | `(index: any): void`    |
| `getItems`              | `(): Node[]`            |
| `onFooterSlotChanged`   | `(): void`              |
| `renderFooter`          | `(): TemplateResult<1>` |

#### Events

| Event      | Type                           |
| ---------- | ------------------------------ |
| `selected` | `CustomEvent<{ index: any; }>` |

<!-- /DOC -->
