import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';



@customElement('fds-breadcrumb')
export class Breadcrumb extends LitElement {
  static styles = styles;

  @property({ type: Array })
  items: string[] = [];

  handleItemClick(item: string, index: number):void {
    this.dispatchEvent(new CustomEvent('select', {
      bubbles: true,
      cancelable: true,
        detail: {
          item,
          index
        }
    }))
  }

  render() {
    return html`<ul>
      ${this.items.map((item, index) => {
        return html`
        <li @click=${() => this.handleItemClick(item, index)}>
          ${item}
        </li>
        `
      })}
    </ul>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-breadcrumb': Breadcrumb;
  }
}
