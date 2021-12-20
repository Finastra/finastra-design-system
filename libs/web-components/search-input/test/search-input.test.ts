import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { SearchInput } from '../src/search-input';
import '../src/search-input';

describe('SearchInput', () => {
  it('should be able to clear text', async () => {
    const el: SearchInput = await fixture(html`<fds-search-input label="Search"></fds-search-input>`);

    await elementUpdated(el);
    el.value = 'test';
    await el['clear']();
    await expect(el.value).to.equal('');
  });

  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: SearchInput = await fixture(html`<fds-search-input></fds-search-input>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
