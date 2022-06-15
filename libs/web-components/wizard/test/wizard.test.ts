import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/wizard.js';
import { Wizard } from '../src/wizard.js';

describe('Wizard', () => {
  it('loads accessibly', async () => {
    const el: Wizard = await fixture(html`
    <fds-wizard>
        <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header>
        </fds-wizard-page>
    </fds-wizard>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
