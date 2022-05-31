import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { GuidedTour } from '../src/guided-tour.js';
import '../src/guided-tour.js';

describe('GuidedTour', () => {
  it('loads accessibly', async () => {
    const el: GuidedTour = await fixture(html`<fds-guided-tour></fds-guided-tour>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
