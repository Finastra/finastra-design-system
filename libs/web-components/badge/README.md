# Badge

Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/badge?style=for-the-badge)](https://www.npmjs.com/package/@finastra/badge)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/badge?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/badge')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-badge--default)

## Usage

### Import

```
npm i @finastra/badge
```

```ts
import '@finastra/badge';
...
<fds-badge value="123">
    <span> Success </span>
</fds-badge>
```

### API

<!-- DOC -->

#### Properties

| Property   | Attribute  | Type                                                              | Default    | Description    |
| ---------- | ---------- | ----------------------------------------------------------------- | ---------- | -------------- |
| `color`    | `color`    | `"primary"\|"secondary"\|"success"\|"error"\|"white"\|"outlined"` | "outlined" | Badge color    |
| `position` | `position` | `"topLeft"\|"topRight"\|"center"`                                 | "center"   | Badge position |
| `type`     | `type`     | `""\|"indicator"`                                                 | ""         | Badge type     |
| `value`    | `value`    | `string`                                                          | ""         | Badge value    |

#### Slots

| Name      | Description          |
| --------- | -------------------- |
| `default` | Content of the badge |

<!-- /DOC -->
