import { BaseCard } from '@finastra/card';
import '@finastra/chip';
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum FLAG_TYPES {
  PUBLISHED = 'Published',
  DRAFT = 'Draft',
  IN_REVIEW = 'In Review',
  COMING_SOON = 'Coming Soon'
}

/**
 * @cssprop {color} [--fds-success=#008744] - Color of the Deployed flag.
 * @cssprop {color} [--fds-gray=#C7C8CA] - Color of the Draft flag.
 * @cssprop {color} [--fds-blue=#009CBD] - Color of the In Review flag.
 * @cssprop {color} [--fds-primary=#694ED6] - Start color of the gradient for Coming Soon flag.
 * @cssprop {color} [--fds-secondary=#C137A2] - End color of the gradient for Coming Soon flag.
 * @attr [name=''] - Application name.
 * @attr [description=''] - Application description.
 * @attr [author=''] - Application author.
 * @attr [icon=''] - Application icon url.
 * @attr [flag=''] - Application flag should be `PUBLISHED` | `DRAFT` | `IN_REVIEW` | `COMING_SOON`.
 * @attr [tags=''] - Application tags.
 * @attr [large=false] - Make the card bigger.
 * @attr [extraDense=false] - Make the card extra small.
 */
@customElement('fds-app-card')
export class AppCard extends BaseCard {
  static styles = styles;
  @property({ type: String }) name = '';
  @property({ type: String }) description = '';
  @property({ type: String }) author = '';
  @property({ type: String }) icon = '';
  @property({ type: String }) flag = '';
  @property({ type: Array }) tags: string[] = [];
  @property({ type: Boolean }) large = false;
  @property({ type: Boolean }) extraDense = false;

  constructor() {
    super();
    this.selectable = true;
  }

  protected renderCardContent(): TemplateResult {
    return html`
      <div class="app-card">
        <div ?hidden=${!this.flag} class="app-flag ${this.flag?.toLowerCase()}">${FLAG_TYPES[this.flag!]}</div>
        <div ?hidden=${this.extraDense} class="app-card-cover"></div>
        <div ?hidden=${this.extraDense} class="app-card-top">
          <div class="app-card-logo-container">
            ${this?.icon
              ? html`<img loading="lazy" src="${this?.icon}" alt="Logo ${this?.name}" />`
              : html`<div class="app-card-logo-fallback" title="Logo Finastra Fallback"></div>`}
          </div>
        </div>
        <div ?hidden=${!this.extraDense} class="app-card-logo-container">
          <img loading="lazy" src="${this?.icon}" />
        </div>
        <div>
          <div class="app-card-name">${this?.name}</div>
          <div class="app-card-author">${this?.author}</div>
          ${this?.tags.length
            ? html`<div class="app-card-tags">${this.tags.map((tag) => html`<fds-chip dense selected label="${tag}"></fds-chip>`)}</div>`
            : html``}
          <div ?hidden=${this.extraDense} class="app-card-description">${this?.description}</div>
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
