import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Chip } from '../src/chip.js';
import '../src/chip.js';

describe('Chip', () => {
  it('loads accessibly', async () => {
    const el: Chip = await fixture(html`<fds-chip label="Test"></fds-chip>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('displays icons', async () => {
    const el: Chip = await fixture(html`<fds-chip label="Test" icon="event" TrailingIcon="cancel"></fds-chip>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
