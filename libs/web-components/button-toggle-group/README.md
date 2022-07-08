# Button Toggle Group

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button-toggle-group?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button-toggle-group)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button-toggle-group?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button-toggle-group')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://master--62216556f4e751003a75d602.chromatic.com/?path=/story/actions-toggle-button-toggle-group--default)


The `<fds-button-toggle-group>` is used to group `<fds-button-toggle>` or `<fds-button-toggle-filter>` items for performing certain actions.

## Usage

### Import

```
npm i @finastra/button-toggle-group
```

```ts
import '@finastra/button-toggle-group';
...
<fds-button-toggle-group style="padding-bottom: 16px">
    <fds-button-toggle icon="accessibility"></fds-button-toggle>
    <fds-button-toggle icon="exit_to_app"></fds-button-toggle>
    <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/button-toggle@latest/dist/src/button-toggle.js?module"></script>
<script type="module" src="https://unpkg.com/@finastra/button-toggle-group@latest/dist/src/button-toggle-group.js?module"></script>

<fds-button-toggle-group style="padding-bottom: 16px">
    <fds-button-toggle icon="accessibility"></fds-button-toggle>
    <fds-button-toggle icon="exit_to_app"></fds-button-toggle>
    <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>
```
