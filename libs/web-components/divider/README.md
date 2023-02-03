# Divider

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/divider?style=for-the-badge)](https://www.npmjs.com/package/@finastra/divider)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/divider?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/divider)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-divider--default-story)

`fds-divider` brings clarity to a layout by grouping and dividing content that exists in close proximity. It can also be used to establish rhythm and hierarchy.

## Usage

### Import

```
npm i @finastra/divider
```

```ts
import '@finastra/divider';
...
<fds-divider inset="both"></fds-divider>
```

### API

<!-- DOC -->

#### Properties

| Property   | Attribute  | Type                                   | Default     | Description                                               |
| ---------- | ---------- | -------------------------------------- | ----------- | --------------------------------------------------------- |
| `inset`    | `inset`    | `"both"\|"left"\|"right"\|"undefined"` | "undefined" | Type of inset                                             |
| `vertical` | `vertical` | `boolean`                              | false       | Displays the divider vertically instead of horizontically |

#### CSS Custom Properties

| Property                     | Type  | Default   | Description                   |
| ---------------------------- | ----- | --------- | ----------------------------- |
| `--fds-divider-inset-margin` | text  | "80px"    | Border radius of the outline. |
| `--fds-primary`              | color | "#694ED6" | TextField color               |

<!-- /DOC -->
