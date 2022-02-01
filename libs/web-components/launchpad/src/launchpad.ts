import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@finastra/menu-trigger';
import '@finastra/app-card';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-list';
import '@material/mwc-menu';

import { styles } from './styles.css';
import { MenuTrigger } from '@finastra/menu-trigger';
import { Menu } from '@material/mwc-menu';

@customElement('fds-launchpad')
export class Launchpad extends LitElement {
  static styles = styles;

  @query('#trigger') trigger!: MenuTrigger | null;

  @query('#launchpad') launchpad!: Menu | null;

  @property({ type: Array }) apps = [];
  @property({ type: String }) appNameProperty = 'name';
  @property({ type: String }) shortAppNameProperty = 'shortName';
  @property({ type: String }) title = 'Apps';
  @property({ type: String }) redirectHomeUrl = '';
  @property({ type: String }) baseUrl = 'https://myapps.fusionfabric.cloud/';
  @property({ type: String }) tenantId = '';
  @property({ type: String }) channelType = '';

  constructor() {
    super();
    if (!this.tenantId.length) {
      //try to get the tenant & channel from the url
      const url = new URL(window.location.href);
      this.tenantId = url.pathname.split('/')[1];
      //handle the case without channel
      const channel = url.pathname.split('/')[2];
      this.channelType = (channel === 'b2c' || channel === 'b2e') ? channel : '';
    }
  }

  render() {
    return html`
      <fds-menu-trigger @click='${() => this.launchpad!.show()}' id='trigger' primary outlined label='Launch'></fds-menu-trigger>
      <mwc-menu id='launchpad' fullwidth @closed=${this._onClosed}>
        <div class='top-action'>
          <mwc-icon-button @click='${() => this.launchpad!.close()}' secondary icon='close'></mwc-icon-button>
        </div>
        <div class='menu-body'>
          <div class='app-content'>
            <div class='app-title'>${this.title}</div>
            <div class='appcard-list'>
              ${this.apps.map((app:any) =>
                html`
                  <fds-app-card @click='${() => this._handleAppCardClick(app)}' label='${app[this.appNameProperty]}' shortLabel='${app[this.shortAppNameProperty]}' class='appcard-item' extraDense secondary></fds-app-card>
                `
              )}
            </div>
          </div>
          <div class="menu-tools">
            <slot name='tools'></slot>
          </div>
        </div>
        <div class='bottom-action'>
          <fds-button @click='${() => this._handleLaunchpageClick(this.redirectHomeUrl)}' outlined primary label='Back to launchpage' icon='chevron_left'></fds-button>
        </div>
      </mwc-menu>
    `;
  }

  private _handleAppCardClick(app: any) {
    window.location.replace(`${this.baseUrl}${this.tenantId}/${this.channelType}/applications/${app[this.appNameProperty]}`);
  }

  private _handleLaunchpageClick(redirectHomeUrl: string) {
    if (redirectHomeUrl) {
      window.location.replace(redirectHomeUrl);
    } else {
      console.error('redirectHomeUrl is not defined!', redirectHomeUrl);
    }
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
