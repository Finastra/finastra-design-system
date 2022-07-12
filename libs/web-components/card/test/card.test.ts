import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/card.js';
import { Card } from '../src/card.js';

describe('Card', () => {
  it('should have default options', async () => {
    const el: Card = await fixture(html`<fds-card></fds-card>`);
    expect(el.outlined).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should be outlined', async () => {
    const el: Card = await fixture(html`<fds-card outlined></fds-card>`);
    expect(el.outlined).to.equal(true);
    expect(el.disabled).to.equal(false);
  });

  it('should be disabled', async () => {
    const el: Card = await fixture(html`<fds-card disabled></fds-card>`);
    expect(el.outlined).to.equal(false);
    expect(el.disabled).to.equal(true);
  });

  describe('Accessibility', () => {
    it('should load accessibly', async () => {
      const el: Card = await fixture(html`<fds-card></fds-card>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
