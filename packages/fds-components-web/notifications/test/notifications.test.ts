import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../src/notifications.js';
import { Notifications } from '../src/notifications.js';
import { UserNotificationType } from '../src/notifications.models.js';

const notifications = [
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

describe('Notifications', () => {
  it('loads accessibly', async () => {
    const el: Notifications = await fixture(html`<fds-notifications></fds-notifications>`);

    await elementUpdated(el);
    expect(el).to.be.accessible();
  });

  it('tests functionality', async () => {
    // eslint-disable-next-line prefer-const
    let container: HTMLElement = await fixture(
      html`<div id="container"><fds-notifications .notifications="${notifications}"></fds-notifications></div>`
    );
    await elementUpdated(container);
    const el: Notifications = container.querySelector('fds-notifications')!;

    const deleteOneListener = oneEvent(container, 'deleteonenotification');
    const deleteAllListener = oneEvent(container, 'deleteallnotifications');
    const readOneListener = oneEvent(container, 'markonenotificationread');
    const readAllListener = oneEvent(container, 'markallnotificationsread');
    const navigateListener = oneEvent(container, 'navigateto');

    const trigger: HTMLElement = el.renderRoot.querySelector('#notifications-button')!;
    trigger!.click();
    await elementUpdated(el);
    expect(el.notifications.length).to.equal(5);
    const deleteAllBtn: HTMLElement = el.renderRoot.querySelector('[label="Delete all"]')!;
    const deleteOneBtn: HTMLElement = el.renderRoot.querySelectorAll('[label="Delete notification"]')[0]! as HTMLElement;
    const readAllBtn: HTMLElement = el.renderRoot.querySelector('[label="Mark all as read"]')!;
    const copyOneBtn: HTMLElement = el.renderRoot.querySelectorAll('[label="Copy to clipboard"]')[0]! as HTMLElement;
    const linkBtn: HTMLElement = el.renderRoot.querySelectorAll('[label="Go to location"]')[0]! as HTMLElement;
    let event: CustomEvent;

    copyOneBtn.click();
    event = await readOneListener;
    expect(event.detail.notificationId).to.equal('1');

    deleteOneBtn.click();
    event = await deleteOneListener;
    expect(event.detail.notificationId).to.equal('1');

    readAllBtn.click();
    event = await readAllListener;
    expect(event.type).to.equal('markallnotificationsread');

    linkBtn.click();
    event = await navigateListener;
    expect(event.detail.path).to.equal('/tenants');

    deleteAllBtn.click();
    event = await deleteAllListener;
    expect(event.type).to.equal('deleteallnotifications');
  });
});
