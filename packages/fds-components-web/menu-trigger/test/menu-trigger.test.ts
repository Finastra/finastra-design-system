import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/menu-trigger.js';
import { MenuTrigger } from '../src/menu-trigger.js';

describe('MenuTrigger', () => {
  it('loads accessibly', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger></fds-menu-trigger>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should toggle', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger></fds-menu-trigger>`);
    await elementUpdated(el);
    await shadowRoot(el).querySelector('fds-outlined-button')?.click();
    await expect(el.on && el._menuTrailingIcon === 'expand_less').to.be.true;
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
