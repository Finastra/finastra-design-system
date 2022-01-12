import { html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { BaseCard } from '@finastra/base-card';

import { styles } from './styles.css';
import { renderPatternSVG, renderPrimarySVG, renderSecondarySVG } from './app-card-decorations';

@customElement('fds-app-card')
export class AppCard extends BaseCard {
  static styles = styles;

  @property({ type: String }) label;
  @property({ type: String }) shortLabel;
  @property({ type: Boolean }) secondary = false;
  @property({ type: Boolean }) large = false;
  @property({ type: Boolean }) dense = false;
  @property({ type: Boolean }) extraDense = false;

  protected renderCardContent(): TemplateResult {
    if ([this.large, this.dense, this.extraDense].filter((val) => val === true).length > 1) {
      console.warn('[App Card]: Cannot use multiple size attributes at the same time.');
    }
    return html`<div class="app-card" title="${this.label}">
      ${renderPatternSVG()}
      <span class="app-card-label">${this.shortLabel || this.formatItemName(this.label)}</span>
      ${this.secondary ? renderSecondarySVG() : renderPrimarySVG()}
    </div>`;
  }

  formatItemName(name: string) {
    if (name) {
      return name
        .split(' ')
        .map((str) => str.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 3);
    }
    return name;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-app-card': AppCard;
  }
}
