import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Tab } from '../src/tab.js';
import '../src/tab.js';

describe('Tab', () => {
  it('loads accessibly', async () => {
    const el: Tab = await fixture(html`<fds-tab></fds-tab>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
