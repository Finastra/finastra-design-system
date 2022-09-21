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

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/user-profile/dist/user-profile.js"></script>

<fds-user-profile userName="Adnen Manai">
    <div slot="userInfo">adnen.manai@finastra.com</div>
    <div slot="actions">
      Actions go here
    </div>
</fds-user-profile>
```

