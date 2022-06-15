import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Fab } from '../src/fab.js';
import '../src/fab.js';

describe('Fab', () => {
  it('loads accessibly', async () => {
    const el: Fab = await fixture(html`<fds-fab></fds-fab>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
