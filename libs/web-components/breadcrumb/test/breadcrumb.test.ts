import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../src/breadcrumb.js';
import { Breadcrumb } from '../src/breadcrumb.js';

describe('Breadcrumb', () => {
  it('loads accessibly', async () => {
    const el: Breadcrumb = await fixture(html`<fds-breadcrumb .items=${['Link 1', 'Link 2', 'Link 3']}></fds-breadcrumb>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should dispatch selected event', async () => {
    const el: Breadcrumb = await fixture(html`<fds-breadcrumb .items=${['Link 1', 'Link 2', 'Link 3']}></fds-breadcrumb>`);
    await elementUpdated(el);
    setTimeout(() => {
      el.shadowRoot?.querySelector('li')?.dispatchEvent(new Event('click'))
    });
    const {detail} = await oneEvent(el, 'selected');
    expect(detail).to.exist;
  });
});
