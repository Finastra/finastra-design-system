
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';


@customElement('fds-wizard-page')
export class WizardPage extends LitElement {
  static styles = styles;

  @property({ type: String })
  title = '';

  @property({ type: String })
  icon = '';

  @property({ type: String })
  description = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  current = false;

  render() {
    return html`
    <div class="header">
      <div class="icon">${this.icon}</div>
      <div class="title">${this.title}</div>
    </div>
    <div class="page-container">
      <div class="content">
        <slot></slot>
      </div>  
    </div>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard-page': WizardPage;
  }
}
