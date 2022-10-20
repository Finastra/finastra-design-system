# Select

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/select?style=for-the-badge)](https://www.npmjs.com/package/@finastra/select)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/select?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/select')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-select--default)

Selects display a list of choices in a dropdown menu. \
`fds-select` extends [Material web's mwc-select-base](https://github.com/material-components/material-web/tree/master/packages/select).

## Usage

### Import

```
npm i @finastra/select
```

```ts
import '@finastra/select';
...
<fds-select>
    <fds-list-item value="1">Item 1</fds-list-item>
    <fds-list-item value="2">Item 2</fds-list-item>
    <fds-list-item value="3">Item 3</fds-list-item>
</fds-select>
```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/select/dist/fds-select.js"></script>

<fds-select>
    <fds-list-item value="1">Item 1</fds-list-item>
    <fds-list-item value="2">Item 2</fds-list-item>
    <fds-list-item value="3">Item 3</fds-list-item>
</fds-select>
```

