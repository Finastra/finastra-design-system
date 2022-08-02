import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/skeleton.js';
import { Skeleton } from '../src/skeleton.js';

describe('Skeleton', () => {
  it('loads accessibly', async () => {
    const el: Skeleton = await fixture(html`<fds-skeleton></fds-skeleton>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('set with & height', async () => {
    const el: Skeleton = await fixture(html`<fds-skeleton width="100px" height="100px"></fds-skeleton>`);

    await elementUpdated(el);
    await expect(el.getBoundingClientRect().width).to.eq(100);
    await expect(el.getBoundingClientRect().height).to.eq(100);
  });
});
