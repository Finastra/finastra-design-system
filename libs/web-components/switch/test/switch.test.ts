import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Switch } from '../src/switch.js';
import '../src/switch.js';

describe('Switch', () => {
  it('loads accessibly', async () => {
    const el: Switch = await fixture(html`<fds-switch></fds-switch>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
