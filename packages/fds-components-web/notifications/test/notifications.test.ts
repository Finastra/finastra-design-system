import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
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
    createdOn: '2023-04-05T12:58:32.710Z'
  },
  {
    id: '2',
    type: UserNotificationType.WARNING,
    state: 'read',
    message: 'New warning message',
    source: 'all',
    createdOn: '2023-04-05T13:12:32.710Z'
  }
];

describe('Notifications', () => {
  it('loads accessibly', async () => {
    const el: Notifications = await fixture(html`<fds-notifications></fds-notifications>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('tests functionality', async () => {
    const el: Notifications = await fixture(html`<fds-notifications .notifications="${notifications}"></fds-notifications>`);
    await elementUpdated(el);
    const trigger: HTMLElement = el.renderRoot.querySelector('#notifications-button')!;
    trigger!.click();
    await elementUpdated(el);
    expect(el.notifications.length).to.equal(2);
  });
});
