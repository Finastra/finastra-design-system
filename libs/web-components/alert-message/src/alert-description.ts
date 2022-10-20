import "@finastra/icon";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './alert-description.css';


/**
 * @attr {info|error|success|alert} [type=text] - Define the alert type
 */

@customElement('fds-alert-description')
export class AlertDescription extends LitElement {
  static styles = styles;
  render() {
    return html`
    <div class="message">
      <div>
        <slot class="message-icon" name="icon"></slot>
      </div>
      <div class="description">
        <slot name="title"></slot>
        <slot name="description"></slot>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-alert-description': AlertDescription;
  }
}
