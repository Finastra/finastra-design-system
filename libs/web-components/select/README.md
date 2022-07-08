# Select

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/select?style=for-the-badge)](https://www.npmjs.com/package/@finastra/select)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/select?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/select')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://master--62216556f4e751003a75d602.chromatic.com/?path=/story/forms-select--default)

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
    <mwc-list-item value="1">Item 1</mwc-list-item>
    <mwc-list-item value="2">Item 2</mwc-list-item>
    <mwc-list-item value="3">Item 3</mwc-list-item>
</fds-select>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/select@latest/dist/src/select.js?module"></script>

<fds-select>
    <mwc-list-item value="1">Item 1</mwc-list-item>
    <mwc-list-item value="2">Item 2</mwc-list-item>
    <mwc-list-item value="3">Item 3</mwc-list-item>
</fds-select>
```

