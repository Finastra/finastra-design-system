import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/circular-progress.js';
import { CircularProgress } from '../src/circular-progress.js';

describe('CircularProgress', () => {
  it('loads accessibly', async () => {
    const el: CircularProgress = await fixture(html`<fds-circular-progress aria-label="accessible"></fds-circular-progress>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
