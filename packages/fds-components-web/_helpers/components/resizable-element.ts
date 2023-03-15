import { LitElement } from 'lit-element';

const BREAKPOINTS = { sm: 600, md: 720, lg: 960, xl: 1280, xxl: 1440 };

export class ResizeElement extends LitElement {
  width = 0;
  height = 0;
  resizeObserver;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(this.onResize);
    this.resizeObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
    this.resizeObserver = null;
  }

  private onResize(entries: ResizeObserverEntry[]) {
    requestAnimationFrame(async () => {
      const contentRect = entries[0].contentRect;
      const target = entries[0].target;

      Object.keys(BREAKPOINTS).forEach(function (breakpoint) {
        const minWidth = BREAKPOINTS[breakpoint];
        if (contentRect.width >= minWidth) {
          target.classList.add(breakpoint);
        } else {
          target.classList.remove(breakpoint);
        }
      });

      this.width = contentRect.width;
      this.height = contentRect.height;
    });
  }
}
