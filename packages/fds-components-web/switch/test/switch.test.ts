import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../src/switch.js';
import { Switch } from '../src/switch.js';

describe('Switch', () => {
  it('loads accessibly', async () => {
    const el: Switch = await fixture(html`<fds-switch aria-label="test"></fds-switch>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
