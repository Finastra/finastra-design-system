import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Form } from '../src/form.js';
import '../src/form.js';

describe('Form', () => {
  it('loads accessibly', async () => {
    const el: Form = await fixture(html`<fds-form></fds-form>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
