import { customElement, property } from 'lit/decorators.js';
import { LitElement } from 'lit';

import { styles } from './styles.css';

@customElement('fds-divider')
export class Divider extends LitElement {
  static styles = styles;

  @property({ reflect: true, type: Boolean })
  vertical = false;

  @property({ reflect: true, type: String })
  inset: 'both' | 'left' | 'right' | undefined = undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-divider': Divider;
  }
}
