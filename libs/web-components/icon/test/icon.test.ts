import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Icon } from '../src/icon.js';
import '../src/icon.js';

describe('Icon', () => {
  it('loads accessibly', async () => {
    const el: Icon = await fixture(html`<fds-icon></fds-icon>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
