import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/index';
import { List } from '../src/list.js';

describe('List', () => {
  it('loads list accessibly', async () => {
    const el: List = await fixture(html`<fds-list></fds-list>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
