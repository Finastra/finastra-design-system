import { OutlinedButton } from '@finastra/button';
import '@finastra/icon';
import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-menu-trigger')
export class MenuTrigger extends OutlinedButton {
  static styles = [OutlinedButton.styles, styles];

  /**
   * Whether the toggle is activated.
   */
  @property({ type: Boolean }) on = false;

  /**
   * Whether the toggle button should be using secondary.
   */
  @property({ type: Boolean }) secondary = false;

  protected menuTrailingIcon = 'expand_more';

  get _menuTrailingIcon() {
    return this.menuTrailingIcon;
  }

  constructor() {
    super();
    this.icon = 'apps';
    this.label = 'Launch';
    this.addEventListener('click', this.toggle);
  }

  render() {
    return html`
      <fds-outlined-button
        label="${this.label}"
        icon="${this.icon}"
        ?dense="${this.dense}"
        ?disabled="${this.disabled}"
        ?fullwidth="${this.fullwidth}"
        ?secondary="${this.secondary}"
      >
        <fds-icon class="menu-trigger-icon">${this.menuTrailingIcon}</fds-icon>
      </fds-outlined-button>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties) {
    this.menuTrailingIcon = this.on ? 'expand_less' : 'expand_more';
    super.update(changedProperties);
  }

  toggle() {
    this.on = !this.on;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-menu-trigger': MenuTrigger;
  }
}
