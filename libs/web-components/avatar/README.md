# Avatar

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/avatar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/avatar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/avatar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/avatar)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/graphic-elements-avatar--default)

This component is an IT representation of a user. It can be used to figures users or to enable an access to a [user profile menu](https://github.com/Finastra/finastra-design-system/blob/master/libs/web-components/user-profile/README.md).


## Usage

### Import

```
npm i @finastra/avatar
```

```ts
import '@finastra/avatar';
...
<fds-avatar large name="Adnen Manai"></fds-avatar>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@finastra/avatar/dist/fds-avatar.js"></script>

<fds-avatar large name="Adnen Manai"></fds-avatar>
```
