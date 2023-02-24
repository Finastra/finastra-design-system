import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import '../src/brand-card.js';
import { BrandCard } from '../src/brand-card.js';

describe('BrandCard', () => {
  it('should load accessibly', async () => {
    const el: BrandCard = await fixture(html`<fds-brand-card></fds-brand-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should have default options', async () => {
    const el: BrandCard = await fixture(html`<fds-brand-card></fds-brand-card>`);
    expect(el.extraDense).to.equal(false);
    expect(el.dense).to.equal(false);
    expect(el.large).to.equal(false);
    expect(el.secondary).to.equal(false);
    expect(el.shortLabel).to.equal('');
    expect(el.label).to.equal(undefined);
  });

  it('should set secondary svg ribbon', async () => {
    const el: BrandCard = await fixture(html`<fds-brand-card secondary></fds-brand-card>`);
    expect(el.extraDense).to.equal(false);
    expect(el.dense).to.equal(false);
    expect(el.large).to.equal(false);
    expect(el.secondary).to.equal(true);
    expect(el.shortLabel).to.equal('');
    expect(el.label).to.equal(undefined);
  });

  it('should log warning if there are multiple size attributes at the same time', async () => {
    await fixture(html`<fds-brand-card large dense></fds-brand-card>`);
    const warnSpy = sinon.spy(console, 'warn');
    await fixture(html`<fds-brand-card large dense></fds-brand-card>`);
    expect(warnSpy.callCount).to.equal(1);
  });

  it('should format item name ', async () => {
    const brandCard = new BrandCard();
    expect(brandCard.formatItemName('app name')).to.equal('AN');
  });
});
