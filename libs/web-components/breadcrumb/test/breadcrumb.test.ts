import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/breadcrumb.js';
import { Breadcrumb } from '../src/breadcrumb.js';

describe('Breadcrumb', () => {
  it('loads accessibly', async () => {
    const el: Breadcrumb = await fixture(html`<fds-breadcrumb></fds-breadcrumb>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
