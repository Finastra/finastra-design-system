import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { AccountCard } from '../src/account-card.js';
import '../src/account-card.js';

describe('AccountCard', () => {
  it('loads accessibly', async () => {
    const el: AccountCard = await fixture(html`<fds-account-card></fds-account-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
