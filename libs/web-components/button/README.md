# Button

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-button-contained--default)

## Usage

An `<fds-button>` represents an action a user can take. fds-buttons can be clicked or tapped to perform an action or to navigate to another page.

### Import

```
npm i @finastra/button
```

```ts
import '@finastra/button';
...
<fds-button label="Contained button"></fds-button>
<fds-outlined-button label="Outlined button"></fds-outlined-button>
<fds-text-button label="Text button"></fds-text-button>
```

### API

### Button

<!-- DOC:fds-button -->

#### Properties

| Property       | Attribute      | Type      | Default  | Description                                                                                                        |
| -------------- | -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `dense`        | `dense`        | `boolean` | false    | Use the smaller button size                                                                                        |
| `disabled`     | `disabled`     | `boolean` | false    | Is the button disabled or not                                                                                      |
| `fullwidth`    | `fullwidth`    | `boolean` | false    | Use the full width of its parent                                                                                   |
| `icon`         | `icon`         | `string`  | ""       | The name of the icon displayed before the label<br />Use trailingIcon to true to display this icon after the label |
| `label`        | `label`        | `string`  | "Button" | The label displayed inside the button                                                                              |
| `large`        | `large`        | `boolean` | false    | Use the larger button size                                                                                         |
| `trailingIcon` | `trailingIcon` | `boolean` | false    | Display the icon after the label instead of before                                                                 |

<!-- /DOC:fds-button -->

### Outlined Button

<!-- DOC:fds-outlined-button -->

#### Properties

| Property       | Attribute      | Type      | Default  | Description                                                                                                        |
| -------------- | -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `dense`        | `dense`        | `boolean` | false    | Use the smaller button size                                                                                        |
| `disabled`     | `disabled`     | `boolean` | false    | Is the button disabled or not                                                                                      |
| `fullwidth`    | `fullwidth`    | `boolean` | false    | Use the full width of its parent                                                                                   |
| `icon`         | `icon`         | `string`  | ""       | The name of the icon displayed before the label<br />Use trailingIcon to true to display this icon after the label |
| `label`        | `label`        | `string`  | "Button" | The label displayed inside the button                                                                              |
| `large`        | `large`        | `boolean` | false    | Use the larger button size                                                                                         |
| `trailingIcon` | `trailingIcon` | `boolean` | false    | Display the icon after the label instead of before                                                                 |

<!-- /DOC:fds-outlined-button -->

### Text Button

<!-- DOC:fds-text-button -->

#### Properties

| Property       | Attribute      | Type      | Default  | Description                                                                                                        |
| -------------- | -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `dense`        | `dense`        | `boolean` | false    | Use the smaller button size                                                                                        |
| `disabled`     | `disabled`     | `boolean` | false    | Is the button disabled or not                                                                                      |
| `fullwidth`    | `fullwidth`    | `boolean` | false    | Use the full width of its parent                                                                                   |
| `icon`         | `icon`         | `string`  | ""       | The name of the icon displayed before the label<br />Use trailingIcon to true to display this icon after the label |
| `label`        | `label`        | `string`  | "Button" | The label displayed inside the button                                                                              |
| `large`        | `large`        | `boolean` | false    | Use the larger button size                                                                                         |
| `trailingIcon` | `trailingIcon` | `boolean` | false    | Display the icon after the label instead of before                                                                 |

<!-- /DOC:fds-text-button -->
