import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/linear-progress.js';
import { LinearProgress } from '../src/linear-progress.js';

describe('LinearProgress', () => {
  it('loads accessibly', async () => {
    const el: LinearProgress = await fixture(html`<fds-linear-progress aria-label="accessible"></fds-linear-progress>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
