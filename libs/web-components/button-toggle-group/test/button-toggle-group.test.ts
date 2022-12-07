import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { ButtonToggleGroup } from '../src/button-toggle-group.js';
import '../src/button-toggle-group.js';

describe('ButtonToggleGroup', () => {
  it('loads accessibly', async () => {
    const el: ButtonToggleGroup = await fixture(html`<fds-button-toggle-group></fds-button-toggle-group>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
