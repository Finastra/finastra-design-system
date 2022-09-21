# AppCard

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/app-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/app-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/app-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/app-card')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-card-application--default)


> `FLAG_TYPES` value can be `"PUBLISHED"|"DRAFT"|"IN_REVIEW"|"COMING_SOON"`

> `icon` require a publicly accessible url and the recommended format is 70x70 and 42x42 for the card `extraDense`. Also we recommend adding a background (#FFFFFF) to the logo if it doesn't work for dark and light theme accessibility contrast.

| Do                                               | Don't                                            |
| ------------------------------------------------ | ------------------------------------------------ |
| ![Test Image 4](https://i.imgur.com/AFDwskP.png) | ![Test Image 4](https://i.imgur.com/TGHSH9D.png) |


## Usage

### Import

```
npm i @finastra/app-card
```

```ts
import '@finastra/app-card';
...
<fds-app-card
  name="Business Economics"
  author="Finastra"
  tags='["Account Information", "Api", "Banking"]'
  flag="PUBLISHED"
  icon="https://www.finastra.com/themes/custom/themekit/dist/logo.svg"
  description="Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."
  large>
</fds-app-card>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@finastra/app-card/dist/fds-app-card.js"></script>

<fds-app-card
  name="Business Economics"
  author="Finastra"
  tags='["Account Information", "Api", "Banking"]'
  flag="PUBLISHED"
  icon="https://www.finastra.com/themes/custom/themekit/dist/logo.svg"
  description="Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."
  large>
</fds-app-card>
```
