import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { AppBar } from '../src/app-bar.js';
import '../src/app-bar.js';

describe('AppBar', () => {
  it('loads accessibly', async () => {
    const el: AppBar = await fixture(html`<fds-app-bar></fds-app-bar>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
