import { html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { BaseCard } from '@finastra/base-card';

import { styles } from './styles.css';

export type ColorType = 'primary' | 'secondary';

@customElement('fds-app-card')
export class AppCard extends BaseCard {
  static styles = styles;

  @property({ type: String }) label;
  @property({ type: String }) shortLabel;
  @property({ type: String }) color: ColorType = 'primary';
  @property({ type: Boolean }) large = false;
  @property({ type: Boolean }) dense = false;
  @property({ type: Boolean }) extraDense = false;

  protected renderCardContent(): TemplateResult {
    return html`<span class="app-card-label">${this.label}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-app-card': AppCard;
  }
}
