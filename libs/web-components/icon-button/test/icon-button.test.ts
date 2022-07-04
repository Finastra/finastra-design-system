import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { IconButton } from '../src/icon-button.js';
import '../src/icon-button.js';

describe('IconButton', () => {
  it('loads accessibly', async () => {
    const el: IconButton = await fixture(html`<fds-icon-button></fds-icon-button>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
