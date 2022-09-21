# Card
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/card)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-card-brand--default)

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

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/card/dist/fds-card.js"></script>

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
