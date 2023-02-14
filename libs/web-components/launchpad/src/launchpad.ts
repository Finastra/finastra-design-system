import '@finastra/brand-card';
import '@finastra/button';
import { Menu } from '@finastra/menu';
import '@finastra/menu-trigger';
import { MenuTrigger } from '@finastra/menu-trigger';
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

export interface UxApp {
  name: string;
  shortName?: string;
  'sso-initiation-urls'?: SsoUrl;
}

export interface SsoUrl {
  iframe?: string;
  web?: string;
}

@customElement('fds-launchpad')
export class Launchpad extends LitElement {
  static styles = styles;

  @query('#trigger') protected trigger!: MenuTrigger | null;

  @query('#launchpad') protected launchpad!: Menu | null;

  /**
   * List of ux-apps.
   */
  @property({ type: Array }) apps: UxApp[] = [];

  /**
   * Name of application name property of type string that will be used by the product card.
   */
  @property({ type: String }) appNameProperty = 'name';

  /**
   * Name of the short application name property used by the product card.
   */
  @property({ type: String }) shortAppNameProperty = 'shortName';

  /**
   * Title used by the menu trigger.
   */
  @property({ type: String }) title = 'Apps';

  constructor() {
    super();
  }

  render() {
    return html`
      <fds-menu-trigger @click="${() => this.launchpad!.show()}" outlined id="trigger" dense></fds-menu-trigger>
      <fds-menu id="launchpad" fullwidth @closed=${this._onClosed}>
        <div class="menu-body">
          <div class="app-content">
            <div class="app-title">${this.title}</div>
            <div class="brandcard-list">
              ${this.apps && this.apps.length > 0
                ? this.apps.map(
                    (app) =>
                      html`
                        <div class="brandcard-item">
                          <fds-brand-card
                            @click="${() => this._handleItemClick(app)}"
                            label="${app[this.appNameProperty]}"
                            shortLabel="${app[this.shortAppNameProperty]}"
                            class="brandcard"
                            extraDense
                            secondary
                          ></fds-brand-card>
                          <div class="brandcard-name">${app[this.appNameProperty]}</div>
                        </div>
                      `
                  )
                : ''}
            </div>
          </div>
          <div class="menu-tools">
            <slot name="tools"></slot>
          </div>
        </div>
        <div class="bottom-action">
          <fds-button
            @click="${() => this._handleLaunchpageClick()}"
            outlined
            primary
            label="Back to launchpage"
            icon="chevron_left"
          ></fds-button>
        </div>
      </fds-menu>
    `;
  }

  private _handleItemClick(app: UxApp) {
    this.dispatchEvent(
      new CustomEvent('selected', {
        bubbles: true,
        cancelable: true,
        detail: {
          app
        }
      })
    );
  }

  private _handleLaunchpageClick() {
    this.dispatchEvent(
      new CustomEvent('launchpage', {
        bubbles: true,
        cancelable: true
      })
    );
  }

  private _onClosed() {
    if (this.trigger!.on) {
      this.trigger!.toggle();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.launchpad!.anchor = this.trigger;
      this.launchpad!.x = -420;
      this.launchpad!.y = 0;
    }, 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-launchpad': Launchpad;
  }
}
