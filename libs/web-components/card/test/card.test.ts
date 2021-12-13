
import {html, fixture, expect, elementUpdated} from '@open-wc/testing';
import {Card} from '../src/card.js';
import '../src/card.js';

describe('Card', () => {

    it('has default options', async () => {
        const el: Card = await fixture(html`<fds-card></fds-card>`);
        expect(el.outlined).to.equal(false);
        expect(el.fullBleed).to.equal(false);
      });
    
    describe('Accessibility', () => {
        it('loads accessibly', async () => {
            const el: Card = await fixture(html`<fds-card></fds-card>`);
    
            await elementUpdated(el);
            await expect(el).to.be.accessible();
        });
    });
});