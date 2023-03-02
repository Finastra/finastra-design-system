import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/guided-tour.js';
import { GuidedTour } from '../src/guided-tour.js';
import { Tour } from '../src/guided-tour.model.js';
const data: Tour = {
  stepInfo: 'Step ${currentStep} of ${totalSteps}',
  steps: [
    {
      selector: '[data-tour="start"]',
      title: 'Step 1 title',
      description:
        'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
      marginRight: -10,
      marginTop: -5,
      marginBottom: -5,
      marginLeft: -5,
      placement: 'right',
      mainAxis: 10,
      crossAxis: 10
    },
    {
      title: 'Step 2 title',
      description:
        'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
      placement: 'right',
      marginRight: -10,
      marginTop: -5,
      marginBottom: -5,
      marginLeft: -5,
      mainAxis: 10
    },
    {
      title: 'Step 3 title',
      description:
        'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
      placement: 'bottom'
    }
  ]
};

describe('GuidedTour', () => {
  it('loads accessibly', async () => {
    const el: GuidedTour = await fixture(html`<fds-guided-tour></fds-guided-tour>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('show tour', async () => {
    const el: GuidedTour = await fixture(html`<fds-guided-tour .data=${data} show showStepInfo></fds-guided-tour>`);
    await elementUpdated(el);
    el.stop();
    await elementUpdated(el);
    expect(el).shadowDom.to.equal(``);
    el.start();
    await elementUpdated(el);
    expect(el.currentStepIndex).to.equal(0);
    el.next();
    await elementUpdated(el);
    expect(el.currentStepIndex).to.equal(1);
    el.back();
    await elementUpdated(el);
    expect(el.currentStepIndex).to.equal(0);
  });
});
