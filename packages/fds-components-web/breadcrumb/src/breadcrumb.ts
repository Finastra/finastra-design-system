import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

export interface Crumb {
  label: string;
  link: string;
}

/**
 * @attr {Array} [items=[]] - A list of items to display
 *
 * @cssprop [--fds-breadcrumb-divider=''/''] - Set the character used as divider between items
 * @cssprop {color} [--fds-breadcrumb-divider-color=auto] - Set the character used as divider between items
 */
@customElement('fds-breadcrumb')
export class Breadcrumb extends LitElement {
  static styles = styles;

  @property({ type: Array })
  items: Crumb[] = [];

  render() {
    return html` <nav class="breadcrumbs" role="navigation">
      <ul>
        ${this.items.map((item, index) => {
          return html`<li>${this.renderCrumb(item, index === this.items.length - 1)}</li>`;
        })}
      </ul>
    </nav>`;
  }

  private renderCrumb(item: Crumb, last: boolean) {
    return last
      ? html`<span part="span">${item.label}</span>`
      : html`<a href="${this.escapeUrl(item.link)}" part="a" @click=${(event) => this.handleItemClick(item, event)}>${item.label}</a>`;
  }

  private escapeUrl(text) {
    return text.replace(/"/g, '%22');
  }

  private handleItemClick(item: Crumb, event: PointerEvent): void {
    if (!event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent('selected', {
          bubbles: true,
          cancelable: true,
          detail: {
            item
          }
        })
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-breadcrumb': Breadcrumb;
  }
}
