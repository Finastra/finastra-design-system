import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/sparkline.js';
describe('sparkline', () => {
    it('loads accessibly', async () => {
        const el = await fixture(html `<fds-sparkline></fds-sparkline>`);
        await elementUpdated(el);
        await expect(el).to.be.accessible();
    });
});
//# sourceMappingURL=sparkline.test.js.map