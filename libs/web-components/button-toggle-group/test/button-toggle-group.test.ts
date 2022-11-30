import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/button-toggle-group.js';
import { ButtonToggleGroup } from '../src/button-toggle-group.js';
import { ButtonToggle } from '../src/index.js';

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
      <fds-button-toggle-group selectedIndex="1">
        <fds-button-toggle label="test1"></fds-button-toggle>
        <fds-button-toggle label="test2"></fds-button-toggle>
      </fds-button-toggle-group>
    `);

    const button: ButtonToggle = el.children[1] as ButtonToggle;
    await elementUpdated(el);
    expect(button.classList.contains('selected')).to.be.true;
    expect(el.selectedIndex).equal(1);
    expect(el.value).equal('test2');
  });

  it('should change selection', async () => {
    const el: ButtonToggleGroup = await fixture(html`
      <fds-button-toggle-group>
        <fds-button-toggle label="test1"></fds-button-toggle>
        <fds-button-toggle label="test2"></fds-button-toggle>
      </fds-button-toggle-group>
    `);
    
    const button: ButtonToggle = el.children[1] as ButtonToggle;
    await elementUpdated(el);
    await new Promise((resolve) => {
      el.addEventListener('change', resolve);
      button.click();
    });
    await elementUpdated(el);


    expect(button.classList.contains('selected')).to.be.true;
    expect(el.selectedIndex).equal(1);
    expect(el.value).equal('test2');

  });
});
