/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from "@finastra/menu";
import { SearchInput } from '@finastra/search-input';
import { elementUpdated, expect, fixture, html, triggerBlurFor, triggerFocusFor } from '@open-wc/testing';
import '../src/autocomplete.js';
import { Autocomplete } from '../src/autocomplete.js';

describe('Autocomplete', () => {
  let element: Autocomplete;
  beforeEach(async () => {
    element = await fixture(html`
      <fds-autocomplete aria-label="test">
        <fds-list-item value="One">One</fds-list-item>
        <fds-list-item value="Two">Two</fds-list-item>
        <fds-list-item value="Three">Three</fds-list-item>
      </fds-autocomplete>
    `);
  });
  it('should load accessibly', async () => {
    await elementUpdated(element);
    await expect(element).to.be.accessible();
  });

  it('should focus and blur', async () => {
    await triggerFocusFor(element);
    expect(document.activeElement === element).to.be.true;

    await triggerBlurFor(element);
    expect(document.activeElement === element).to.be.false;
  });

  it('should filter menu', async () => {
    await triggerFocusFor(element);
    const textInput: SearchInput | null | undefined = element.shadowRoot?.querySelector('.formElement');
    let data = '';
    element.addEventListener('input', (event: any) => (data = event.detail));
    textInput!.value = 'O';
    textInput?.dispatchEvent(new InputEvent('input', { bubbles: true }));
    await textInput?.updateComplete;
    await element?.updateComplete;
    expect(data).to.equal('O');
  });

  it('should not open menu if not found any suggestion', async () => {
    await triggerFocusFor(element);
    const textInput: SearchInput | null | undefined = element.shadowRoot?.querySelector('.formElement');
    const menu: Menu | undefined | null = element.shadowRoot?.querySelector('.mdc-menu');
    textInput!.value = 'ABC';
    textInput?.dispatchEvent(new InputEvent('input', { bubbles: true }));
    await textInput?.updateComplete;
    await element?.updateComplete;
    expect(menu?.open).to.equal(false);
  });

  it('should not open menu if minLengthToOpenMenu not validate', async () => {
    element.minLengthToOpenMenu = 4;
    await element?.updateComplete;
    await triggerFocusFor(element);
    const menu: Menu | undefined | null = element.shadowRoot?.querySelector('.mdc-menu');
    expect(menu?.open).to.equal(false);
  });
});
