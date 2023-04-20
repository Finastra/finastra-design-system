# Notifications

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/notifications?style=for-the-badge)](https://www.npmjs.com/package/@finastra/notifications)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/notifications?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/notifications)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-notifications--default)

## Usage

### Import

```
npm i @finastra/notifications
```

```ts
import '@finastra/notifications';
import { UserNotification, UserNotificationType } from '@finastra/notifications/dist/src/notifications.models';

const notifications: UserNotification[] = [
  {
    id: '1',
    type: UserNotificationType.SUCCESS,
    state: 'new',
    message: 'New success message',
    source: 'all',
    createdOn: new Date('2023-04-05T12:58:32.710Z')
  },
  {
    id: '2',
    type: UserNotificationType.WARNING,
    state: 'read',
    message: 'New warning message',
    source: 'all',
    createdOn: new Date('2023-04-05T13:12:32.710Z')
  },
  { id: '3', type: UserNotificationType.ERROR, state: 'new', message: 'New error message', source: 'all' },
  { id: '4', type: UserNotificationType.INFO, state: 'read', message: 'New info message', source: 'all' },
  {
    id: '5',
    type: UserNotificationType.SUCCESS,
    state: 'new',
    message: 'complex notification and very loooooooooooooooooooooooooooooooooooooooooooooooooooong',
    source: 'all',
    link: 'https://google.com/tenants',
    createdOn: new Date('2023-04-05T16:19:25.442Z')
  }
];

...

<fds-notifications .notifications=${notifications}></fds-notifications>
```

### Events

| Event                      | Description                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `markonenotificationread`  | emitted as a `@CustomEvent` when one notification should be marked as read, with `event.detail.notificationId` set |
| `markallnotificationsread` | emitted as a `@CustomEvent` when all notifications should be marked as read                                        |
| `deleteonenotification`    | emitted as a `@CustomEvent` when one notification should be deleted, with `event.detail.notificationId`            |
| `deleteallnotifications`   | emitted as a `@CustomEvent` when all notifications should be deleted                                               |
| `navigateto`               | emitted as a `@CustomEvent` when one notification should redirect the user to an url, with `event.detail.path` set |

### API

<!-- DOC -->
<!-- /DOC -->
