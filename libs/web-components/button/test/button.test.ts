import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/button.js';
import { Button } from '../src/button.js';

describe('Button', () => {
  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: Button = await fixture(html`<fds-button></fds-button>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
