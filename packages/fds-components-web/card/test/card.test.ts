import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { CardFooter } from '../src/card-footer.js';
import { CardHeader } from '../src/card-header.js';
import { CardSubTitle } from '../src/card-subtitle.js';
import { CardTitle } from '../src/card-title.js';
import { Card } from '../src/card.js';
import '../src/index.js';
import { CardActions, CardContent } from '../src/index.js';

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
    it('should load card accessibly', async () => {
      const el: Card = await fixture(html`<fds-card></fds-card>`);

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load header accessibly', async () => {
      const el: CardHeader = await fixture(html`<fds-card-header></fds-card-header>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load title accessibly', async () => {
      const el: CardTitle = await fixture(html`<fds-card-title></fds-card-title>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load subtitle accessibly', async () => {
      const el: CardSubTitle = await fixture(html`<fds-card-subtitle></fds-card-subtitle>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load content accessibly', async () => {
      const el: CardContent = await fixture(html`<fds-card-content></fds-card-content>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load action accessibly', async () => {
      const el: CardActions = await fixture(html`<fds-card-action></fds-card-action>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });

    it('should load footer accessibly', async () => {
      const el: CardFooter = await fixture(html`<fds-card-footer></fds-card-footer>`);
      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
