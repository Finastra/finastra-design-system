# Avatar

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/avatar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/avatar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/avatar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/avatar)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/graphic-elements-avatar--default)

This component is an IT representation of a user. It can be used to figures users or to enable an access to a [user profile menu](https://github.com/Finastra/finastra-design-system/blob/main/packages/fds-components-web/user-profile/README.md).

## Usage

### Import

```
npm i @finastra/avatar
```

```ts
import '@finastra/avatar';
...
<fds-avatar large name="Adnen Manai"></fds-avatar>
```

### API

<!-- DOC -->

#### Properties

| Property    | Attribute   | Type      | Default | Description                                                            |
| ----------- | ----------- | --------- | ------- | ---------------------------------------------------------------------- |
| `dense`     | `dense`     | `boolean` | false   | Make the avatar smaller                                                |
| `large`     | `large`     | `boolean` | false   | Make the avatar bigger                                                 |
| `name`      | `name`      | `string`  | ""      | Name of the avatar, used to generate the initials (Displayed on hover) |
| `primary`   | `primary`   | `boolean` | false   | Use theme's primary color as background                                |
| `secondary` | `secondary` | `boolean` | false   | Use theme's secondary color as background                              |
| `shortName` | `shortName` | `string`  | ""      | Use this property to override the initials                             |

#### Methods

| Method               | Type                                       |
| -------------------- | ------------------------------------------ |
| `transformName`      | `(fullName: string, dense?: any): string`  |
| `transformShortName` | `(shortName: string, dense?: any): string` |

#### CSS Custom Properties

| Property                 | Type  | Default   | Description                        |
| ------------------------ | ----- | --------- | ---------------------------------- |
| `--fds-avatar-font-size` |       | "16px"    | Font size of the avatar            |
| `--fds-avatar-size`      |       | "48px"    | Size of the avatar                 |
| `--fds-primary`          | color | "#694ED6" | Color of the start of the gradient |
| `--fds-secondary`        | color | "#C137A2" | Color of the end of the gradient   |

<!-- /DOC -->
