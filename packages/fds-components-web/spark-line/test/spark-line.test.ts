import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { SparkLine } from '../src/spark-line.js';
import '../src/spark-line.js';

describe('SparkLine', () => {
  it('loads accessibly', async () => {
    const el: SparkLine = await fixture(html`<fds-spark-line></fds-spark-line>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
