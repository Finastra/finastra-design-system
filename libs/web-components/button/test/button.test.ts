import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Button } from '../src/button.js';
import '../src/button.js';

describe('Button', () => {
  it('should be able to set outline', async () => {
    const el: Button = await fixture(html`<fds-button outlined label="Outlined button"></fds-button><br />`);

    await elementUpdated(el);
    await expect(shadowRoot(el).querySelector('mwc-button')?.hasAttribute('outlined')).to.equal(true);
  });

  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: Button = await fixture(html`<fds-button></fds-button>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
