# Account Card

Account Card is a use case of card using the [Accounts and Balances](https://developer.fusionfabric.cloud/api/corporate-accounteinfo-me-v1-831cb09d-cc10-4772-8ed5-8a6b72ec8e01/docs#operation/getAccountsForCustomerUser) APIs.

> This component is based on [base-card](./src/base-card.ts). See `fds-card` documentation for more details.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/account-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/account-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/account-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/account-card')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-account-card--default)

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
