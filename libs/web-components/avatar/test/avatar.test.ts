import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Avatar } from '../src/avatar.js';
import '../src/avatar.js';

describe('Avatar', () => {
  it('loads accessibly', async () => {
    const el: Avatar = await fixture(html`<fds-avatar></fds-avatar>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
