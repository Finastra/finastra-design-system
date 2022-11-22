import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ButtonToggle } from './button-toggle/button-toggle';

import { styles } from './styles.css';

/**
 * @attr {boolean} [dense=false] - Make the button toggle smaller.
 * @cssprop [--fds-button-toggle-min-width=30px] - Button toggle min width
 * @cssprop [--fds-button-toggle-height=48px] - Button toggle height.
 * @cssprop [--fds-button-toggle-width=100%] - Button toggle width.
 * @cssprop [--fds-icon-width=24px] - icon width.
 * @cssprop [--fds-icon-height=24px] - icon height.
 * @cssprop [--fds-icon-size=24px] - icon size.
 **/

@customElement('fds-button-toggle-group')
export class ButtonToggleGroup extends LitElement {
  static styles = styles;

  @queryAssignedElements()
  toggleButtons!: Array<ButtonToggle>;

  @property({ type: Number })
  selectedIndex = 0;

  @property({ type: Boolean })
  dense = false;

  constructor() {
    super();

    this.addEventListener('click', (e: Event) => {
      this._select(e.target as HTMLElement)
    });
  }
  
  render() {
    return html`<div role="group">
      <slot></slot>
    </div>`
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    const selectedButton = this.toggleButtons[this.selectedIndex] as LitElement;

    if (changedProperties.has('selectedIndex')) {
      this._select(selectedButton);
    }

    if (changedProperties.has('dense')) {
      this.toggleButtons.forEach((btn) => {
        this.dense ? btn.setAttribute('dense', 'true') : btn.removeAttribute('dense');
      });
    }

    requestAnimationFrame(() => {
      const rect = selectedButton.getBoundingClientRect();
      this.style.setProperty('--fds-toggle-selection-width', (rect.width) + 'px');
    });
  }

  private _select(button: HTMLElement) {
    const rect:DOMRect = button.getBoundingClientRect();
    
    if (button instanceof ButtonToggle === false) {
      return;
    }

    this._resetSelection();
    button.classList.add('selected');
    
    this.style.setProperty('--fds-toggle-selection-x', (button.offsetLeft - 5) + 'px');
    this.style.setProperty('--fds-toggle-selection-width', (rect.width) + 'px');
  }

  private _resetSelection() {
    this.toggleButtons.forEach(button => {
      button.classList.remove('selected');
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle-group': ButtonToggleGroup;
  }
}
