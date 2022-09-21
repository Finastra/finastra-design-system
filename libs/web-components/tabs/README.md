# Tabs

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/tabs?style=for-the-badge)](https://www.npmjs.com/package/@finastra/tabs)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/tabs?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/tabs')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-tabs--default)

## Usage

### Import

```
npm i @finastra/tabs
```

```ts
import '@finastra/tabs';
...
<fds-tab-group>
    <fds-tab-item label="Tab 1">Content tab 1</fds-tab-item>
    <fds-tab-item label="Tab 2">Content tab 2</fds-tab-item>
</fds-tab-group>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/tabs/dist/tabs.js"></script>

<fds-tab-group>
    <fds-tab-item label="Tab 1">Content tab 1</fds-tab-item>
    <fds-tab-item label="Tab 2">Content tab 2</fds-tab-item>
</fds-tab-group>
```
