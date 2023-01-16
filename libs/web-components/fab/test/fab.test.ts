import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/fab.js';
import { Fab } from '../src/fab.js';

describe('Fab', () => {
  it('loads accessibly', async () => {
    const el: Fab = await fixture(html`<fds-fab label="test"></fds-fab>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
