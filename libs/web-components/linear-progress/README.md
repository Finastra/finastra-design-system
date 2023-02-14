# LinearProgress

Progress indicators express an ongoing process.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/linear-progress?style=for-the-badge)](https://www.npmjs.com/package/@finastra/linear-progress)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/linear-progress?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/linear-progress')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-progress-indicator-linear-progress--default)

## Usage

For usage please see [mwc-linear-progress](https://github.com/material-components/material-web/tree/main/packages/linear-progress)

### Import

```
npm i @finastra/linear-progress
```

```ts
import '@finastra/linear-progress';
...
<fds-linear-progress indeterminate></fds-linear-progress>
```

### API

<!-- DOC -->

#### Properties

| Property        | Attribute       | Type          | Default                                                                     | Description                                            |
| --------------- | --------------- | ------------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| `ariaLabel`     |                 | `string`      |                                                                             |                                                        |
| `buffer`        |                 | `number`      |                                                                             |                                                        |
| `closed`        |                 | `boolean`     |                                                                             |                                                        |
| `indeterminate` | `indeterminate` | `boolean`     | false                                                                       | Sets the linear-progress into its indeterminate state. |
| `progress`      | `progress`      | `number`      | "0] - Sets the primary progress bar's value. Value should be between [0, 1" | .                                                      |
| `reverse`       |                 | `boolean`     |                                                                             |                                                        |
| `styles`        |                 | `CSSResult[]` | ["styles"]                                                                  |                                                        |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `close` | `(): void` |
| `open`  | `(): void` |

#### CSS Custom Properties

| Property            | Type  | Default                    | Description                                |
| ------------------- | ----- | -------------------------- | ------------------------------------------ |
| `--fds-primary`     | color | "#694ED6"                  | Sets the color of primary progress bar.    |
| `--primary-lighter` | color | "rgba(105, 78, 214, 0.08)" | Sets the color of the buffer progress bar. |

<!-- /DOC -->
