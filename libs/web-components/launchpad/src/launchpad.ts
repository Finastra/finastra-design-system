import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@finastra/app-card';
import '@finastra/button';
import '@finastra/menu-trigger';
import '@material/mwc-icon-button';
import '@material/mwc-menu';

import { styles } from './styles.css';
import { MenuTrigger } from '@finastra/menu-trigger';
import { Menu } from '@material/mwc-menu';

@customElement('fds-launchpad')
export class Launchpad extends LitElement {
  static styles = styles;

  @query('#trigger') protected trigger!: MenuTrigger | null;

  @query('#launchpad') protected launchpad!: Menu | null;

  @property({ type: Array }) apps: any[] = [];
  @property({ type: String }) appNameProperty = 'name';
  @property({ type: String }) shortAppNameProperty = '';
  @property({ type: String }) title = 'Apps';
  @property({ type: String }) baseUrl = 'https://myapps.fusionfabric.cloud';
  @property({ type: String }) tenantId = '';
  @property({ type: String }) channelType = '';

  private launchpageUrl = '';

  constructor() {
    super();
    const url = new URL(window.location.href);
    if (!this.tenantId.length) {
      // tenantId will always be the first pathname param
      this.tenantId = url.pathname.split('/')[1];
      if (!this.tenantId.length) {
        console.error("tenantId not found");
      }
    }
    if (!this.channelType.length) {
      const channel = url.pathname.split('/')[2];
      // as channelType is optional it must match b2c or b2e
      this.channelType = (channel === 'b2c' || channel === 'b2e') ? channel : '';
    }
    // make sure baseUrl do not finish with /
    this.baseUrl = this.baseUrl[this.baseUrl.length - 1] === '/' ? this.baseUrl.slice(0, -1) : this.baseUrl;
    // build the launchpageUrl
    this.launchpageUrl = `${this.baseUrl}/${this.tenantId}${this.channelType.length ? `/${this.channelType}` : ''}`
  }

  render() {
    return html`
      <fds-menu-trigger @click='${() => this.launchpad!.show()}' outlined id='trigger'></fds-menu-trigger>
      <mwc-menu id='launchpad' fullwidth @closed=${this._onClosed}>
        <div class='top-action'>
          <mwc-icon-button @click='${() => this.launchpad!.close()}' secondary icon='close'></mwc-icon-button>
        </div>
        <div class='menu-body'>
          <div class='app-content'>
            <div class='app-title'>${this.title}</div>
            <div class='appcard-list'>
              ${(this.apps && this.apps.length > 0) ?
                  this.apps.map((app:any) =>
                    html`
                      <div>
                        <fds-app-card @click='${() => this._handleAppCardClick(app)}' label='${app[this.appNameProperty]}' shortLabel='${app[this.shortAppNameProperty]}' class='appcard-item' extraDense secondary></fds-app-card>
                        <div class="appcard-name">${app[this.appNameProperty]}</div>
                      </div>
                    `
                  )
                  : ""
              }
            </div>
          </div>
          <div class="menu-tools">
            <slot name='tools'></slot>
          </div>
        </div>
        <div class='bottom-action'>
          <fds-button @click='${() => this._handleLaunchpageClick()}' outlined primary label='Back to launchpage' icon='chevron_left'></fds-button>
        </div>
      </mwc-menu>
    `;
  }

  private _handleAppCardClick(app: any) {
    window.location.replace(`${this.launchpageUrl}/applications/${app[this.appNameProperty]}`);
  }

  private _handleLaunchpageClick() {
    window.location.replace(this.launchpageUrl);
  }

  private _onClosed() {
    if (this.trigger!.on) {
      this.trigger!.toggle();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-launchpad': Launchpad;
  }
}
