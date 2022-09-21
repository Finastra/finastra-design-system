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

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script type="module" src="https://unpkg.com/@finastra/icon-bar@latest/dist/src/icon-bar.js?module"></script>

<fds-icon-bar>
  <fds-icon-bar-item data-tippy-content="Home" current icon="home" notification="2"></fds-icon-bar-item>
  <fds-icon-bar-item label="Account" data-tippy-content="Account" icon="credit_card"></fds-icon-bar-item>
  <fds-icon-bar-item label="Calendar" data-tippy-content="Calendar" icon="event" notification="1"></fds-icon-bar-item>
  <fds-icon-bar-item data-tippy-content="Settings" slot="footer" icon="settings"></fds-icon-bar-item>
</fds-icon-bar>
```
