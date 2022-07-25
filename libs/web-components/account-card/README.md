# AccountCard

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/account-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/account-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/account-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/account-card')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-account-card--default)

This component is based on [base-card](./src/base-card.ts). See `fds-card` for more details.

## Usage

### Import

```
npm i @finastra/account-card
```

```ts
import '@finastra/account-card';
...
<fds-account-card name="France" balance="50000" currency="EUR" number="DE89 3704 0044 0532 0130 00"></fds-account-card>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/account-card@latest/dist/src/account-card.js?module"></script>

<fds-account-card name="France" balance="50000" currency="EUR" number="DE89 3704 0044 0532 0130 00"></fds-account-card>
```
