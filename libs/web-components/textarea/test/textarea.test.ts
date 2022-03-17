import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Textarea } from '../src/textarea.js';
import '../src/textarea.js';

describe('Textarea', () => {
  it('loads accessibly', async () => {
    const el: Textarea = await fixture(html`<fds-textarea></fds-textarea>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
