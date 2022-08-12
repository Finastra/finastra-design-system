import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { IconBar } from '../src/icon-bar.js';
import '../src/icon-bar.js';

describe('IconBar', () => {
  it('loads accessibly', async () => {
    const el: IconBar = await fixture(html`<fds-icon-bar></fds-icon-bar>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
