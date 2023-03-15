import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Menu } from '../src/menu.js';
import '../src/menu.js';

describe('Menu', () => {
  it('loads accessibly', async () => {
    const el: Menu = await fixture(html`<fds-menu></fds-menu>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
