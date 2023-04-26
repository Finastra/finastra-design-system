const README = require('../README.md');
import '@finastra/notifications';
import type { Notifications } from '@finastra/notifications';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { UserNotification, UserNotificationType } from '../dist/src/notifications.models';
import { actions, argTypes, cssprops } from './sb-generated/fds-notifications.json';

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

const markOneReadHandler = (ev) => {
  ev.target.notifications = ev.target.notifications.map((notif) => ({...notif, state: notif.id === ev.detail.notificationId ? 'read' : notif.state}))
};
const markAllReadHandler = (ev) => {
  ev.target.notifications = ev.target.notifications.map((notif) => ({...notif, state: 'read' }))
};
const deleteOneHandler = (ev) => {
  ev.target.notifications = ev.target.notifications.filter((notif) => notif.id !== ev.detail.notificationId);
};
const deleteAllHandler = (ev) => {
  ev.target.notifications = [];
};

export default {
  title: 'NAVIGATION/Notifications',
  component: 'fds-notifications',
  argTypes,
  parameters: {
    actions,
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  decorators: [
    (story) => html`${story()}
      <style>
        #notifications-container {
          display: flex;
          flex-direction: column;
          height: 30vh;
          align-items: center;
          color: var(--fds-on-surface);
          font-family: var(--fds-font-family);
        }
        #notification-emitted-action {
          margin-bottom: 16px;
        }
      </style>`
  ],
  cssprops
} as Meta;

const Template: Story<Notifications> = ({ notifications }) => {
  return html`<div
    id="notifications-container"
    @markonenotificationread=${markOneReadHandler}
    @markallnotificationsread=${markAllReadHandler}
    @deleteonenotification=${deleteOneHandler}
    @deleteallnotifications=${deleteAllHandler}
  >
    <div id="notification-emitted-action">Last emitted event is: <span></span>. You can see all of them in the 'Actions' tab 👇</div>
    <fds-notifications .notifications=${notifications}></fds-notifications>
  </div>`;
};

export const Default: Story<Notifications> = Template.bind({});
Default.args = {
  notifications
};
