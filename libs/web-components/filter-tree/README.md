# FilterTree

The fds-filter-tree provides a tree that could be used to display hierarchy data.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/filter-tree?style=for-the-badge)](https://www.npmjs.com/package/@finastra/filter-tree)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/filter-tree?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/filter-tree')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-filter-tree--default)

## Usage

### Import

```
npm i @finastra/filter-tree
```

```ts
import '@finastra/filter-tree';
...
<fds-filter-tree items=[
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts',
        isSelected: true
      },
      {
        label: 'Customer Management'
      }
    ],
  },
  {
    label: 'Money Movement'
  },
  {
    label: 'Financial Toolbox'
  }
]>
</fds-filter-tree>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script type="module" src="https://unpkg.com/@finastra/filter-tree@latest/dist/src/filter-tree.js?module"></script>

<fds-filter-tree items=[
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts',
        isSelected: true
      },
      {
        label: 'Customer Management'
      }
    ],
  },
  {
    label: 'Money Movement'
  },
  {
    label: 'Financial Toolbox'
  }
]></fds-filter-tree>
```
