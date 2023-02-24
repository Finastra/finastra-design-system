import { BaseCard } from '@finastra/card';
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { renderPrimarySVG, renderSecondarySVG } from './brand-card-decorations';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the default ribbon
 * @cssprop {color} [--fds-secondary=#C137A2] - Color of the secondary ribbon
 */
@customElement('fds-brand-card')
export class BrandCard extends BaseCard {
  static styles = styles;

  /** App card label */
  @property({ type: String }) label;

  /** Optional app card displayed label */
  @property({ type: String }) shortLabel = '';

  /** Color and ribbon type */
  @property({ type: Boolean }) secondary = false;

  /** Make the card bigger */
  @property({ type: Boolean }) large = false;

  /** Make the card smaller */
  @property({ type: Boolean }) dense = false;

  /** Make the card extra small */
  @property({ type: Boolean }) extraDense = false;

  protected renderCardContent(): TemplateResult {
    if ([this.large, this.dense, this.extraDense].filter((val) => val === true).length > 1) {
      console.warn('[Brand Card]: Cannot use multiple size attributes at the same time, default size has been applied');
    }
    return html`<div class="brand-card" title="${this.label}">
      <span class="brand-card-label">${this.shortLabel || this.formatItemName(this.label)}</span>
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
    'fds-brand-card': BrandCard;
  }
}
