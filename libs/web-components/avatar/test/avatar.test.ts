import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Avatar } from '../src/avatar.js';
import '../src/avatar.js';

describe('Avatar', () => {
  it('loads accessibly', async () => {
    const el: Avatar = await fixture(html`<fds-avatar></fds-avatar>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should be able to generate a short name', async () => {
    const el1: Avatar = await fixture(html`<fds-avatar name="raya hristova"></fds-avatar>`);
    await elementUpdated(el1);
    expect(shadowRoot(el1).textContent?.replace(/\s+/g, '')).equal('RH');

    const el2: Avatar = await fixture(html`<fds-avatar name="raya"></fds-avatar>`);
    await elementUpdated(el2);
    expect(shadowRoot(el2).textContent?.replace(/\s+/g, '')).equal('RA');
  });

  it('should be able to transform a short name', async () => {
    const el1: Avatar = await fixture(html`<fds-avatar shortName="RH" name="Raya"></fds-avatar>`);
    await elementUpdated(el1);
    expect(shadowRoot(el1).textContent?.replace(/\s+/g, '')).equal('RH');

    const el2: Avatar = await fixture(html`<fds-avatar dense shortName="RH" name="Raya"></fds-avatar>`);
    await elementUpdated(el2);
    expect(shadowRoot(el2).textContent?.replace(/\s+/g, '')).equal('R');

    const el3: Avatar = await fixture(html`<fds-avatar shortName="RHR" name="Raya"></fds-avatar>`);
    await elementUpdated(el3);
    expect(shadowRoot(el3).textContent?.replace(/\s+/g, '')).equal('RH');
  });

  it('should display an error if name is not defined ', async () => {
    try {
      await fixture(html`<fds-avatar shortName="raya hristova"></fds-avatar>`);
    } catch (e) {
      expect(e + '').equal('Error: Please specify a name to your avatar');
    }
  });

  it('Should display an error if both dense and large are used', async () => {
    try {
      await fixture(html`<fds-avatar large dense></fds-avatar>`);
    } catch (e) {
      expect(e + '').equal('Error: Cannot use both dense and large attribute');
    }
  });

  it('Should display an error if both primary and secondary are used', async () => {
    try {
      await fixture(html`<fds-avatar primary secondary></fds-avatar>`);
    } catch (e) {
      expect(e + '').equal('Error: Cannot use both primary and secondary attribute');
    }
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
