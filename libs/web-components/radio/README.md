# Radio

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/radio?style=for-the-badge)](https://www.npmjs.com/package/@finastra/radio)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/radio?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/radio')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-radio--default)

`fds-radio` extend [Material web's mwc-radio-base](https://github.com/material-components/material-web/tree/master/packages/radio)

## Usage

### Import

```
npm i @finastra/radio
```

```ts
import '@finastra/radio';
...
<fds-radio checked name="Gaga" value="Freddie"></fds-radio>
<fds-radio checked name="Gaga" value="Mercury"></fds-radio>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/radio/dist/fds-radio.js"></script>

<fds-radio checked name="Gaga" value="Freddie"></fds-radio>
<fds-radio checked name="Gaga" value="Mercury"></fds-radio>
```

