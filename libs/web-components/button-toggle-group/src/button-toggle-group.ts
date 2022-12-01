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
  @property({ type: Number })
  selectedIndex: number = 0;

  /**
   * Current selected value
   */
  value: string = '';
  
  /**
   * Make the button toggle smaller
   */
  @property({ type: Boolean })
  dense = false;

  constructor() {
    super();
  }
  
  render() {
    return html`<div role="radiogroup">
      <slot @FDSToggle:click="${this._handleClick}"></slot>
    </div>`
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    const selectedButton = this.toggleButtons[this.selectedIndex] as ButtonToggle;
    
    if (!selectedButton) {
      return;
    }
    
    if (changedProperties.has('selectedIndex')) {
      this._select(selectedButton);

      requestAnimationFrame(() => {
        const rect = selectedButton.getBoundingClientRect();
        this.style.setProperty('--fds-toggle-selection-x', (selectedButton.offsetLeft - 5) + 'px');
        this.style.setProperty('--fds-toggle-selection-width', (rect.width) + 'px');
      });
    }

    if (changedProperties.has('dense')) {
      this.toggleButtons.forEach((btn) => {
        this.dense ? btn.setAttribute('dense', 'true') : btn.removeAttribute('dense');
      });
      this._select(selectedButton);
    }
  }

  private _select(button: ButtonToggle) {
    const rect:DOMRect = button.getBoundingClientRect();

    this._resetSelection();
    button.classList.add('selected');
    
    this.style.setProperty('--fds-toggle-selection-x', (button.offsetLeft - 5) + 'px');
    this.style.setProperty('--fds-toggle-selection-width', (rect.width) + 'px');

    this.value = button.getAttribute('value') || button.getAttribute('label') || button.getAttribute('icon') || '';
  }

  private _resetSelection() {
    this.toggleButtons.forEach(button => {
      button.classList.remove('selected');
    });
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
