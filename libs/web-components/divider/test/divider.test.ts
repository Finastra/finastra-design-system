import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Divider } from '../src/divider.js';
import '../src/divider.js';

describe('Divider', () => {
  it('loads accessibly', async () => {
    const el: Divider = await fixture(html`<fds-divider></fds-divider>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
