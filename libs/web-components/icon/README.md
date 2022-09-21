# Icon

Icon displays an icon with a chosen name from the [Material Icons](https://fonts.google.com/icons) font, or from any font that supports ligatures.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/icon?style=for-the-badge)](https://www.npmjs.com/package/@finastra/icon)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/icon?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/icon')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-icon--default)

## Usage

### Import

```
npm i @finastra/icon
```

```ts
import '@finastra/icon';
...
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">

<fds-icon>bolt</fds-icon>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">

<script type="module" src="https://unpkg.com/@finastra/icon@latest/dist/src/icon.js?module"></script>

<fds-icon>bolt</fds-icon>
```
