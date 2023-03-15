# Menu

`fds-menu` component is `mwc-menu` with a different tag to homogenize with FDS library.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/menu?style=for-the-badge)](https://www.npmjs.com/package/@finastra/menu)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/menu?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/menu')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-menu--default)

## Usage

The full document can be found [here](https://github.com/material-components/material-web/tree/mwc/packages/menu)

### Import

```
npm i @finastra/menu
npm i @finastra/list;
npm i @finastra/button;

```

```ts
import '@finastra/menu';
import '@finastra/button';
import '@finastra/list';

...
<div style="position: relative;">
    <fds-button id="basicButton" raised label="Open Basic Menu"></fds-button>
    <fds-menu id="basicMenu">
        <fds-list-item>one</fds-list-item>
        <fds-list-item>two</fds-list-item>
        <fds-list-item disabled><div>four</div></fds-list-item>
        <li divider></li>
        <fds-list-item>five</fds-list-item>
    </fds-menu>
</div>

<script>
  const menu = document.getElementById('basicMenu');
  const button = document.getElementById('basicButton');

  // anchor must share a parent with menu that is `position: relative`
  menu.anchor = button;
  button.addEventListener('click', function() {
    menu.open = !menu.open;
  });
</script>

```

### API

<!-- DOC -->

#### Properties

| Property              | Attribute             | Modifiers | Type                                                                                                                         | Default                | Description                                                                                                                                                                                                                                         |
| --------------------- | --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `absolute`            | `absolute`            |           | `boolean`                                                                                                                    | false                  | Makes the menu's position absolute which will be relative to whichever ancestor has position:relative. Setting x and y will modify the menu's left and top. Setting anchor will attempt to position the menu to the anchor.                         |
| `activatable`         | `activatable`         |           | `boolean`                                                                                                                    | false                  | Proxies to mwc-list's activatable property.                                                                                                                                                                                                         |
| `anchor`              | `anchor`              |           | `HTMLElement \| null`                                                                                                        | null                   | Determines from which element the floating menu should calculate sizing and position offsets. In the default case, both mwc-menu and the anchor should share a parent with position:relative. Changing anchor typically requires absolute or fixed. |
| `corner`              | `corner`              |           | `"TOP_LEFT" \| "TOP_RIGHT" \| "BOTTOM_LEFT" \| "BOTTOM_RIGHT" \| "TOP_START" \| "TOP_END" \| "BOTTOM_START" \| "BOTTOM_END"` | "TOP_START"            | Corner of the anchor from which the menu should position itself.                                                                                                                                                                                    |
| `defaultFocus`        | `defaultFocus`        |           | `"NONE" \| "LIST_ROOT" \| "FIRST_ITEM" \| "LAST_ITEM"`                                                                       | "LIST_ROOT"            | Item to focus upon menu open.                                                                                                                                                                                                                       |
| `fixed`               | `fixed`               |           | `boolean`                                                                                                                    | false                  | Makes the menu's position fixed which will be relative to the window. Setting x and y will modify the menu's left and top. Setting anchor will attempt to position the menu to the anchor's immediate position before opening.                      |
| `forceGroupSelection` | `forceGroupSelection` |           | `boolean`                                                                                                                    | false                  | Forces a menu group to have a selected item by preventing deselection of menu items in menu groups via user interaction.                                                                                                                            |
| `fullwidth`           | `fullwidth`           |           | `boolean`                                                                                                                    | false                  | Sets surface width to 100%.                                                                                                                                                                                                                         |
| `index`               |                       | readonly  | `MWCListIndex`                                                                                                               |                        |                                                                                                                                                                                                                                                     |
| `innerAriaLabel`      | `innerAriaLabel`      |           | `string \| null`                                                                                                             | null                   | Proxies to mwc-list's innerAriaLabel property.                                                                                                                                                                                                      |
| `innerRole`           | `innerRole`           |           | `"menu" \| "listbox"`                                                                                                        | "menu"                 | Proxies to mwc-list's innerRole property.                                                                                                                                                                                                           |
| `items`               | `items`               |           | `ListItemBase[]`                                                                                                             | "[]"                   | Proxies to mwc-list's index property.                                                                                                                                                                                                               |
| `mdcRoot`             |                       |           | `MenuSurface`                                                                                                                |                        | Root element for MDC Foundation usage.<br /><br />Define in your component with the `@query` decorator                                                                                                                                              |
| `menuCorner`          | `menuCorner`          |           | `MenuCorner`                                                                                                                 | "START"                | Horizontal corner of the menu from which the menu should position itself. NOTE: Only horizontal corners are supported.                                                                                                                              |
| `multi`               | `multi`               |           | `boolean`                                                                                                                    | false                  | Proxies to mwc-list's multi property.                                                                                                                                                                                                               |
| `open`                | `open`                |           | `boolean`                                                                                                                    | false                  | Whether the menu should open and display.                                                                                                                                                                                                           |
| `quick`               | `quick`               |           | `boolean`                                                                                                                    | false                  | Whether to skip the opening animation.                                                                                                                                                                                                              |
| `selected`            | `selected`            |           | `ListItemBase \| ListItemBase[] \| null`                                                                                     | null                   | Proxies to mwc-list's selected property.                                                                                                                                                                                                            |
| `slotElement`         |                       |           | `HTMLSlotElement \| null`                                                                                                    |                        |                                                                                                                                                                                                                                                     |
| `stayOpenOnBodyClick` | `stayOpenOnBodyClick` |           | `boolean`                                                                                                                    | false                  | Prevents the menu from closing when clicking outside the menu.                                                                                                                                                                                      |
| `styles`              |                       |           | `CSSResult[]`                                                                                                                | ["baseStyle","styles"] |                                                                                                                                                                                                                                                     |
| `wrapFocus`           | `wrapFocus`           |           | `boolean`                                                                                                                    | false                  | Proxies to mwc-list's wrapFocus property.                                                                                                                                                                                                           |
| `x`                   | `x`                   |           | `number \| null`                                                                                                             | null                   | Sets horizontal position when absolute. When given an anchor, sets horizontal position relative to anchor at given corner. Requires y not to be null.                                                                                               |
| `y`                   | `y`                   |           | `number \| null`                                                                                                             | null                   | Sets vertical position when absolute. When given an anchor, sets vertical position relative to anchor at given corner. Requires x not to be null.                                                                                                   |

#### Methods

| Method                | Type                                         |
| --------------------- | -------------------------------------------- |
| `click`               | `(): void`                                   |
| `close`               | `(): void`                                   |
| `focusItemAtIndex`    | `(index: number): void`                      |
| `getFocusedItemIndex` | `(): number`                                 |
| `layout`              | `(updateItems?: boolean \| undefined): void` |
| `select`              | `(index: MWCListIndex): void`                |
| `show`                | `(): void`                                   |

#### Events

| Event           | Type             |
| --------------- | ---------------- |
| `action`        | `ActionDetail`   |
| `closed`        |                  |
| `items-updated` |                  |
| `opened`        |                  |
| `selected`      | `SelectedDetail` |

#### CSS Custom Properties

| Property                 | Default              | Description                                   |
| ------------------------ | -------------------- | --------------------------------------------- |
| `--fds-menu-item-height` | "48px"               | Height of single-line list-items in the menu. |
| `--fds-menu-max-height`  | "calc(100vh - 32px)" | Menu max-height.                              |
| `--fds-menu-max-width`   | "calc(100vw - 32px)" | Menu max-width.                               |
| `--fds-menu-min-width`   | "112px"              | Menu min-width.                               |
| `--fds-menu-z-index`     | 8                    | Z-index of the popup menu surface.            |

<!-- /DOC -->
