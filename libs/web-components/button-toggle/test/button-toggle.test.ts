import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { ButtonToggle } from '../src/button-toggle.js';
import '../src/button-toggle.js';

describe('ButtonToggle', () => {
  it('loads accessibly', async () => {
    const el: ButtonToggle = await fixture(html`<div role="tablist"><fds-button-toggle label="Active"></fds-button-toggle></div>`);
    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
