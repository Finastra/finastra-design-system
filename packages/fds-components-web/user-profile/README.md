# User Profile

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/user-profile?style=for-the-badge)](https://www.npmjs.com/package/@finastra/user-profile)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/user-profile?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/user-profile)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-user-profile--default)

The user profile web component shows detailed information about a user.
It is customizable enough to allow you to add more user information or even actions if needed.

## Usage

### Import

```
npm i @finastra/user-profile
```

```ts
import '@finastra/user-profile';
...
<fds-user-profile userName="Adnen Manai">
    <div slot="userInfo">adnen.manai@finastra.com</div>
    <div slot="actions">
      Actions go here
    </div>
</fds-user-profile>
```

### API

<!-- DOC -->

#### Properties

| Property    | Attribute   | Type      | Default | Description                                                            |
| ----------- | ----------- | --------- | ------- | ---------------------------------------------------------------------- |
| `dense`     | `dense`     | `boolean` | false   | Align the default avatar with user info                                |
| `divider`   |             | `boolean` | true    |                                                                        |
| `shortName` | `shortName` | `string`  | ""      | Use this property to override the initials                             |
| `userName`  | `userName`  | `string`  | ""      | Name of the avatar, used to generate the initials (Displayed on hover) |

#### Slots

| Name       | Description                     |
| ---------- | ------------------------------- |
| `actions`  | Actions that a user can perform |
| `userInfo` | The user info                   |

<!-- /DOC -->
