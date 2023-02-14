import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/select.js';
import { Select } from '../src/select.js';

describe('Select', () => {
  it('loads accessibly', async () => {
    const el: Select = await fixture(html`<fds-select label="test"></fds-select>`);
    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
