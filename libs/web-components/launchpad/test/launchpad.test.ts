import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/launchpad.js';
import { Launchpad } from '../src/launchpad.js';

describe('Launchpad', () => {
  it('loads accessibly', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad></fds-launchpad>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should open', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad></fds-launchpad>`);
    await elementUpdated(el);
    await shadowRoot(el).querySelector('fds-button')?.click();
    await expect(shadowRoot(el).querySelector('mwc-menu'))?.to.be.accessible();
  });

  it('should contain the tools', async () => {
    const el: Launchpad = await fixture(
      html`<fds-launchpad
        ><div slot="tools"><h3>test</h3></div></fds-launchpad
      >`
    );
    await elementUpdated(el);
    await shadowRoot(el).querySelector('fds-button')?.click();
    await expect(shadowRoot(el).querySelector('mwc-menu .menu-body .menu-tools'))?.to.be.accessible();
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
