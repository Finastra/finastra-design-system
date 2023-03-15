import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { OutlinedButton } from '../src/outlined-button.js';

describe('Button', () => {
  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: OutlinedButton = await fixture(html`<fds-outlined-button></fds-outlined-button>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
