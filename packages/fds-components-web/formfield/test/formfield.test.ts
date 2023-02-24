import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Formfield } from '../src/formfield.js';
import '../src/formfield.js';

describe('Formfield', () => {
  it('loads accessibly', async () => {
    const el: Formfield = await fixture(html`<fds-formfield></fds-formfield>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
