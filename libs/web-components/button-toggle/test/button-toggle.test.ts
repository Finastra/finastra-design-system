import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { ButtonToggle } from '../src/button-toggle.js';
import '../src/button-toggle.js';

describe('ButtonToggle', () => {
  it('loads accessibly', async () => {
    const el: ButtonToggle = await fixture(html`<fds-button-toggle></fds-button-toggle>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
