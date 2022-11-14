# Breadcrumb
The Breadcrumb component is a navigational helper. It accepts a list of labels (strings) as an input and dispatches a `selected` event each time the user clicks on a label.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/breadcrumb?style=for-the-badge)](https://www.npmjs.com/package/@finastra/breadcrumb)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/breadcrumb?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/breadcrumb')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-breadcrumb--default)

## Usage

### Import

```
npm i @finastra/breadcrumb
```

```ts
import '@finastra/breadcrumb';
...
<fds-breadcrumb items="['Link 1', 'Link 2']"></fds-breadcrumb>
```


### Documentation
<!-- DOC -->
#### Properties

| Property | Attribute | Type    | Default | Description                |
|----------|-----------|---------|---------|----------------------------|
| `items`  | `items`   | `Array` | []      | A list of items to display |

#### Methods

| Method            | Type                                  |
|-------------------|---------------------------------------|
| `handleItemClick` | `(item: string, index: number): void` |

#### Events

| Event      | Type                                            |
|------------|-------------------------------------------------|
| `selected` | `CustomEvent<{ item: string; index: number; }>` |
<!-- /DOC -->