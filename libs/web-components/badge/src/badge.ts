import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  inside = 'inside',
  edge = 'edge',
  outside = 'outside',
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
  @property({ reflect: true }) position: POSITION = POSITION.inside;


  render() {
    //const badgePostion = { inside: this.position === 'inside', edge: this.position === 'edge', outside: this.position === 'outside' };
    return html`<span class="badgeValue ${this.color?.toLowerCase()}  ${this.position?.toLowerCase()}" position=${this.position}>${this.value}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-badge': Badge;
  }
}
