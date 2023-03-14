import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { Sparkline } from '../src/sparkline.js';
import '../src/sparkline.js';

describe('sparkline', () => {
  it('loads accessibly', async () => {
    const el: Sparkline = await fixture(html`<fds-sparkline></fds-sparkline>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
