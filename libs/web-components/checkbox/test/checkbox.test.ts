import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Checkbox } from '../src/checkbox.js';
import '../src/checkbox.js';

describe('Checkbox', () => {
  it('loads accessibly', async () => {
    const el: Checkbox = await fixture(html`<fds-checkbox aria-label="test"></fds-checkbox>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should be checked', async () => {
    const el: Checkbox = await fixture(html`<fds-checkbox checked></fds-checkbox>`);
    await elementUpdated(el);
    await expect(shadowRoot(el).querySelector('mwc-checkbox')?.hasAttribute('checked')).to.equal(true);
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}