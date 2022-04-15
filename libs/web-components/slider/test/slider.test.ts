import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/slider.js';
import { Slider } from '../src/slider.js';

describe('Slider', () => {
  it('loads accessibly', async () => {
    const el: Slider = await fixture(html`<fds-slider aria-label="accessible"></fds-slider>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
