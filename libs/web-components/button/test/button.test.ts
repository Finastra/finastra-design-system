import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/outlined-button.js';
import { OutlinedButton } from '../src/outlined-button.js';

describe('Button', () => {
  it('should be able to set outline', async () => {
    const el: OutlinedButton = await fixture(html`<fds-outlined-button label="Outlined button"></fds-outlined-button><br />`);

    await elementUpdated(el);
    await expect(shadowRoot(el).querySelector('mwc-button')?.hasAttribute('outlined')).to.equal(true);
  });

  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: OutlinedButton = await fixture(html`<fds-outlined-button></fds-outlined-button>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
