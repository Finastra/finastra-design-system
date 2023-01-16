# Card

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/card)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-cards-card--default)

This component is based on [base-card](./src/base-card.ts), it follow the principals of [Material Design Cards](https://m3.material.io/components/cards/guidelines).
This component can be used alone, it also provids a number of card sections including:

- fds-card-header
- fds-card-title
- fds-card-subtitle
- fds-card-content
- fds-card-actions
- fds-card-footer

## Usage

### Import

```
npm i @finastra/card
```

```ts
import '@finastra/card';
...

<style>
  fds-card {
    max-width: 400px;
  }

  .example-header-image {
    background-image: url('https://cdn2.thecatapi.com/images/zvfTwDY54.jpg');
    background-size: cover;
  }
</style>

<fds-card>
  <fds-card-header>
    <div class="example-header-image"></div>
    <div class="card-header-text">
      <fds-card-title>Header</fds-card-title>
      <fds-card-subtitle>Subhead</fds-card-subtitle>
    </div>
  </fds-card-header>
  <img src="https://cdn2.thecatapi.com/images/jb.jpg">
  <fds-card-content>
    Add your card content here
  </fds-card-content>
  <fds-card-actions>
    <fds-text-button label="Button"></fds-text-button>
    <fds-text-button label="Button"></fds-text-button>
  </fds-card-actions>
</fds-card>
```

### API

<!-- DOC -->

#### Properties

| Property     | Attribute    | Type      | Default | Description                                                   |
| ------------ | ------------ | --------- | ------- | ------------------------------------------------------------- |
| `disabled`   | `disabled`   | `boolean` | false   | Disabled style of the card.                                   |
| `outlined`   | `outlined`   | `boolean` | false   | Change the card style to outlined, default style is elevated. |
| `selectable` | `selectable` | `boolean` | false   | Change the card style to an action card.                      |

# fds-card-actions

#### Properties

| Property   | Attribute  | Type       | Default |
| ---------- | ---------- | ---------- | ------- |
| `align`    | `align`    | `Position` | "start" |
| `disabled` | `disabled` | `boolean`  | false   |

# fds-card-content

#### Properties

| Property   | Attribute  | Type      | Default |
| ---------- | ---------- | --------- | ------- |
| `disabled` | `disabled` | `boolean` | false   |

# fds-card-footer

#### Properties

| Property   | Attribute  | Type      | Default |
| ---------- | ---------- | --------- | ------- |
| `disabled` | `disabled` | `boolean` | false   |

# fds-card-header

#### Properties

| Property   | Attribute  | Type      | Default |
| ---------- | ---------- | --------- | ------- |
| `disabled` | `disabled` | `boolean` | false   |

# fds-card-subtitle

#### Properties

| Property   | Attribute  | Type      | Default |
| ---------- | ---------- | --------- | ------- |
| `disabled` | `disabled` | `boolean` | false   |

# fds-card-title

#### Properties

| Property   | Attribute  | Type      | Default |
| ---------- | ---------- | --------- | ------- |
| `disabled` | `disabled` | `boolean` | false   |

# fds-card

#### Properties

| Property     | Attribute    | Type      | Default | Description                                                   |
| ------------ | ------------ | --------- | ------- | ------------------------------------------------------------- |
| `disabled`   | `disabled`   | `boolean` | false   | Disabled style of the card.                                   |
| `outlined`   | `outlined`   | `boolean` | false   | Change the card style to outlined, default style is elevated. |
| `selectable` | `selectable` | `boolean` | false   | Change the card style to an action card.                      |

#### Methods

| Method              | Type                    |
| ------------------- | ----------------------- |
| `renderCardContent` | `(): TemplateResult<1>` |

#### Slots

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Slot to add content to the card, see the documentation for more details. |

<!-- /DOC -->
