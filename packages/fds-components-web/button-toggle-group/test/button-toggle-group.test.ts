import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/button-toggle-group.js';
import { ButtonToggle, ButtonToggleGroup } from '../src/index.js';

describe('ButtonToggleGroup', () => {
  it('loads accessibly', async () => {
    const el: ButtonToggleGroup = await fixture(html`
      <fds-button-toggle-group>
        <fds-button-toggle icon="favorite"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('should apply dense to all buttons', async () => {
    const el: ButtonToggleGroup = await fixture(html`
      <fds-button-toggle-group dense>
        <fds-button-toggle label="test"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    const button: ButtonToggle = el.children[0] as ButtonToggle;
    await elementUpdated(el);
    expect(button.hasAttribute('dense')).to.be.true;
    expect(button.classList.contains('selected')).to.be.true;
    expect(el.selectedIndex).equal(0);
    expect(el.value).equal('test');
  });

  it('should set selection', async () => {
    const el: ButtonToggleGroup = await fixture(html`
      <fds-button-toggle-group selected-index="1">
        <fds-button-toggle label="test1"></fds-button-toggle>
        <fds-button-toggle icon="test2"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    const button1: ButtonToggle = el.children[0] as ButtonToggle;
    const button2: ButtonToggle = el.children[1] as ButtonToggle;
    await elementUpdated(el);
    expect(button1.classList.contains('selected')).to.be.false;
    expect(button2.classList.contains('selected')).to.be.true;
    expect(el.selectedIndex).equal(1);
    expect(el.value).equal('test2');
  });

  xit('should change selection', async () => {
    const el = await fixture(html`
      <fds-button-toggle-group>
        <fds-button-toggle label="test1"></fds-button-toggle>
        <fds-button-toggle value="success"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    const toggle: ButtonToggleGroup = shadowRoot(el);
    await elementUpdated(toggle);
    const button: ButtonToggle = el.children[1] as ButtonToggle;
    button.click(); // this is not dispatching 'change' event
    expect(button.classList.contains('selected')).to.be.true;
    expect(toggle.selectedIndex).equal(1);
    expect(toggle.value).equal('success');
  });
});

function shadowRoot(el) {
  return el.shadowRoot || el;
}
