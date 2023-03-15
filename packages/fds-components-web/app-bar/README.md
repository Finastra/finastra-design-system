# AppBar

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/app-bar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/app-bar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/app-bar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/app-bar)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-app-bar--default)

The app bar contains essential items related to your application. It is used for branding with the logo, title with the app name, navigation and actions.

Menu, navigation, content and actions are slots where you can put customized content based on what your application requires.

We recommend to use global navigation [templates](https://finastra.github.io/finastra-design-system/?path=/story/patterns-global-nav--default) if you need examples.

## Usage

### Import

```
npm i @finastra/app-bar
```

```ts
import '@finastra/app-bar';
...
<fds-app-bar
    appName="Example"
    logo="https://upload.wikimedia.org/wikipedia/fr/2/2f/Finastra.png">
</fds-app-bar>
```

### API

<!-- DOC -->

#### Properties

| Property          | Attribute         | Type      | Default | Description                                  |
| ----------------- | ----------------- | --------- | ------- | -------------------------------------------- |
| `appName`         | `appName`         | `string`  | ""      | Application's name                           |
| `logoRedirectUri` | `logoRedirectUri` | `string`  | ""      | Set the logo redirect Uri                    |
| `prominent`       | `prominent`       | `boolean` | false   | Extend the app bar                           |
| `transparent`     | `transparent`     | `boolean` | false   | Give a transparent background to the app bar |

#### Events

| Event              | Description                          |
| ------------------ | ------------------------------------ |
| `MDCTopAppBar:nav` | Fired when clicking on burger button |

#### Slots

| Name             | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `actions`        | Slot to add content in the right side of the app bar                                                               |
| `content`        | Slot to add content in the center of the app bar                                                                   |
| `navigation`     | Slot to add content in the left of the app bar, just after the app name or in the second line in prominent app bar |
| `navigationIcon` | Slot to add a navigation icon (e.g. hamburger menu)                                                                |

#### CSS Custom Properties

| Property     | Description                                    |
| ------------ | ---------------------------------------------- |
| `--fds-logo` | String representing an image encoded in base64 |

<!-- /DOC -->
