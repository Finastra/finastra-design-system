import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/credit-card.js';
import { CreditCard } from '../src/credit-card.js';

describe('credit-card', () => {
  it('loads accessibly', async () => {
    const el: CreditCard = await fixture(html`<fds-credit-card></fds-credit-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
