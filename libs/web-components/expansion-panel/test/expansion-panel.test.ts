import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { ExpansionPanel } from '../src/expansion-panel.js';
import '../src/expansion-panel.js';

describe('ExpansionPanel', () => {
  it('loads accessibly', async () => {
    const el: ExpansionPanel = await fixture(html`<fds-expansion-panel></fds-expansion-panel>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
