# Card
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/card)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-card--default-story)

This component is a clone from https://github.com/material-components/material-components-web-components/tree/mwc-card/packages/card.


## Usage

### Import

```
npm i @finastra/card
```

```ts
import '@finastra/card';
...
<fds-card fullBleed>
    <div slot="primary-action">
        Visit ten places on our planet that are undergoing the biggest changes today.
    </div>
</fds-card>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/card@latest/dist/src/card.js?module"></script>

<fds-card fullBleed>
    <div slot="primary-action">
        Visit ten places on our planet that are undergoing the biggest changes today.
    </div>
</fds-card>
```
