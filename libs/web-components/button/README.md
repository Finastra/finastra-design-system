# Button

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-button--dense)

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
<script type="module" src="https://unpkg.com/@finastra/button@latest/dist/src/contained-button.js?module"></script>
<fds-button label="Contained button"></fds-button>

<script type="module" src="https://unpkg.com/@finastra/button@latest/dist/src/outlined-button.js?module"></script>
<fds-outlined-button label="Outlined button"></fds-outlined-button>

<script type="module" src="https://unpkg.com/@finastra/button@latest/dist/src/text-button.js?module"></script>
<fds-text-button label="Text button"></fds-text-button>
```
