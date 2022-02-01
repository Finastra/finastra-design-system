import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Launchpad } from '../src/launchpad.js';
import '../src/launchpad.js';

describe('Launchpad', () => {
  it('loads accessibly', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad></fds-launchpad>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
