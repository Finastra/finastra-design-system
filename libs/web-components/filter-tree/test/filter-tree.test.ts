import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { FilterTree } from '../src/filter-tree.js';
import '../src/filter-tree.js';

describe('FilterTree', () => {
  it('loads accessibly', async () => {
    const el: FilterTree = await fixture(html`<fds-filter-tree></fds-filter-tree>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
