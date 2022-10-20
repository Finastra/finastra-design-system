import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { AlertMessage } from '../src/alert-message.js';
import '../src/alert-message.js';

describe('AlertMessage', () => {
  it('loads accessibly', async () => {
    const el: AlertMessage = await fixture(html`<fds-alert-message></fds-alert-message>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
