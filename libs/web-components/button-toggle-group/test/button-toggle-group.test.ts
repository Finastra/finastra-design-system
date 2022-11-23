import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/button-toggle-group.js';
import { ButtonToggleGroup } from '../src/button-toggle-group.js';

describe('ButtonToggleGroup', () => {
  it('loads accessibly', async () => {
    const el: ButtonToggleGroup = await fixture(html`
      <fds-button-toggle-group>
        <fds-button-toggle icon="favorite"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
