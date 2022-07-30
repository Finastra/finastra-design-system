import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { FdsGlobalSearch } from '../src';



describe('Global Search', () => {
  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: FdsGlobalSearch = await fixture(html`<fds-global-search .placeholder="search market place"></fds-global-search>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
  
});
