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

\*\*\* `icon` require an publicly accessible url and the recommanded format is 70x70 and 42x42 for the card `extraDense`. Also we recommand adding a background (#FFFFFF) to the logo if it doesn't work for dark and light theme accessibility contrast.

<div style="display:flex; flex-direction:row;justify-content: space-around;">
  <div>
    <img src="https://i.imgur.com/AFDwskP.png" alt="Girl in a jacket" width="250" height="300px">
    <div style="width:100%;height:8px;background-color:#008744;"></div>
    <p style="color:#008744;">Do</p>
  </div>
  <div>
    <img src="https://i.imgur.com/TGHSH9D.png" alt="Girl in a jacket" width="250" height="300px">
    <div style="width:100%;height:8px;background-color:#D60040;"></div>
    <p style="color:#D60040;">Don't</p>
  </div>
</div>
