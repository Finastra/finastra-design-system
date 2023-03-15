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

### API

<!-- DOC -->

#### Properties

| Property | Attribute | Type         | Default | Description    |
| -------- | --------- | ------------ | ------- | -------------- |
| `items`  | `items`   | `TreeNode[]` | []      | List of items. |

#### Methods

| Method                         | Type                                                                                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `checkDescendants`             | `(item: TreeNode, indexInTreeNode: any): void`                                                                         |
| `checkIndeterminate`           | `(nodeEl: HTMLElement): void`                                                                                          |
| `descendantsAllSelected`       | `(node: FlatTreeNode): boolean`                                                                                        |
| `descendantsPartiallySelected` | `(node: FlatTreeNode): boolean`                                                                                        |
| `deselectChildren`             | `(items: TreeNode[]): void`                                                                                            |
| `findIndex`                    | `(node: FlatTreeNode): any`                                                                                            |
| `flatTreeTransformer`          | `(items: TreeNode[], level: number \| undefined, flatTreeTransf: FlatTreeNode[]): FlatTreeNode[]`                      |
| `getDescendants`               | `(node: FlatTreeNode): FlatTreeNode[]`                                                                                 |
| `getNodeElementById`           | `(id: string): any`                                                                                                    |
| `getParentNode`                | `(node: FlatTreeNode): FlatTreeNode \| null`                                                                           |
| `haveChildren`                 | `(item: TreeNode): boolean`                                                                                            |
| `init`                         | `(items: TreeNode[]): void`                                                                                            |
| `initSelection`                | `(item: TreeNode, indexInTreeNode: any): void`                                                                         |
| `isSelected`                   | `(node: FlatTreeNode): boolean`                                                                                        |
| `notifyParent`                 | `(node: FlatTreeNode): void`                                                                                           |
| `onExpandClick`                | `(item: TreeNode, index: number, event: any): void`                                                                    |
| `onRequestSelected`            | `(item: TreeNode, index: number, event: any): void`                                                                    |
| `onSelect`                     | `(item: TreeNode, nodeEl: HTMLElement, indexInTreeNode: number, indexInFlatTreeNode: number, eventType: string): void` |
| `renderChildren`               | `(items: TreeNode[]): any`                                                                                             |
| `selectChildren`               | `(items: TreeNode[]): void`                                                                                            |
| `toFlatTreeNode`               | `(item: TreeNode, index: any): FlatTreeNode`                                                                           |

#### Events

| Event               | Type                     |
| ------------------- | ------------------------ |
| `filter-tree-check` | `CustomEvent<TreeState>` |

<!-- /DOC -->
