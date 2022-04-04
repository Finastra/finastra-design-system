import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Tab } from '../src/tab.js';
import '../src/tab.js';

describe('Tab', () => {
  it('loads accessibly', async () => {
    const el: Tab = await fixture(html`<div role="tablist">
      <fds-tab label="Active"></fds-tab>
    </div>`);

    await elementUpdated(el);
    await expect(el.querySelector('fds-tab')).to.be.accessible();
  });
});
