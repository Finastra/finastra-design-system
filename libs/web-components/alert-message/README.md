# AlertMessage

An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/alert-message?style=for-the-badge)](https://www.npmjs.com/package/@finastra/alert-message)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/alert-message?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/alert-message')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-alert-message--default)

## Usage

### Import

```
npm i @finastra/alert-message
```

```ts
import '@finastra/alert-message';
...
  <fds-alert-message type="success" title="Success" description="A banner displays an important, succinct message, and provides actions for users to address or dismiss the banner.">
  </fds-alert-message>
```

### API

<!-- DOC -->

#### Properties

| Property          | Attribute         | Type                            | Default      | Description                                            |
| ----------------- | ----------------- | ------------------------------- | ------------ | ------------------------------------------------------ |
| `dense`           | `dense`           | `boolean`                       | false        | dense .                                                |
| `description`     | `description`     | `string`                        | ""           | Alert description.                                     |
| `icon`            | `icon`            | `string`                        | ""           | Alert Icon.                                            |
| `layout`          | `layout`          | `multiLines\|singleLine`        | "multiLines" | Define the layout type                                 |
| `showCloseButton` | `showCloseButton` | `boolean`                       | false        | Display the close button to dismiss the alert message. |
| `title`           | `title`           | `string`                        | ""           | Alert title.                                           |
| `type`            | `type`            | `info\|error\|success\|warning` | "success"    | Define the alert type                                  |
| `withoutIcon`     | `withoutIcon`     | `boolean`                       | false        | Remove the Icon from the alert message.                |

#### Methods

| Method       | Type                    |
| ------------ | ----------------------- |
| `renderIcon` | `(): TemplateResult<1>` |

<!-- /DOC -->
