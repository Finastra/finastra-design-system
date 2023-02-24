import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/horizontal-stepper';
import { HorizontalStepper } from '../src/horizontal-stepper';
import { VerticalStepper } from '../src/vertical-stepper';

describe('Stepper', () => {
  it('loads accessibly', async () => {
    const elH: HorizontalStepper = await fixture(html`<fds-horizontal-stepper></fds-horizontal-stepper>`);
    const elV: VerticalStepper = await fixture(html`<fds-vertical-stepper></fds-vertical-stepper>`);

    await elementUpdated(elH);
    await expect(elH).to.be.accessible();

    await elementUpdated(elV);
    await expect(elV).to.be.accessible();
  });
});
