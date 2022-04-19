import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Chip } from '../src/chip.js';
import '../src/chip.js';

describe('Chip', () => {
  it('loads accessibly', async () => {
    const el: Chip = await fixture(html`<fds-chip></fds-chip>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
