# Icon

Icon displays an icon with a chosen name from the [Material Icons](https://fonts.google.com/icons) font, or from any font that supports ligatures.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/icon?style=for-the-badge)](https://www.npmjs.com/package/@finastra/icon)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/icon?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/icon')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-icon--default)

## Usage

### Import

```
npm i @finastra/icon
```

```ts
import '@finastra/icon';
...
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">

<fds-icon>bolt</fds-icon>
```

### API

<!-- DOC -->

#### Properties

| Property      | Attribute     | Type          | Default    | Description                    |
| ------------- | ------------- | ------------- | ---------- | ------------------------------ |
| `dense`       | `dense`       | `boolean`     | false      | Dense size of the icon `18px`. |
| `disabled`    | `disabled`    | `boolean`     | false      |                                |
| `error`       | `error`       | `boolean`     | false      | Use error color.               |
| `extra_large` | `extra_large` | `boolean`     | false      | Dense size of the icon `48px`. |
| `gradient`    | `gradient`    | `boolean`     | false      | Use gradient color.            |
| `info`        | `info`        | `boolean`     | false      |                                |
| `large`       | `large`       | `boolean`     | false      | Large size of the icon `36px`. |
| `primary`     | `primary`     | `boolean`     | false      | Use primary color.             |
| `secondary`   | `secondary`   | `boolean`     | false      | Use secondary color.           |
| `styles`      |               | `CSSResult[]` | ["styles"] |                                |
| `success`     | `success`     | `boolean`     | false      | Use success color.             |
| `warning`     | `warning`     | `boolean`     | false      |                                |

#### Slots

| Name      | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `default` | The name of the icon to display (e.g. credit_card). See Material Icons for an index of all available icons. |

#### CSS Custom Properties

| Property          | Default | Description                       |
| ----------------- | ------- | --------------------------------- |
| `--fds-icon-size` | "24px"  | Size of the icon, default `24px`. |

<!-- /DOC -->
