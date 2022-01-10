import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { UserProfile } from '../src/user-profile.js';
import '../src/user-profile.js';

describe('UserProfile', () => {
  it('loads accessibly', async () => {
    const el: UserProfile = await fixture(html`<fds-user-profile></fds-user-profile>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
