# CircularProgress

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/circular-progress?style=for-the-badge)](https://www.npmjs.com/package/@finastra/circular-progress)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/circular-progress?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/circular-progress')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-progress-indicator-circular-progress--default)

## Usage

For usage please see [mwc-circular-progress](https://github.com/material-components/material-web/tree/master/packages/circular-progress)

### Import

```
npm i @finastra/circular-progress
```

```ts
import '@finastra/circular-progress';
...
<fds-circular-progress indeterminate="true"></fds-circular-progress>
```


### API
<!-- DOC -->
#### Properties

| Property        | Attribute       | Type      | Default                                          | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `ariaLabel`     |                 | `string`  |                                                  |                                                  |
| `closed`        |                 | `boolean` |                                                  |                                                  |
| `density`       |                 | `number`  |                                                  |                                                  |
| `indeterminate` | `indeterminate` | `boolean` | false                                            | Sets the linear-progress into its indeterminate state. |
| `progress`      | `progress`      | `number`  | "0] - Sets the primary progress bar's value. Value should be between [0, 1" | .                                                |
| `styles`        |                 | `array`   | ["styles"]                                       |                                                  |

#### Methods

| Method  | Type       |
|---------|------------|
| `close` | `(): void` |
| `open`  | `(): void` |

#### CSS Custom Properties

| Property            | Type  | Default                    | Description                                |
|---------------------|-------|----------------------------|--------------------------------------------|
| `--fds-primary`     | color | "#694ED6"                  | Sets the color of primary progress bar.    |
| `--primary-lighter` | color | "rgba(105, 78, 214, 0.08)" | Sets the color of the buffer progress bar. |
<!-- /DOC -->