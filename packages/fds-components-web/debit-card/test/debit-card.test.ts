import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { DebitCard } from '../src/debit-card.js';
import '../src/debit-card.js';

describe('debit-card', () => {
  it('loads accessibly', async () => {
    const el: DebitCard = await fixture(html`<fds-debit-card></fds-debit-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
