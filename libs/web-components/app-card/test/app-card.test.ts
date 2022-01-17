import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { AppCard } from '../src/app-card.js';
import * as sinon from 'sinon';
import '../src/app-card.js';

describe('AppCard', () => {
  it('should load accessibly', async () => {
    const el: AppCard = await fixture(html`<fds-app-card></fds-app-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should have default options', async () => {
    const el: AppCard = await fixture(html`<fds-app-card></fds-app-card>`);
    expect(el.extraDense).to.equal(false);
    expect(el.dense).to.equal(false);
    expect(el.large).to.equal(false);
    expect(el.secondary).to.equal(false);
    expect(el.shortLabel).to.equal(undefined);
    expect(el.label).to.equal(undefined);
  });

  it('should set secondary svg ribbon', async () => {
    const el: AppCard = await fixture(html`<fds-app-card secondary></fds-app-card>`);
    expect(el.extraDense).to.equal(false);
    expect(el.dense).to.equal(false);
    expect(el.large).to.equal(false);
    expect(el.secondary).to.equal(true);
    expect(el.shortLabel).to.equal(undefined);
    expect(el.label).to.equal(undefined);
  });

  it('should log warning if there are multiple size attributes at the same time', async () => {
    await fixture(html`<fds-app-card large dense></fds-app-card>`);
    const warnSpy = sinon.spy(console, 'warn');
    await fixture(html`<fds-app-card large dense></fds-app-card>`);
    expect(warnSpy.callCount).to.equal(1);
  });

  it('should format item name ', async () => {
    const appCard = new AppCard();
    expect(appCard.formatItemName('app name')).to.equal('AN');
  });
});
