import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ButtonToggle } from './button-toggle/button-toggle';

import { styles } from './styles.css';

/**
 * @fires change - Fired when selected value change.
 **/
@customElement('fds-button-toggle-group')
export class ButtonToggleGroup extends LitElement {
  static styles = styles;

  @queryAssignedElements()
  toggleButtons!: Array<ButtonToggle>;

  /**
   * Index of current selection, starts at 0
   */
  @property({ type: Number, attribute: 'selected-index' })
  selectedIndex = 0;

  /**
   * Current selected value
   */
  value = '';

  /**
   * Make the button toggle smaller
   */
  @property({ type: Boolean })
  dense = false;

  constructor() {
    super();
    document.fonts.ready.then(() => {
      this._updateSelection();
    });
  }

  render() {
    return html`<div role="radiogroup">
      <slot @FDSToggle:click="${this._handleClick}"></slot>
    </div>`;
  }

  async updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    const selectedButton = this.toggleButtons[this.selectedIndex] as ButtonToggle;

    if (!selectedButton) {
      return;
    }

    if (changedProperties.has('selectedIndex')) {
      await this.updateComplete;
      this._select(selectedButton);
    }

    if (changedProperties.has('dense')) {
      this.toggleButtons.forEach((btn) => {
        this.dense ? btn.setAttribute('dense', 'true') : btn.removeAttribute('dense');
      });
      this._updateSelection();
    }
  }

  private _select(button: ButtonToggle) {
    this._resetSelection();
    this._updateSelection();
    this.value = button.getAttribute('value') || button.getAttribute('label') || button.getAttribute('icon') || '';
    button.classList.add('selected');
  }

  private _resetSelection() {
    this.toggleButtons.forEach((button) => {
      button.classList.remove('selected');
    });
  }

  private _updateSelection() {
    const selection = this.toggleButtons[this.selectedIndex] as ButtonToggle;
    const rect: DOMRect = selection?.getBoundingClientRect();

    this.style.setProperty('--fds-toggle-selection-x', selection?.offsetLeft - 5 + 'px');
    this.style.setProperty('--fds-toggle-selection-width', rect?.width + 'px');
  }

  private _handleClick(e: Event) {
    const button: ButtonToggle = e.target as ButtonToggle;
    const options = {
      bubbles: true,
      composed: true
    };

    this.selectedIndex = this.toggleButtons.indexOf(button);
    this._select(button);
    this.dispatchEvent(new Event('change', options));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle-group': ButtonToggleGroup;
  }
}
