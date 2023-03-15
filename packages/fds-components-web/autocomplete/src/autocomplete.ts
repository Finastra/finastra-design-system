import { ListItem } from '@finastra/list';
import '@finastra/menu';
import { Menu } from '@finastra/menu';
import '@finastra/search-input';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles.css';

@customElement('fds-autocomplete')
export class Autocomplete extends LitElement {
  static styles = styles;

  @state() protected menuOpen = false;
  @state() protected isUiValid = true;
  @state() protected selectedText = '';

  @query('.formElement') protected formElement!: HTMLInputElement;
  @query('slot') protected slotElement!: HTMLSlotElement | null;
  @query('select') protected nativeSelectElement!: HTMLSelectElement | null;
  @query('.fds-autocomplete') protected anchorElement!: HTMLDivElement | null;
  @query('.mdc-menu') protected menuElement!: Menu | null;
  @query('fds-menu slot') protected listItemSlot!: HTMLSlotElement;

  @property({ type: String }) icon = '';
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) showClearButton = false;
  @property({ type: String }) value = '';
  @property({ type: Number }) minLengthToOpenMenu = 0;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) useInnerFilter = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) placeholder = '';
  @property({ type: String }) name = '';

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = '';

  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledBy = '';

  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedBy = '';

  protected _menuUpdateComplete: null | Promise<unknown> = null;

  protected onBodyClickBound?: (evt: MouseEvent) => void;

  protected onInputFocus() {
    this._validateOpenMenu();
  }

  protected onInputBlur(event: Event) {
    if (!this.menuOpen) {
      this.blur();
    } else {
      event.preventDefault();
    }
  }

  blur() {
    const blurEvt = new CustomEvent('blur');
    this.dispatchEvent(blurEvt);
    this.formElement.blur();
  }

  focus() {
    const focusEvt = new CustomEvent('focus');
    this.dispatchEvent(focusEvt);
    this.formElement.focus();
  }

  protected _validateOpenMenu() {
    if (this.disabled || (this.minLengthToOpenMenu > 0 && this.value.length < this.minLengthToOpenMenu)) {
      this.menuOpen = false;
      return;
    }

    if (this.useInnerFilter) {
      const nbtItems = this._innerFilter();
      if (nbtItems === 0) {
        this.menuOpen = false;
        return;
      }
    }

    this.menuOpen = true;
  }

  /**
   * Filter suggestion menu by value.
   */
  protected _innerFilter() {
    const listItems = this.listItemSlot.assignedNodes().filter((item) => {
      return (item as HTMLElement).localName === 'fds-list-item';
    });
    let count = 0;
    listItems.forEach((item) => {
      const listItem = item as ListItem;
      if (
        !listItem.getAttribute('value') ||
        listItem.getAttribute('value')?.toLocaleLowerCase().indexOf(this.value.toLocaleLowerCase()) === -1
      ) {
        listItem.classList.add('fds-list-item__hide');
      } else {
        listItem.classList.remove('fds-list-item__hide');
        count++;
      }
    });

    return count;
  }

  protected onSearchInputChange() {
    this.value = this.formElement.value;
    this._validateOpenMenu();
    this.dispatchInputEvent();
  }

  protected dispatchInputEvent() {
    const inputEvent = new CustomEvent('input', { detail: this.value });
    this.dispatchEvent(inputEvent);
  }

  protected onMenuOpened() {
    this.menuOpen = true;
    this.registerBodyClick();
  }

  protected onMenuClosed() {
    this.menuOpen = false;
    this.deregisterBodyClick();
  }

  protected async getUpdateComplete() {
    await this._menuUpdateComplete;
    const result = await super.getUpdateComplete();
    return result;
  }

  protected async firstUpdated(_changedProperties: PropertyValues) {
    const menuElement = this.menuElement;

    if (menuElement) {
      this._menuUpdateComplete = menuElement.updateComplete;
      await this._menuUpdateComplete;
    }

    super.firstUpdated(_changedProperties);
  }

  protected onBodyClick(evt: MouseEvent) {
    const path = evt.composedPath();
    if (this.menuOpen && path.indexOf(this) === -1) {
      this.menuOpen = false;
    }
  }

  protected registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this);
    // capture otherwise listener closes menu after quick menu opens
    document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
  }

  protected deregisterBodyClick() {
    if (this.onBodyClickBound) document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
  }

  protected onMenuSelected() {
    const selectedItem = this.menuElement?.selected as unknown as ListItem;
    if (selectedItem) {
      this.value = selectedItem.value;
    }
  }

  protected handleKeyDown(event: KeyboardEvent) {
    if (!this.menuOpen) {
      return;
    }
    let selectedIndex = this.menuElement?.index as number;
    const length = this.menuElement?.items.length ?? 0;
    switch (event.key) {
      case 'Down':
      case 'ArrowDown':
        selectedIndex++;
        if (selectedIndex >= length) selectedIndex = length - 1;
        this.menuElement?.select(selectedIndex);
        event.preventDefault();
        break;
      case 'Up':
      case 'ArrowUp':
        selectedIndex--;
        if (selectedIndex < 0) selectedIndex = 0;
        this.menuElement?.select(selectedIndex);
        event.preventDefault();
        break;
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        this.menuOpen = false;
        event.preventDefault();
        break;
    }
  }

  render() {
    return html`
      <div class="fds-autocomplete">
        <fds-search-input
          class="formElement"
          .value="${this.value}"
          .icon="${this.icon}"
          .loading="${this.loading}"
          .showClearButton="${this.showClearButton}"
          ?disabled="${this.disabled}"
          ?required=${this.required}
          label="${ifDefined(this.ariaLabel)}"
          placeholder="${ifDefined(this.placeholder)}"
          @keydown=${this.handleKeyDown}
          @focus=${this.onInputFocus}
          @blur=${this.onInputBlur}
          @input=${this.onSearchInputChange}
        ></fds-search-input>

        <fds-menu
          activatable
          wrapFocus
          class="mdc-menu"
          .fullwidth=${true}
          .open=${this.menuOpen}
          corner="BOTTOM_START"
          .stayOpenOnBodyClick=${true}
          .anchor=${this.anchorElement}
          defaultFocus="NONE"
          innerRole="listbox"
          @opened=${this.onMenuOpened}
          @closed=${this.onMenuClosed}
          @selected=${this.onMenuSelected}
        >
          <slot></slot>
        </fds-menu>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-autocomplete': Autocomplete;
  }
}
