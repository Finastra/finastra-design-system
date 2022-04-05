import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/app-card.js';
import { AppCard } from '../src/app-card.js';

describe('AppCard', () => {
  it('loads accessibly', async () => {
    const el: AppCard = await fixture(html`<fds-app-card></fds-app-card>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should have default options', async () => {
    const el: AppCard = await fixture(html`<fds-app-card></fds-app-card>`);
    expect(el.application).to.deep.equal({});
    expect(el.extraDense).to.equal(false);
    expect(el.large).to.equal(false);
  });

  it('should be extraDense', async () => {
    const el: AppCard = await fixture(html`<fds-app-card extraDense></fds-app-card>`);
    expect(el.extraDense).to.equal(true);
  });

  it('should display application', async () => {
    const el: AppCard = await fixture(
      html`<fds-app-card
        application='{"name":"Test App", "author":"Test", "flag":"PUBLISHED", "icon":"https://test-logo.png", "description":"description test"}'
      ></fds-app-card>`
    );
    expect(el.application.name).to.equal('Test App');
    expect(el.application.author).to.equal('Test');
    expect(el.application.flag).to.equal('PUBLISHED');
    expect(el.application.icon).to.equal('https://test-logo.png');
    expect(el.application.description).to.equal('description test');
  });
});
