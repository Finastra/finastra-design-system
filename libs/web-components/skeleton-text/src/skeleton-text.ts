import { customElement, html, LitElement } from 'lit-element';
import { styles } from './styles.css';

const componentName = 'fds-skeleton-text';

@customElement(componentName)
export class SkeletonText extends LitElement {
  static styles = styles;

  render() {
    return html`<span>&nbsp;</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: SkeletonText;
  }
}
