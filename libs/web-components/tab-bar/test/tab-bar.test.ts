import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { TabBar } from '../src/tab-bar.js';
import '../src/tab-bar.js';

describe('TabBar', () => {
  it('loads accessibly', async () => {
    const el: TabBar = await fixture(html`<fds-tab-bar></fds-tab-bar>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
