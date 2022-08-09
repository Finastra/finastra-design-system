# Button Toggle

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button-toggle?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button-toggle)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button-toggle?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button-toggle')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-toggle-button-toggle--default)

Button toggles are on/off toggles with the appearance of a button.

We created two types of button toggle, a default usable with the `<fds-button-toggle>` selector and a filter usable with `<fds-button-toggle-filter>` selector.

## Usage

### Import

```
npm i @finastra/button-toggle
```

```ts
import '@finastra/button-toggle';
...
<fds-button-toggle label="toggle" icon="camera"></fds-button-toggle>
```

### Pure HTML pages

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@finastra/button-toggle/dist/fds-button-toggle.js"></script>

<fds-button-toggle label="toggle" icon="camera"></fds-button-toggle>

 <fds-button-toggle-filter label="label" icon="event"></fds-button-toggle-filter>
```
