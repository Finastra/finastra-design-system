import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Dialog } from '../src/dialog.js';
import '../src/dialog.js';

describe('Dialog', () => {
  it('loads accessibly', async () => {
    const el: Dialog = await fixture(html`<fds-dialog></fds-dialog>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
