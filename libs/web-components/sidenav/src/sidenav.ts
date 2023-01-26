import { events as APP_BAR_EVENTS } from '@finastra/app-bar/dist/src/constants';
import '@material/mwc-drawer';
import { Drawer } from '@material/mwc-drawer';
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum DRAWER_TYPES {
  NONE = '',
  DISMISSIBLE = 'dismissible',
  MODAL = 'modal'
}

/**
 * @slot sidenavContent - Content of the sidenav
 * @slot navigation - Navigational elements
 * @slot appContent - Content of the app
 */
@customElement('fds-sidenav')
export class Sidenav extends LitElement {
  static styles = styles;

  /**
   * @type {""|"dismissible"|"modal"} type - Type of drawer, inherited from mwc-drawer
   */
  @property({ reflect: true }) type: DRAWER_TYPES = DRAWER_TYPES.NONE;

  @query('mwc-drawer') protected drawer!: Drawer;

  constructor() {
    super();
    this.registerEventLister();
  }

  render() {
    return html`<mwc-drawer .type=${this.type}>
      <div class="drawer-content">
        <slot name="sidenavContent"></slot>
        <div class="navigation">
          <slot name="navigation"></slot>
        </div>
      </div>
      <div slot="appContent" class="app">
        <slot name="appContent"></slot>
      </div>
    </mwc-drawer>`;
  }

  registerEventLister() {
    this.addEventListener(APP_BAR_EVENTS.NAVIGATION, () => {
      this.drawer.open = !this.drawer.open;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-sidenav': Sidenav;
  }
}
