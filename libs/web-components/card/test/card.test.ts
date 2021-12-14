
import {html, fixture, expect, elementUpdated} from '@open-wc/testing';
import {Card} from '../src/card.js';
import '../src/card.js';

xdescribe('Card', () => {

    it('should have default options', async () => {
        const el: Card = await fixture(html`<fds-card></fds-card>`);
        expect(el.outlined).to.equal(false);
        expect(el.fullBleed).to.equal(false);
    });

    it('should be able to display medias without a primary action', async () => {
        const el: Card = await fixture(html`<fds-card
        class="card-item"
        mediaAspectRatio="16-9"
        style="
          --fds-card-media-background-image: url('');
        "
      >
        <div slot="media"></div>
      </fds-card>`);
        expect(shadowRoot(el).querySelectorAll('.mdc-card__primary-action').length > 0).to.equal(false);
    });

    it('should be able to display medias', async () => {
        const el: Card = await fixture(html`<fds-card
        class="card-item"
        mediaAspectRatio="16-9"
        mediaPrimaryAction="true"
        style="
          --fds-card-media-background-image: url('');
        "
      >
        <div slot="media"></div>
      </fds-card>`);
        expect(shadowRoot(el).querySelectorAll('.mdc-card__primary-action').length > 0).to.equal(true);
    });

    it('should be able to display icons in dedicated slot', async () => {
        const el: Card = await fixture(html`<fds-card>
        <mwc-icon-button slot="icon-action" icon="share"></mwc-icon-button>
      </fds-card>`);
        expect(el.querySelectorAll('.mdc-card__action--icon').length > 0).to.equal(true);
    });

    it('should be able to display buttons in dedicated slot', async () => {
        const el: Card = await fixture(html`<fds-card>
        <mwc-button slot="button-action">Click</mwc-button>
      </fds-card>`);
        expect(el.querySelectorAll('.mdc-card__action--button').length > 0).to.equal(true);
    });

    it('should be able to display stuff in primary action slot', async () => {
        const el: Card = await fixture(html`<fds-card>
        <div slot="primary-action">
          <div>Bla bla bla</div>
        </div>
      </fds-card>`);
        expect(shadowRoot(el).querySelectorAll('.mdc-card__primary-action').length > 0).to.equal(true);
    });
    
    describe('Accessibility', () => {
        it('should load accessibly', async () => {
            const el: Card = await fixture(html`<fds-card></fds-card>`);
    
            await elementUpdated(el);
            await expect(el).to.be.accessible();
        });
    });
});

function shadowRoot(el: Element) {
    return el.shadowRoot
    ? el.shadowRoot
    : el;
}