import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { WizardPage } from '../src/wizard-page.js';
import '../src/wizard-page.js';

describe('WizardPage', () => {
  it('loads accessibly', async () => {
    const el: WizardPage = await fixture(html`<fds-wizard-page></fds-wizard-page>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
