import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  topLeft = 'topLeft',
  topRight = 'topRight',
  center = 'center'
}

@customElement('fds-badge')
export class Badge extends LitElement {
  static styles = styles;

  @property({ type: String })
  value = '';

  @property({ type: String })
  color = 'primary';

  @property({ type: String })
  type = '';

  /**
   * @type {"inside"|"edge"|"outside"} badgePositon - Badge postion
   */
  @property({ reflect: true }) position: POSITION = POSITION.center;


  render() {
    return html`<span class="badgeValue ${this.color?.toLowerCase()}  ${this.position?.toLowerCase()}" position=${this.position}>${this.value}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-badge': Badge;
  }
}
