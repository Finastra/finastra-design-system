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
  tags='["Account Information", "API", "Banking"]'
  flag="PUBLISHED"
  icon="https://www.finastra.com/themes/custom/themekit/dist/logo.svg"
  description="Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."
  large>
</fds-app-card>
```

### API

<!-- DOC -->

#### Properties

| Property      | Attribute     | Type      | Default | Description                                                                        |
| ------------- | ------------- | --------- | ------- | ---------------------------------------------------------------------------------- |
| `author`      | `author`      | `string`  | ""      | Application author.                                                                |
| `description` | `description` | `string`  | ""      | Application description.                                                           |
| `disabled`    | `disabled`    | `boolean` | false   | Disabled style of the card.                                                        |
| `extraDense`  | `extraDense`  | `boolean` | false   | Make the card extra small.                                                         |
| `flag`        | `flag`        |           | ""      | Application flag should be `PUBLISHED` \| `DRAFT` \| `IN_REVIEW` \| `COMING_SOON`. |
| `icon`        | `icon`        | `string`  | ""      | Application icon url.                                                              |
| `large`       | `large`       | `boolean` | false   | Make the card bigger.                                                              |
| `name`        | `name`        | `string`  | ""      | Application name.                                                                  |
| `outlined`    | `outlined`    | `boolean` | false   | Change the card style to outlined, default style is elevated.                      |
| `selectable`  | `selectable`  | `boolean` | true    | Change the card style to an action card.                                           |
| `tags`        | `tags`        | `array`   | []      | Application tags.                                                                  |

#### CSS Custom Properties

| Property          | Type  | Default   | Description                                       |
| ----------------- | ----- | --------- | ------------------------------------------------- |
| `--fds-blue`      | color | "#009CBD" | Color of the In Review flag.                      |
| `--fds-gray`      | color | "#C7C8CA" | Color of the Draft flag.                          |
| `--fds-primary`   | color | "#694ED6" | Start color of the gradient for Coming Soon flag. |
| `--fds-secondary` | color | "#C137A2" | End color of the gradient for Coming Soon flag.   |
| `--fds-success`   | color | "#008744" | Color of the Deployed flag.                       |

<!-- /DOC -->
