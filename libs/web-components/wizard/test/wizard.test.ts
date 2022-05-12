import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Wizard } from '../src/wizard.js';
import '../src/wizard.js';

describe('Wizard', () => {
  it('loads accessibly', async () => {
    const el: Wizard = await fixture(html`<fds-wizard></fds-wizard>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
