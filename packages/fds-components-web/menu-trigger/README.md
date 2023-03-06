# MenuTrigger

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/menu-trigger?style=for-the-badge)](https://www.npmjs.com/package/@finastra/menu-trigger)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/menu-trigger?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/menu-trigger)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-menu-trigger--default)

The `<fds-menu-trigger>` is a toggle button used for menu.

## Usage

### Import

```
npm i @finastra/menu-trigger
```

```ts
import '@finastra/menu-trigger';
...
<fds-menu-trigger label="Develop"></fds-menu-trigger>
```

### API

<!-- DOC -->

#### Properties

| Property       | Attribute   | Type      | Default  | Description                                                                                                        |
| -------------- | ----------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `dense`        |             | `boolean` |          | Use the smaller button size                                                                                        |
| `disabled`     |             | `boolean` |          | Is the button disabled or not                                                                                      |
| `fullwidth`    |             | `boolean` |          | Use the full width of its parent                                                                                   |
| `icon`         |             | `string`  | "apps"   | The name of the icon displayed before the label<br />Use trailingIcon to true to display this icon after the label |
| `label`        |             | `string`  | "Launch" | The label displayed inside the button                                                                              |
| `large`        |             | `boolean` |          | Use the larger button size                                                                                         |
| `on`           | `on`        | `boolean` | false    | Whether the toggle is activated.                                                                                   |
| `secondary`    | `secondary` | `boolean` | false    | Whether the toggle button should be using secondary.                                                               |
| `trailingIcon` |             | `boolean` |          | Display the icon after the label instead of before                                                                 |

#### Methods

| Method   | Type       |
| -------- | ---------- |
| `toggle` | `(): void` |

<!-- /DOC -->
