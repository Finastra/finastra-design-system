
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';


@customElement('fds-wizard-page')
export class WizardPage extends LitElement {
  static styles = styles;

  @property({ type: String })
  title = '';
  @property({ type: String })
  description = '';

  @property({ type: Boolean })
  selected = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`<div class="card">
    <h3>${this.title}</h3>
    <slot></slot>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard-page': WizardPage;
  }
}
