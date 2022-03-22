import { BaseCard } from '@finastra/base-card';
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum FLAG_TYPES {
  PUBLISHED = 'Published',
  DRAFT = 'Draft',
  IN_REVIEW = 'In Review',
  COMING_SOON = 'Coming Soon'
}

export interface Application {
  name: string;
  bannerClass?: string;
  lastModified?: string;
  description?: string;
  author?: string;
  icon?: string;
  flag?: FLAG_TYPES;
  tags?: string[];
  bookmarked?: boolean;
}

/**
 * @cssprop {color} [--fds-success=#008744] - Color of the Deployed flag.
 * @cssprop {color} [--fds-gray=#C7C8CA] - Color of the Draft flag.
 * @cssprop {color} [--fds-blue=#009CBD] - Color of the In Review flag.
 * @cssprop {color} [--fds-primary=#694ED6] - Start color of the gradient for Coming Soon flag.
 * @cssprop {color} [--fds-secondary=#C137A2] - End color of the gradient for Coming Soon flag.
 */
@customElement('fds-app-card')
export class AppCard extends BaseCard {
  static styles = styles;

  /** Application Object. */
  @property({ type: Object, reflect: true }) application = {} as Application;

  /** Make the card bigger. */
  @property({ type: Boolean }) large = false;

  /** Make the card extra small. */
  @property({ type: Boolean }) extraDense = false;

  protected renderCardContent(): TemplateResult {
    return html`
    <div class="app-card">
      <div ?hidden=${!this.application?.flag} class="app-flag ${this.application.flag?.toLowerCase()}">
        ${FLAG_TYPES[this.application.flag!]}
      </div>
      <div ?hidden=${this.extraDense} class="app-card-cover"></div>
      <div ?hidden=${this.extraDense} class="app-card-top">
        <div class="app-card-logo-container">
          <img loading="lazy" src="${this.application?.icon}" alt="Icon ${this.application?.name}">
        </div>
      </div>
      <div ?hidden=${!this.extraDense} class="app-card-logo-container">
        <img loading="lazy" src="${this.application?.icon}">
      </div>
      <div>
        <div class="app-card-name">${this.application?.name}</div>
        <div class="app-card-author">${this.application?.author}</div>
        <div ?hidden=${this.extraDense} class="app-card-description">${this.application?.description}</div>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-app-card': AppCard;
  }
}
