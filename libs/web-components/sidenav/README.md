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

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/sidenav/dist/fds-sidenav.js"></script>

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

