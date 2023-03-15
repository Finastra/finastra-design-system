import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/icon-button.js';
import { IconButton } from '../src/icon-button.js';

describe('IconButton', () => {
  it('loads accessibly', async () => {
    const el: IconButton = await fixture(html`<fds-icon-button icon="code"></fds-icon-button>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
