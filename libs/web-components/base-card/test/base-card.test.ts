import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { BaseCard } from '../src/base-card.js';
import '../src/base-card.js';

describe('BaseCard', () => {
  it('loads accessibly', async () => {
    const el: BaseCard = await fixture(html`<fds-base-card></fds-base-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
