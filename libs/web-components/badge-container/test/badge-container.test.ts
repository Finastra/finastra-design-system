import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { badgeContainer } from '../src/badge-container.js';
import '../src/badge-container.js';

describe('badgeContainer', () => {
  it('loads accessibly', async () => {
    const el: badgeContainer = await fixture(html`<fds-badge-container></fds-badge-container>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
