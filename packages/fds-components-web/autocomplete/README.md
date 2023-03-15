# Autocomplete

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/autocomplete?style=for-the-badge)](https://www.npmjs.com/package/@finastra/autocomplete)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/autocomplete?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/autocomplete)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-autocomplete--default)

The autocomplete is a text input enhanced by a panel of suggested options.

It uses the [fds-search-input](https://finastra.github.io/finastra-design-system/?path=/story/forms-search-input--custom-icon) component, so it inherits all its properties.

## Usage

### Import

```
npm i @finastra/autocomplete
```

```ts
import '@finastra/autocomplete';
...
<fds-autocomplete name="World">
    <fds-list-item value="One">One</fds-list-item>
    <fds-list-item value="Two">Two</fds-list-item>
    <fds-list-item value="Three">Three</fds-list-item>
</fds-autocomplete>
```

### API

<!-- DOC -->

#### Properties

| Property              | Attribute             | Type      | Default |
| --------------------- | --------------------- | --------- | ------- |
| `ariaDescribedBy`     | `aria-describedby`    | `string`  | ""      |
| `ariaLabel`           | `aria-label`          | `string`  | ""      |
| `ariaLabelledBy`      | `aria-labelledby`     | `string`  | ""      |
| `disabled`            | `disabled`            | `boolean` | false   |
| `icon`                | `icon`                | `string`  | ""      |
| `loading`             | `loading`             | `boolean` | false   |
| `minLengthToOpenMenu` | `minLengthToOpenMenu` | `number`  | 0       |
| `placeholder`         | `placeholder`         | `string`  | ""      |
| `required`            | `required`            | `boolean` | false   |
| `showClearButton`     | `showClearButton`     | `boolean` | false   |
| `useInnerFilter`      | `useInnerFilter`      | `boolean` | true    |
| `value`               | `value`               | `string`  | ""      |

#### Methods

| Method  | Type       |
| ------- | ---------- |
| `blur`  | `(): void` |
| `focus` | `(): void` |

#### Events

| Event   | Type                  |
| ------- | --------------------- |
| `blur`  |                       |
| `focus` |                       |
| `input` | `CustomEvent<string>` |

<!-- /DOC -->
