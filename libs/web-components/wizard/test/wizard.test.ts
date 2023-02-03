import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/wizard.js';
import { Wizard } from '../src/wizard.js';
describe('Wizard', () => {
  it('loads accessibly', async () => {
    const el: Wizard = await fixture(html` <fds-wizard>
      <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header> </fds-wizard-page>
    </fds-wizard>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should go to next step', async () => {
    const el: Wizard = await fixture(html` <fds-wizard>
      <fds-text-button slot="left-action" label="Cancel" secondary></fds-text-button>
      <fds-outlined-button slot="next" label="Next" secondary id="next"></fds-outlined-button>
      <fds-text-button slot="previous" label="Back" secondary icon="chevron_left" id="back"></fds-text-button>
      <fds-button slot="done" label="Save" secondary></fds-button>
      <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header> </fds-wizard-page>
      <fds-wizard-page slot="page" title="Confirmation" description="Confirmation page"> </fds-wizard-page>
    </fds-wizard>`);

    await elementUpdated(el);

    const next = (await el.querySelector('#next')) as HTMLElement;
    next.click();

    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector('fds-vertical-stepper')?.getAttribute('currentStepIndex'))?.equal('1');
  });

  it('should go to previous step', async () => {
    const el: Wizard = await fixture(html` <fds-wizard>
      <fds-text-button slot="left-action" label="Cancel" secondary></fds-text-button>
      <fds-outlined-button slot="next" label="Next" secondary id="next"></fds-outlined-button>
      <fds-text-button slot="previous" label="Back" secondary icon="chevron_left" id="back"></fds-text-button>
      <fds-button slot="done" label="Save" secondary></fds-button>
      <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header> </fds-wizard-page>
      <fds-wizard-page current slot="page" title="Confirmation" description="Confirmation page"> </fds-wizard-page>
    </fds-wizard>`);

    await elementUpdated(el);

    const back = (await el.querySelector('#back')) as HTMLElement;
    back.click();

    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector('fds-vertical-stepper')?.getAttribute('currentStepIndex'))?.equal('0');
  });
});
