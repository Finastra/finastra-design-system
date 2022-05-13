import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { CircularProgress } from '../src/circular-progress.js';
import '../src/circular-progress.js';

describe('CircularProgress', () => {
  it('loads accessibly', async () => {
    const el: CircularProgress = await fixture(html`<fds-circular-progress></fds-circular-progress>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
