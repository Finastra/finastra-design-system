import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { List } from '../src/list.js';
import '../src/list.js';

describe('List', () => {
  it('loads accessibly', async () => {
    const el: List = await fixture(html`<fds-list></fds-list>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
