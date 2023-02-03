import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/user-profile.js';
import { UserProfile } from '../src/user-profile.js';

describe('UserProfile', () => {
  it('loads accessibly', async () => {
    const el: UserProfile = await fixture(html`<fds-user-profile></fds-user-profile>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should not display divider when actions slot is undefined', async () => {
    const el: UserProfile = await fixture(html`<fds-user-profile></fds-user-profile>`);

    await elementUpdated(el);
    const iconButton = shadowRoot(el).querySelector('fds-icon-button') as HTMLElement;
    iconButton?.click();
    expect(el.divider).to.be.false;
  });

  it('should set dense header', async () => {
    const el: UserProfile = await fixture(html`<fds-user-profile dense></fds-user-profile>`);

    await elementUpdated(el);
    const iconButton = shadowRoot(el).querySelector('fds-icon-button') as HTMLElement;
    iconButton?.click();
    expect(shadowRoot(el).querySelector('fds-menu div')).to.have.class('header-dense');
  });

  it('Should display divider when actions slot is defined', async () => {
    const el: UserProfile = await fixture(html`<fds-user-profile dense>
      <div slot="userInfo">raya.hristova@finastra.com</div>
      <div slot="actions">
        <fds-button fullwidth label="Logout" icon="logout"></fds-button>
        <fds-button text fullwidth label="View profile"></fds-button>
      </div>
    </fds-user-profile>`);

    await elementUpdated(el);
    const iconButton = shadowRoot(el).querySelector('fds-icon-button') as HTMLElement;
    iconButton?.click();
    expect(el.divider).to.be.true;
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
