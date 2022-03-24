# AppCard

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/app-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/app-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/app-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/app-card')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-app-card--default)

## Installation

```
npm i @finastra/app-card
```

## API

| Name          | Type           | Default | Description                         |
| ------------- | -------------- | ------- | ----------------------------------- |
| `application` | `Application`* | `{}`    | Application to display in the card. |
| `large`       | `boolean`      | `false` | Make the card bigger.               |
| `extraDense`  | `boolean`      | `false` | Make the card extra small.          |

\* `Application` interface c.f. below:

```ts
export interface Application {
  name: string;
  bannerClass?: string;
  lastModified?: string;
  description?: string;
  author?: string;
  icon?***: string;
  flag?: FLAG_TYPES**;
  tags?: string[];
  bookmarked?: boolean;
}
```

\*\* `FLAG_TYPES` is equivalent to type `"PUBLISHED"|"DRAFT"|"IN_REVIEW"|"COMING_SOON"`

\*\*\* `icon` require a publicly accessible url and the recommended format is 70x70 and 42x42 for the card `extraDense`. Also we recommend adding a background (#FFFFFF) to the logo if it doesn't work for dark and light theme accessibility contrast.

| Do                                               | Don't                                            |
| ------------------------------------------------ | ------------------------------------------------ |
| ![Test Image 4](https://i.imgur.com/AFDwskP.png) | ![Test Image 4](https://i.imgur.com/TGHSH9D.png) |

