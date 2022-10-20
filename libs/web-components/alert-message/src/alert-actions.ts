import "@finastra/icon";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


/**
 * @attr {info|error|success|warning} [type=text] - Define the alert type
 */


@customElement('fds-alert-actions')
export class AlertActions extends LitElement {
  render() {
    return html`
        <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-alert-actions': AlertActions;
  }
}
