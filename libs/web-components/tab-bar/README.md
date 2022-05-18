# TabBar

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/tab-bar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/tab-bar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/tab-bar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/tab-bar')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-tab-bar--default)


Tabs organize content across different screens, data sets, and other interactions.

The `fds-tab-bar` extends [Material web's mwc-tab-bar-base](https://github.com/material-components/material-web/tree/master/packages/tab-bar).

## Usage

### Import

```
npm i @finastra/tab-bar
```

```ts
import '@finastra/tab-bar';
import '@finastra/tab';
...
<fds-tab-bar seperator>
    <fds-tab label="Active"></fds-tab>
    <fds-tab label="Disabled" disabled></fds-tab>
    <fds-tab label="Inactive"></fds-tab>
    <fds-tab label="Inactive"></fds-tab>
</fds-tab-bar>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/tab@latest/dist/src/tab.js?module"></script>
<script type="module" src="https://unpkg.com/@finastra/tab-bar@latest/dist/src/tab-bar.js?module"></script>

<fds-tab-bar seperator>
    <fds-tab label="Active"></fds-tab>
    <fds-tab label="Disabled" disabled></fds-tab>
    <fds-tab label="Inactive"></fds-tab>
    <fds-tab label="Inactive"></fds-tab>
</fds-tab-bar>
```

