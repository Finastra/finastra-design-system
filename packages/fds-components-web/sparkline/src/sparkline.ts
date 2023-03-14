import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

const amplitude = 25;

@customElement('fds-sparkline')
export class Sparkline extends LitElement {
  static styles = styles;

  /**
   * An array of numbers
   */
  @property({ type: Object })
  data = [];

  render() {
    return html`<svg
      width="100%"
      height="100%"
      viewBox="0 0 100 ${amplitude + 10}"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop class="gradient-color" offset="0" stop-opacity=".12" />
          <stop class="gradient-color" offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="sparkline" d="${this.renderPath()}" fill="url(#gradient)" />
    </svg>`;
  }

  protected renderPath() {
    const stepX = 102 / (this.data.length - 1);
    const stepY = (amplitude - 1) / Math.max(...this.data);
    let xPos = -1;
    let path = 'M-1 ' + (amplitude + 10).toString();
    this.data.forEach((value) => {
      path += 'L';
      path += xPos.toFixed().toString();
      path += ' ';
      path += (amplitude - value * stepY).toFixed().toString();
      xPos += stepX;
    });
    path += 'L101 ' + (amplitude + 10).toString();
    return path;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-sparkline': Sparkline;
  }
}
