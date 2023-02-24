import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Badge } from '../src/badge.js';
import '../src/badge.js';

describe('Badge', () => {
  it('loads accessibly', async () => {
    const el: Badge = await fixture(html`<fds-badge></fds-badge>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
