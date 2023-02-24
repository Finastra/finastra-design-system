import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Logo } from '../src/logo.js';
import '../src/logo.js';

describe('Logo', () => {
  it('loads accessibly', async () => {
    const el: Logo = await fixture(html`<fds-logo></fds-logo>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
