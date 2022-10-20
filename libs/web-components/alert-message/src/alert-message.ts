import "@finastra/icon";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export const enum ALERT_TYPE {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}

/**
 * @attr {info|error|success|warning} [type=text] - Define the alert type
 */


@customElement('fds-alert-message')
export class AlertMessage extends LitElement {
  static styles = styles;

  @property({ type: String, reflect: true })
  type: 'info' | 'error' | 'success' | 'alert' = 'success';

  render() {
    return html`
      <div class="env-message">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-alert-message': AlertMessage;
  }
}
