import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { LinearProgress } from '../src/linear-progress.js';
import '../src/linear-progress.js';

describe('LinearProgress', () => {
  it('loads accessibly', async () => {
    const el: LinearProgress = await fixture(html`<fds-linear-progress></fds-linear-progress>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
