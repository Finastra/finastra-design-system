# Slider

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/slider?style=for-the-badge)](https://www.npmjs.com/package/@finastra/slider)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/slider?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/slider')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-slider--default)


Sliders allow users to make selections from a range of values.

The `fds-slider`  extends [Material web's mwc-slider](https://github.com/material-components/material-web/tree/master/packages/slider).

## Usage

### Import

```
npm i @finastra/slider
```

```ts
import '@finastra/slider';
...
<fds-slider value="25" min="10" max="50"></fds-slider>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/slider/dist/fds-slider.js"></script>

<fds-slider value="25" min="10" max="50"></fds-slider>
```
