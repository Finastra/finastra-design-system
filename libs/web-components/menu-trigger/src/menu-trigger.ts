import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit-html';

import { Button } from '@finastra/button';
import '@material/mwc-icon';

import { styles } from './styles.css';

@customElement('fds-menu-trigger')
export class MenuTrigger extends Button {
  static styles = styles;

  @property({ type: Boolean }) on = false;
  @property({ type: Boolean }) secondary = false;
  @property({ type: String }) menuTrailingIcon = 'expand_more';

  constructor() {
    super();
    this.icon = 'apps';
    this.label = 'Launch';
    this.addEventListener('click', this.toggle);
  }

  render() {
    return html`
    <fds-button
      label='${this.label}'
      icon='${this.icon}'
      ?outlined='${this.outlined}'
      ?text='${this.text}'
      ?dense='${this.dense}'
      ?disabled='${this.disabled}'
      ?fullwidth='${this.fullwidth}'
      ?secondary='${this.secondary}'
    >
      <mwc-icon class="menu-trigger-icon">${this.menuTrailingIcon}</mwc-icon>
    </fds-button>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties: Map<string, unknown>) {
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
