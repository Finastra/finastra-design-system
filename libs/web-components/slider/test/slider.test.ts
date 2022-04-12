import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Slider } from '../src/slider.js';
import '../src/slider.js';

describe('Slider', () => {
  it('loads accessibly', async () => {
    const el: Slider = await fixture(html`<fds-slider></fds-slider>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
