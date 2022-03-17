import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/radio.js';
import { Radio } from '../src/radio.js';

describe('Radio', () => {
  it('loads accessibly', async () => {
    const el: Radio = await fixture(html`<fds-radio aria-label="test"></fds-radio>`);
    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
