import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { Notifications } from '../src/notifications.js';
import '../src/notifications.js';

describe('notifications', () => {
  it('loads accessibly', async () => {
    const el: Notifications = await fixture(html`<fds-notifications></fds-notifications>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
