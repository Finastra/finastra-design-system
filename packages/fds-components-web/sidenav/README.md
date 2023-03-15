# Sidenav

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/sidenav?style=for-the-badge)](https://www.npmjs.com/package/@finastra/sidenav)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/sidenav?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/sidenav')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-sidenav--default)

Simple wrapper for [Material's Drawer web component](https://material-components.github.io/material-web/demos/drawer/).

## Usage

### Import

```
npm i @finastra/sidenav
```

```ts
import '@finastra/sidenav';
...
<fds-sidenav type="">
   <div slot="sidenavContent">
    Sidenav content
  </div>
  <div slot="navigation">
    Navigation content
  </div>
  <div slot="appContent">
    App Content
  </div>
</fds-sidenav>
```

### API

<!-- DOC -->

#### Properties

| Property | Attribute | Type                         | Default |
| -------- | --------- | ---------------------------- | ------- |
| `type`   | `type`    | `""\|"dismissible"\|"modal"` | ""      |

#### Methods

| Method                | Type       |
| --------------------- | ---------- |
| `registerEventLister` | `(): void` |

#### Slots

| Name             | Description            |
| ---------------- | ---------------------- |
| `appContent`     | Content of the app     |
| `navigation`     | Navigational elements  |
| `sidenavContent` | Content of the sidenav |

<!-- /DOC -->
