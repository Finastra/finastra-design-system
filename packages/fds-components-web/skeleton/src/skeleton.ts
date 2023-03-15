import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

export const enum SKELETON_TYPE {
  CIRCLE = 'circle',
  TEXT = 'text',
  RECTANGLE = 'rectangle'
}

/**
 * @cssprop [--fds-skeleton-width=162px] - Height of the skeleton
 * @cssprop [--fds-skeleton-height=162px]- Width of the skeleton
 * @cssprop [--fds-skeleton-placeholder-color=var(--fds-on-surface-medium)]- Color of placeholder.
 * @cssprop [--fds-skeleton-background=var(--fds-surface-selected)] - Background color of the skeleton.
 *
 * @attr {string} [height] - Height of the skeleton
 * @attr {string} [width] - Width of the skeleton
 * @attr {circle|text|rectangle} [type=text] - Define the type of skeleton
 * @attr {h1|h2|h3|h4|h5|h6|small|p} [size=p] - Define the size of skeleton
 */
@customElement('fds-skeleton')
export class Skeleton extends LitElement {
  static styles = styles;

  @property({ type: String, reflect: true })
  type: 'circle' | 'text' | 'rectangle' = 'text';

  @property({ type: String, reflect: true })
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'p' = 'p';

  @property({ type: String })
  width?: string;

  @property({ type: String })
  height?: string;

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateWidth();
    this.updateHeight();
  }

  override willUpdate(_changedProperties: PropertyValues) {
    if (_changedProperties.has('width')) this.updateWidth();
    if (_changedProperties.has('height')) this.updateHeight();
  }

  updateWidth() {
    if (this.width) this.style.setProperty('width', this.width);
  }

  updateHeight() {
    if (this.height) this.style.setProperty('height', this.height);
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-skeleton': Skeleton;
  }
}
