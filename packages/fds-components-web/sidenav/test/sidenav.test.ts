import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Sidenav } from '../src/sidenav.js';
import '../src/sidenav.js';

describe('Sidenav', () => {
  it('loads accessibly', async () => {
    const el: Sidenav = await fixture(html`<fds-sidenav></fds-sidenav>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
