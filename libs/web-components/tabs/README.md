# Tabs

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/tabs?style=for-the-badge)](https://www.npmjs.com/package/@finastra/tabs)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/tabs?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/tabs')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-tabs--default)

## Usage

### Import

```
npm i @finastra/tabs
```

```ts
import '@finastra/tabs';
...
<fds-tab-group>
    <fds-tab-item label="Tab 1">Content tab 1</fds-tab-item>
    <fds-tab-item label="Tab 2">Content tab 2</fds-tab-item>
</fds-tab-group>
```

### API

<!-- DOC -->

#### Properties

| Property            | Attribute           | Type      | Default | Description                                                                       |
| ------------------- | ------------------- | --------- | ------- | --------------------------------------------------------------------------------- |
| `headerDisplayType` | `headerDisplayType` | `string`  | ""      | Display type for tab button: Accepts one of values : `classic \| segmented \| ''` |
| `headerPosition`    | `headerPosition`    | `string`  | "start" | Position of header. Accepts one of values : `start \| center \| end`              |
| `override`          |                     |           |         |                                                                                   |
| `selectedIndex`     | `selectedIndex`     | `number`  | 0       | Index of tab that is active.                                                      |
| `separator`         | `separator`         | `boolean` | false   | Add dividers between tabs                                                         |

#### Methods

| Method             | Type       |
| ------------------ | ---------- |
| `observeChildList` | `(): void` |
| `updateTabInfo`    | `(): void` |

#### Events

| Event                 | Type                              |
| --------------------- | --------------------------------- |
| `selectedIndexChange` | `CustomEvent<{ index: number; }>` |

# fds-tab-item

#### Properties

| Property | Attribute | Type     | Default |
| -------- | --------- | -------- | ------- |
| `label`  | `label`   | `string` | ""      |

<!-- /DOC -->
