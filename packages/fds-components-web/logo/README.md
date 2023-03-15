# Logo

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/logo?style=for-the-badge)](https://www.npmjs.com/package/@finastra/logo)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/logo?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/logo)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/graphic-elements-logo--default)

The `<fds-logo>` component displays an image encoded in Base64 from the `--fds-logo` CSS variable.

## Usage

### Import

```
npm i @finastra/logo
```

```ts
import '@finastra/logo';
...
<fds-logo dense></fds-logo>
```

## CSS API

Here is the list of CSS custom properties, aka CSS Variables:

| Name              | Description                                    |
| ----------------- | ---------------------------------------------- |
| --fds-logo        | String representing an image encoded in base64 |
| --fds-logo-width  | Width of the logo                              |
| --fds-logo-height | Height of the logo                             |

> `--fds-logo` variable expects the following format: `url(BASE64_ENCODED_IMAGE)`

Example:

```
url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjUgMjAwIj4KPHZpZXcgaWQ9ImZsYW1lIiB2aWV3Qm94PSIwIDAgMTYwIDIwMCIvPgo8dmlldyBpZD0ibmFtZSIgdmlld0JveD0iMjQwIDc4IDE4NSAxMjIiIC8+CjxwYXRoIGQ9Ik0zOTQuNSA3OHYyOC44SDQyNXYxNS42aC0zMC41VjE1OGMwIDMuNi4xIDcuMi41IDEwLjMuOCA1LjMgNCAxMC41IDguNCAxMi41IDUuNyAyLjYgOS43IDIuMSAyMS42IDEuN2wtMi45IDE3LjJjLS44LjQtNCAuMy03IC4zLTcgMC0zMy40IDIuNS0zOC44LTI0LjctLjktNC43LS43LTkuNS0uNy0xNi45di0zNS44SDM2MmwuMi0xNS45aDEzLjRWNzh6bS01MS43IDI4Ljd2OTEuNUgzMjR2LTkxLjV6bTAtMjguN3YxNi4zaC0xOVY3OHptLTgzLjYgMTAyLjJoNDguMmwtMTggMThIMjQwVjc4aDE5LjJ6Ii8+CjxwYXRoIGZpbGw9IiMwMGU4ZmYiIGQ9Ik00MCAxMjBsMjAtNjBsOTAgOTBsLTMwIDUwbC00MC00MGgtMjAiLz4KPHBhdGggZmlsbD0iIzI4MzE5OCIgZD0iTTgwIDE2MHYtODBsNDAtNDB2ODBNMCAxNjBsNDAgNDBsMjAtNDBsLTIwLTQwaC0yMCIvPgo8cGF0aCBmaWxsPSIjMzI0ZmZmIiBkPSJNNDAgMTIwdi04MGw0MC00MHY4ME0xMjAgMjAwdi04MGw0MC00MHY4ME0wIDE2MHYtODBsNDAgNDAiLz4KPHBhdGggZmlsbD0iIzBmZiIgZD0iTTQwIDIwMHYtODBsNDAgNDAiLz4KPC9zdmc+Cg==)
```

<br/>

### API

<!-- DOC -->

#### Attributes

| Attribute | Type      | Default | Description            |
| --------- | --------- | ------- | ---------------------- |
| `dense`   | `boolean` | false   | Logo in a smaller size |

#### CSS Custom Properties

| Property            | Default | Description                                    |
| ------------------- | ------- | ---------------------------------------------- |
| `--fds-logo`        |         | String representing an image encoded in base64 |
| `--fds-logo-height` | "60px"  |                                                |
| `--fds-logo-width`  | "122px" |                                                |

<!-- /DOC -->
