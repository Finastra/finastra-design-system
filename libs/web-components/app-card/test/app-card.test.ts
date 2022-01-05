import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { AppCard } from '../src/app-card.js';
import '../src/app-card.js';

describe('AppCard', () => {
  it('loads accessibly', async () => {
    const el: AppCard = await fixture(html`<fds-app-card></fds-app-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
