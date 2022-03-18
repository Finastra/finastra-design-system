import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Textfield } from '../src/textfield.js';
import '../src/textfield.js';

describe('Textfield', () => {
  it('loads accessibly', async () => {
    const el: Textfield = await fixture(html`<fds-textfield></fds-textfield>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
