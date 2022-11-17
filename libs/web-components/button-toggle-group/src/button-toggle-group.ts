import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

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
  toggleButtons!: Array<HTMLElement>;

  @property({ type: Number })
  selectedIndex = 0;

  constructor() {
    super();
  }
  
  render() {
    return html`<div role="group">
      <slot @click="${this._select}"></slot>
    </div>`
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    const firstButton = this.toggleButtons[0];
    firstButton.classList.add('selected');
  }

  updated(changedProps) {
    super.updated(changedProps);
    const firstButton = this.toggleButtons[0] as LitElement;

    requestAnimationFrame(() => {
      const rect = firstButton.getBoundingClientRect();
      this.style.setProperty('--fds-toggle-selection-width', (rect.width) + 'px');
    });
  }

  private _select(e: Event) {
    const target: HTMLElement = e.target as HTMLElement;
    const rect:DOMRect = target.getBoundingClientRect();
    
    this._resetSelection();
    target.classList.add('selected');
    
    this.style.setProperty('--fds-toggle-selection-x', (target.offsetLeft - 5) + 'px');
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
