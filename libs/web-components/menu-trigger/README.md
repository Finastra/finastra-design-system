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

| Property    | Attribute   | Type      | Default  | Description                                      |
|-------------|-------------|-----------|----------|--------------------------------------------------|
| `icon`      |             | `string`  | "apps"   |                                                  |
| `label`     |             | `string`  | "Launch" |                                                  |
| `on`        | `on`        | `boolean` | false    | Whether the toggle is activated.                 |
| `secondary` | `secondary` | `boolean` | false    | Whether the toggle button should be using secondary. |

#### Methods

| Method   | Type       |
|----------|------------|
| `toggle` | `(): void` |
<!-- /DOC -->