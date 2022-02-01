import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { MenuTrigger } from '../src/menu-trigger.js';
import '../src/menu-trigger.js';

describe('MenuTrigger', () => {
  it('loads accessibly', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger></fds-menu-trigger>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
