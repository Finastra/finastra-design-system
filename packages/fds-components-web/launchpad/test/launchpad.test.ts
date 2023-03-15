import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../src/launchpad.js';
import { Launchpad } from '../src/launchpad.js';

const TEST_DATA = [
  {
    name: 'App',
    shortName: 'App',
    'sso-initiation-urls': {
      web: 'https://app1.com'
    }
  }
];

describe('Launchpad', () => {
  it('loads accessibly', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad></fds-launchpad>`);
    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should open', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad></fds-launchpad>`);
    await elementUpdated(el);
    const triggerButton = el.getElementsByTagName('#trigger')[0] as HTMLElement;
    await triggerButton?.click();
    await expect(shadowRoot(el).querySelector('fds-menu'))?.to.be.accessible();
  });

  it('should dispatch selected event', async () => {
    const el: Launchpad = await fixture(html`<fds-launchpad .apps=${TEST_DATA}></fds-launchpad>`);
    await elementUpdated(el);
    setTimeout(() => {
      el.shadowRoot?.querySelector('fds-brand-card')?.dispatchEvent(new Event('click'));
    });
    const { detail } = await oneEvent(el, 'selected');
    expect(detail).to.exist;
  });

  it('should contain the tools', async () => {
    const el: Launchpad = await fixture(
      html`<fds-launchpad
        ><div slot="tools"><h3>test</h3></div></fds-launchpad
      >`
    );
    await elementUpdated(el);
    const triggerButton = el.getElementsByTagName('#trigger')[0] as HTMLElement;
    await triggerButton?.click();
    await expect(shadowRoot(el).querySelector('fds-menu .menu-body .menu-tools'))?.to.be.accessible();
  });
});

function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
