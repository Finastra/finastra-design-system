# Button

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-button-contained--default)

An `<fds-button>` represents an action a user can take. fds-buttons can be clicked or tapped to perform an action or to navigate to another page.

## Usage

### Import

```
npm i @finastra/button
```

```ts
import '@finastra/button';
...
<fds-button label="Contained button"></fds-button>
<fds-outlined-button label="Outlined button"></fds-outlined-button>
<fds-text-button label="Text button"></fds-text-button>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/button/dist/fds-button.js"></script>

<fds-button label="Contained button"></fds-button>

<fds-outlined-button label="Outlined button"></fds-outlined-button>

<fds-text-button label="Text button"></fds-text-button>
```
