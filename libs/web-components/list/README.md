# List

`fds-list` extends Material Web `mwc-list-base`, the package export three list items that can be used inside the `fds-list`:
- fds-list-item
- fds-check-list-item
- fds-radio-list-item


[![See it on NPM!](https://img.shields.io/npm/v/@finastra/list?style=for-the-badge)](https://www.npmjs.com/package/@finastra/list)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/list?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/list')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-list--default)

## Usage

### APIs

See [Material List](https://github.com/material-components/material-web/tree/mwc/packages/list#api) for mor details.

### Import

```
npm i @finastra/list
```

```ts
import '@finastra/list';
...
<fds-list>
  <fds-list-item>Item 1</fds-list-item>
  <fds-list-item>Item 2</fds-list-item>
</fds-list>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/list@latest/dist/src/index.js?module"></script>

<fds-list>
  <fds-list-item>Item 1</fds-list-item>
  <fds-list-item>Item 2</fds-list-item>
</fds-list>
```
