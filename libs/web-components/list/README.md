# List

`fds-list` extends Material Web `mwc-list-base`, the package export three list items that can be used inside the `fds-list`:

- fds-list-item
- fds-check-list-item
- fds-radio-list-item

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/list?style=for-the-badge)](https://www.npmjs.com/package/@finastra/list)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/list?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/list')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-list--default)

## Usage

### APIs

See [Material List](https://github.com/material-components/material-web/tree/mwc/packages/list#api) for mor details.

### Import

```
npm i @finastra/list
```

```ts
import '@finastra/list';
...
<fds-list>
  <fds-list-item>Item 1</fds-list-item>
  <fds-list-item>Item 2</fds-list-item>
</fds-list>
```

### API

<!-- DOC -->

#### Properties

| Property           | Modifiers | Type                      | Default                   |
| ------------------ | --------- | ------------------------- | ------------------------- |
| `activated`        |           | `boolean`                 |                           |
| `disabled`         |           | `boolean`                 |                           |
| `graphic`          |           | `GraphicType`             |                           |
| `group`            |           | `string \| null`          |                           |
| `hasMeta`          |           | `boolean`                 |                           |
| `left`             |           | `boolean`                 |                           |
| `multipleGraphics` |           | `boolean`                 |                           |
| `noninteractive`   |           | `boolean`                 |                           |
| `ripple`           |           | `Promise<Ripple \| null>` |                           |
| `selected`         |           | `boolean`                 |                           |
| `styles`           |           | `CSSResult[]`             | ["styles","controlStyle"] |
| `tabindex`         |           | `number`                  |                           |
| `text`             | readonly  | `string`                  |                           |
| `twoline`          |           | `boolean`                 |                           |
| `value`            |           | `string`                  |                           |

#### Events

| Event                | Type                    |
| -------------------- | ----------------------- |
| `list-item-rendered` |                         |
| `request-selected`   | `RequestSelectedDetail` |

# fds-list-item

#### Properties

| Property           | Modifiers | Type                      | Default    |
| ------------------ | --------- | ------------------------- | ---------- |
| `activated`        |           | `boolean`                 |            |
| `disabled`         |           | `boolean`                 |            |
| `graphic`          |           | `GraphicType`             |            |
| `group`            |           | `string \| null`          |            |
| `hasMeta`          |           | `boolean`                 |            |
| `multipleGraphics` |           | `boolean`                 |            |
| `noninteractive`   |           | `boolean`                 |            |
| `ripple`           |           | `Promise<Ripple \| null>` |            |
| `selected`         |           | `boolean`                 |            |
| `styles`           |           | `CSSResult[]`             | ["styles"] |
| `tabindex`         |           | `number`                  |            |
| `text`             | readonly  | `string`                  |            |
| `twoline`          |           | `boolean`                 |            |
| `value`            |           | `string`                  |            |

#### Events

| Event                | Type                    |
| -------------------- | ----------------------- |
| `list-item-rendered` |                         |
| `request-selected`   | `RequestSelectedDetail` |

# fds-list

#### Properties

| Property          | Attribute        | Modifiers | Type                                                        | Default    | Description                                                                             |
| ----------------- | ---------------- | --------- | ----------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `activatable`     | `activatable`    |           | `boolean`                                                   | false      | Sets activated attribute on selected items which provides a focus-persistent highlight. |
| `debouncedLayout` |                  |           | `(updateItems?: boolean \| undefined) => void \| undefined` |            |                                                                                         |
| `emptyMessage`    |                  |           | `string \| undefined`                                       |            |                                                                                         |
| `index`           |                  | readonly  | `MWCListIndex`                                              |            |                                                                                         |
| `innerAriaLabel`  |                  |           | `string \| null`                                            |            |                                                                                         |
| `innerRole`       |                  |           | `string \| null`                                            |            |                                                                                         |
| `itemRoles`       |                  |           | `string \| null`                                            |            |                                                                                         |
| `items`           |                  | readonly  | `ListItemBase[]`                                            |            |                                                                                         |
| `itemsReady`      |                  |           | `Promise<never[]>`                                          |            |                                                                                         |
| `layout`          |                  |           | `(updateItems?: boolean \| undefined) => void`              |            |                                                                                         |
| `multi`           | `multi`          |           | `boolean`                                                   | false      | When true, enables selection of multiple items.                                         |
| `noninteractive`  | `noninteractive` |           | `boolean`                                                   | false      | Disables focus and pointer events for the list item.                                    |
| `rootTabbable`    |                  |           | `boolean`                                                   |            |                                                                                         |
| `selected`        |                  | readonly  | `ListItemBase \| ListItemBase[] \| null`                    |            |                                                                                         |
| `styles`          |                  |           | `CSSResult[]`                                               | ["styles"] |                                                                                         |
| `wrapFocus`       |                  |           | `boolean`                                                   |            |                                                                                         |

#### Methods

| Method                | Type                                                  |
| --------------------- | ----------------------------------------------------- |
| `blur`                | `(): void`                                            |
| `click`               | `(): void`                                            |
| `focus`               | `(): void`                                            |
| `focusItemAtIndex`    | `(index: number): void`                               |
| `getFocusedItemIndex` | `(): number`                                          |
| `layout`              | `(updateItems?: boolean \| undefined): void`          |
| `renderPlaceholder`   | `(): TemplateResult<1> \| null`                       |
| `select`              | `(index: MWCListIndex): void`                         |
| `toggle`              | `(index: number, force?: boolean \| undefined): void` |

#### Events

| Event           | Type             |
| --------------- | ---------------- |
| `action`        | `ActionDetail`   |
| `items-updated` |                  |
| `selected`      | `SelectedDetail` |

#### Slots

| Name      | Description                                            |
| --------- | ------------------------------------------------------ |
| `default` | Content to display in the lists internal <ul> element. |

#### CSS Custom Properties

| Property          | Type  | Default   | Description               |
| ----------------- | ----- | --------- | ------------------------- |
| `--fds-primary`   | color | "#694ED6" | Color of the select item. |
| `--fds-secondary` | color | "#C137A2" | Color of the controls.    |

# fds-radio-list-item

#### Properties

| Property           | Modifiers | Type                      | Default                   |
| ------------------ | --------- | ------------------------- | ------------------------- |
| `activated`        |           | `boolean`                 |                           |
| `disabled`         |           | `boolean`                 |                           |
| `graphic`          |           | `GraphicType`             |                           |
| `group`            |           | `string \| null`          |                           |
| `hasMeta`          |           | `boolean`                 |                           |
| `left`             |           | `boolean`                 |                           |
| `multipleGraphics` |           | `boolean`                 |                           |
| `noninteractive`   |           | `boolean`                 |                           |
| `ripple`           |           | `Promise<Ripple \| null>` |                           |
| `selected`         |           | `boolean`                 |                           |
| `styles`           |           | `CSSResult[]`             | ["styles","controlStyle"] |
| `tabindex`         |           | `number`                  |                           |
| `text`             | readonly  | `string`                  |                           |
| `twoline`          |           | `boolean`                 |                           |
| `value`            |           | `string`                  |                           |

#### Events

| Event                | Type                    |
| -------------------- | ----------------------- |
| `list-item-rendered` |                         |
| `request-selected`   | `RequestSelectedDetail` |

<!-- /DOC -->
