import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../src/breadcrumb.js';
import { Breadcrumb } from '../src/breadcrumb.js';

const items = [
  {
    label: 'Home',
    link: '#'
  },
  {
    label: 'Link 2',
    link: '#link-2'
  },
  {
    label: 'Link 3',
    link: '#link-2/link-3'
  }
];

describe('Breadcrumb', () => {
  it('loads accessibly', async () => {
    const el: Breadcrumb = await fixture(html`<fds-breadcrumb .items=${items}></fds-breadcrumb>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should dispatch selected event', async () => {
    const el: Breadcrumb = await fixture(html`<fds-breadcrumb .items=${items}></fds-breadcrumb>`);
    await elementUpdated(el);
    setTimeout(() => {
      el.shadowRoot?.querySelector('a')?.dispatchEvent(new Event('click'));
    });
    const { detail } = await oneEvent(el, 'selected');
    expect(detail).to.exist;
  });
});
