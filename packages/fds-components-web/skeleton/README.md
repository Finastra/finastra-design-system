# Skeleton

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/skeleton?style=for-the-badge)](https://www.npmjs.com/package/@finastra/skeleton)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/skeleton?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/skeleton')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-skeleton--default)
Skeleton componet used to indicate content and ui loading that will appear after its loaded. It helps to decrease perceived duration time

## Usage

### Import

```
npm i @finastra/skeleton
```

```ts
import '@finastra/skeleton';
...
<fds-skeleton></fds-skeleton>
```

### API

<!-- DOC -->

#### Properties

| Property   | Attribute | Type                               | Default | Description                 |
| ---------- | --------- | ---------------------------------- | ------- | --------------------------- |
| `height`   | `height`  | `string`                           |         | Height of the skeleton      |
| `override` |           |                                    |         |                             |
| `size`     | `size`    | `h1\|h2\|h3\|h4\|h5\|h6\|small\|p` | "p"     | Define the size of skeleton |
| `type`     | `type`    | `circle\|text\|rectangle`          | "text"  | Define the type of skeleton |
| `width`    | `width`   | `string`                           |         | Width of the skeleton       |

#### Methods

| Method         | Type                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `updateHeight` | `(): void`                                                                                      |
| `updateWidth`  | `(): void`                                                                                      |
| `willUpdate`   | `(_changedProperties: Map<string \| number \| symbol, unknown> \| PropertyValueMap<any>): void` |

#### CSS Custom Properties

| Property                           | Default                        | Description                       |
| ---------------------------------- | ------------------------------ | --------------------------------- |
| `--fds-skeleton-background`        | "var(--fds-surface-selected)"  | Background color of the skeleton. |
| `--fds-skeleton-height`            | "162px"                        | Width of the skeleton             |
| `--fds-skeleton-placeholder-color` | "var(--fds-on-surface-medium)" | Color of placeholder.             |
| `--fds-skeleton-width`             | "162px"                        | Height of the skeleton            |

<!-- /DOC -->
