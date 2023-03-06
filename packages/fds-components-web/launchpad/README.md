# Launchpad

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/launchpad?style=for-the-badge)](https://www.npmjs.com/package/@finastra/launchpad)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/launchpad?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/launchpad)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-launchpad--default)

The `<fds-launchpad>` is the menu that is part of the [Global Navigation Patern](https://design.fusionfabric.cloud/patterns/global-navigation?tab=design) that allows a smooth navigation between products. The default pattern just needs `apps` that follow the format returned by the **UX App Discover** [API](https://developer.fusionfabric.cloud/api/ux-app-b2e-v1-5a288578-e832-11ea-adc1-0242ac120002/docs).

You can customize the **Tools** section using `brand-card` to add elements to it (c.f. [storybook](https://finastra.github.io/finastra-design-system/?path=/story/navigation-launchpad--with-tools))

## Usage

### Import

```
npm i @finastra/launchpad
```

```ts
import '@finastra/launchpad';
...
<fds-launchpad apps='[{
    "name": "App",
    "shortName": "App",
    "sso-initiation-urls": {
    "web": "https://app1.com"
    }}]'>
</fds-launchpad>
```

### API

<!-- DOC -->

#### Properties

| Property               | Attribute              | Type      | Default     | Description                                                                             |
| ---------------------- | ---------------------- | --------- | ----------- | --------------------------------------------------------------------------------------- |
| `appNameProperty`      | `appNameProperty`      | `string`  | "name"      | Name of application name property of type string that will be used by the product card. |
| `apps`                 | `apps`                 | `UxApp[]` | []          | List of ux-apps.                                                                        |
| `shortAppNameProperty` | `shortAppNameProperty` | `string`  | "shortName" | Name of the short application name property used by the product card.                   |
| `title`                | `title`                | `string`  | "Apps"      | Title used by the menu trigger.                                                         |

#### Events

| Event        | Type                           |
| ------------ | ------------------------------ |
| `launchpage` |                                |
| `selected`   | `CustomEvent<{ app: UxApp; }>` |

<!-- /DOC -->
