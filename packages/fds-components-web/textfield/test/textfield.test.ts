import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { TextField } from '../src/textfield.js';
import '../src/textfield.js';

describe('TextField', () => {
  it('loads accessibly', async () => {
    const el: TextField = await fixture(html`<fds-textfield label="test"></fds-textfield>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
