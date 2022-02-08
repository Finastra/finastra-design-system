import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { MenuTrigger } from '../src/menu-trigger.js';
import '../src/menu-trigger.js';

describe('MenuTrigger', () => {
  it('loads accessibly', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger outlined></fds-menu-trigger>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should be outline', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger outlined></fds-menu-trigger>`);
    await elementUpdated(el);
    await expect(shadowRoot(el).querySelector('fds-button')?.hasAttribute('outlined')).to.equal(true);
  });

  it('should toggle', async () => {
    const el: MenuTrigger = await fixture(html`<fds-menu-trigger outlined></fds-menu-trigger>`);
    await elementUpdated(el);
    await shadowRoot(el).querySelector('fds-button')?.click();
    await expect(el.on && el.menuTrailingIcon === "arrow_drop_up").to.be.true;
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
